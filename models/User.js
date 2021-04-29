'use strict';

const mongoose = require('mongoose');

const {Schema} = mongoose;

const BookSchema = new Schema({
  name: String,
  author: String,
  description: String,
  status: String
});

const userSchema = new Schema({
  email: {type: String, required: true},
  books: [BookSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
