const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  comments: []
});

module.exports = mongoose.model('User', UserSchema);