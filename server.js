const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");

require("./db/db");
app.use(session({
    secret: "hamburger dinner theater",
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const authController = require("./controllers/authcontroller");
const commentController = require("./controllers/commentController");
app.use("/auth/login", authController);
app.use("/comments", commentController);
app.listen(9000, () => {
    console.log("howdy cowboy");
});