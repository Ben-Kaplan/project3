const mongoose = require('mongoose');


const CommentSchema = new mongoose.Schema({
  title: String,
  review: String
});

module.exports = mongoose.model('Comments', CommentSchema);