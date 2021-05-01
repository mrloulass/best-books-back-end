# Best Books: Lab-12 best-books-back-end

**Author**: Louis Lassegue, Daniel Dills and Michael Ryan

**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

- Setting up backend server
- Connecting your front-end to an Express server. This Express server will connect to a Mongo database using Mongoose.

## Getting Started

1. Create github repo and make a git clone on local computer
2. Install all dependencies: `dotenv, express, mongoose and cors`
3. Create `.gitignore` and `.env` file. Next add PORT and DATABASE_URL environment variables in `.env` file.
4. Follow Mongoose  docs on getting started: [Mongoose Docs](https://mongoosejs.com/docs/index.html)
5. Send a `GET` to `/route name` requesting user from the database, and return them in the response.
6. On the Front-end Create a `NEW Component` to manage book data retrieval and display.

## Architecture

[Node JS](https://nodejs.org/en/): As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.

[NPM JS](https://docs.npmjs.com/): Use to help share and borrow packages.

[Express JS](http://expressjs.com/en/4x/api.html): A web frameork for Node.js

[NPM JS package: dotenv](https://www.npmjs.com/package/dotenv): Storing configuration in the environment separate from the code base.

[NPM JS package: cors](https://expressjs.com/en/resources/middleware/cors.html): Allow REACT app forntend to access data from server

[Heroku](https://www.heroku.com/home): Used to up load server app.

[Trello:project board](https://trello.com/en-US): Help manage projects.

[MongoDB](https://docs.mongodb.com/manual/introduction/): MongoDB’s document data model database

[Mongoose](https://mongoosejs.com/docs/index.html): Mongoose is an Object Data Modeling library for MongoDB and Node. js

## Change Log

04-27-2021 8:30 - Application now has a fully-functional express server, with a GET route for the location resource.

04-28-2021 7:30 - Added new Component to front-end and render backend data

04-29-2021 8:00 - Fixed bugs in back-end server

04-30-2021 3:00 - Used Bootstrap Carousel with `map()` to render all the books returned.

## Credit and Collaborations

Help from (TA) Joe Pennock, (TA) Chance Harmon, (TA) Kristian  Esvelt and (Instructor) Michelle Ferreirae

## Time Estimates

Name of feature: Connecting your front-end to an Express server (back-end)

Estimate of time needed to complete: 2 days

Start time: 7:30

Finish time: 5:00

Actual time needed to complete: 4 days
