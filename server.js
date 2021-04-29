'use strict';

const express = require ('express');

require ('dotenv').config();

const app = express();

const mongoose = require ('mongoose');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const User = require('./models/User');

const info = new User ({
  email: 'dad@fake.com', books: [
    {name: 'Into the Wild', author: 'John Krakauer', description: 'In April 1992 a young man from a well-to-do family hitchhiked to Alaska and walked alone into the wilderness north of Mt. McKinley.', status: 'Read'},
    {name: 'Lord of the Rings', author: 'J.R.R.Tolkien', description: 'One Ring to rule the other Rings of Power as the ultimate weapon in his campaign to conquer and rule all of Middle-earth.', status: 'Read'},
    {name: 'The Giving Tree', author: 'Shel Silverstein', description: 'Every day the boy would come to the tree to eat her apples, swing from her branches, or slide down her trunk…and the tree was happy. But as the boy grew older he began to want more from the tree, and the tree gave and gave.', status: 'Un-read'}
  ]
});

info.save();

app.get('/books', (require, response) => {
  User.find((error, databaseResults) => {
    response.send(databaseResults);
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

