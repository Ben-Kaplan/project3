const mongoose = require('mongoose');


const CommentSchema = new mongoose.Schema({
  Rating: Number,
  Review: String
});

module.exports = mongoose.model('Comments', CommentSchema);