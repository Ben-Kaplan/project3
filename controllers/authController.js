const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const passport = require("passport");
// register route
router.post("/register", async (req, res) => {
  try {
    console.log("posting to route");
    const createdUser = await User.create(req.body);
    console.log(createdUser);
    res.json({
      status: 200,
      data: createdUser
    });
    req.session.loggedIn = true;
  } catch (err) {
    res.send(err);
  }
});
// login route
router.post("/login", async (req, res, next) => {
  try {
    const passportCallback = await passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/auth"
    });
    passportCallback(req, res, next);
    req.session.loggedIn = true;
    res.json({
      status: 200,
      data: "login successful"
    });
  } catch (err) {
    res.json({
      status: 400,
      data: err
    });
  }
});
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login"]
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function(req, res) {
    res.redirect("/");
  }
);

module.exports = router;