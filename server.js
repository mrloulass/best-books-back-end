'use strict';

const express = require('express');

const app = express();

app.use(express.json());

const cors = require('cors');

require('dotenv').config();


app.use(cors());

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const User = require('./models/User');


// const testRoute = require('./routes');


const userOne = new User({
  email: 'michaelryan2895@gmail.com', books: [
    { name: 'Into the Wild', author: 'John Krakauer', description: 'In April 1992 a young man from a well-to-do family hitchhiked to Alaska and walked alone into the wilderness north of Mt. McKinley.', status: 'Read' },
    { name: 'Lord of the Rings', author: 'J.R.R.Tolkien', description: 'One Ring to rule the other Rings of Power as the ultimate weapon in his campaign to conquer and rule all of Middle-earth.', status: 'Read' },
    { name: 'The Giving Tree', author: 'Shel Silverstein', description: 'Every day the boy would come to the tree to eat her apples, swing from her branches, or slide down her trunk…and the tree was happy. But as the boy grew older he began to want more from the tree, and the tree gave and gave.', status: 'Un-read' }
  ]
});
const userTwo = new User({
  email: 'louislassegue@gmail.com', books: [
    { name: 'Into the Wild', author: 'John Krakauer', description: 'In April 1992 a young man from a well-to-do family hitchhiked to Alaska and walked alone into the wilderness north of Mt. McKinley.', status: 'Read' },
    { name: 'Lord of the Rings', author: 'J.R.R.Tolkien', description: 'One Ring to rule the other Rings of Power as the ultimate weapon in his campaign to conquer and rule all of Middle-earth.', status: 'Read' },
    { name: 'The Giving Tree', author: 'Shel Silverstein', description: 'Every day the boy would come to the tree to eat her apples, swing from her branches, or slide down her trunk…and the tree was happy. But as the boy grew older he began to want more from the tree, and the tree gave and gave.', status: 'Un-read' }
  ]
});
const userThree = new User({
  email: 'dills253@gmail.com', books: [
    { name: 'Into the Wild', author: 'John Krakauer', description: 'In April 1992 a young man from a well-to-do family hitchhiked to Alaska and walked alone into the wilderness north of Mt. McKinley.', status: 'Read' },
    { name: 'Lord of the Rings', author: 'J.R.R.Tolkien', description: 'One Ring to rule the other Rings of Power as the ultimate weapon in his campaign to conquer and rule all of Middle-earth.', status: 'Read' },
    { name: 'The Giving Tree', author: 'Shel Silverstein', description: 'Every day the boy would come to the tree to eat her apples, swing from her branches, or slide down her trunk…and the tree was happy. But as the boy grew older he began to want more from the tree, and the tree gave and gave.', status: 'Un-read' }
  ]
});

userOne.save();
userTwo.save();
userThree.save();

// app.get( '/test', testRoute);

app.get('/books', (request, response) => {
  let email = request.query.user;
  User.find({email: email}, (error, databaseResults) => {
    console.log(databaseResults);
    response.send(databaseResults[3]);
  });
});

app.get('/users/:email', (request, response) => {
  User.find({ email: request.params.email }, (error, userData) => {
    response.send(userData);
  });
});

app.post('/books', (request, response) => {
  console.log(request.body, 'check');
  User.find({ email: request.body.email }, (error, userData) => {
    if (userData.length < 1) {
      response.status(400).send('user does not exist');
    } else {
      let user = userData[0];
      user.books.push({
        name: request.body.name,
        author: request.body.author,
        description: request.body.description,
        status: request.body.status
      });
      user.save().then(response.send(user.books));
      // add catch for error
    }
  });
});

app.delete('/books/:id', (request, response) => {
  let email = request.query.user;
  User.find({ email: email}, (error, userData) => {
    let user = userData[0];
    user.books = user.books.filter(book => `${book._id}` !== require.params.id);
    console.log(user.books);
    user.save().then(userData => {
      response.send(userData.books);
    });
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

