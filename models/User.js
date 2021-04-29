'use strict';

const mongoose = require('mongoose');

// const {Schema} = mongoose;

const userSchema = mongoose.Schema({
  email: {type: String, required: true},
  books: [BookSchema]
});

const BookSchema = new mongoose.Schema({
  name: String,
  description: String,
  status: Boolean
});

