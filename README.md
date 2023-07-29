# Social-media-api

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description
This is a social media api that allows users to create, update, and delete users, thoughts, and reactions. Users can also add and remove friends from their friend list.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Walkthrough](#walkthrough)


## Installation
First start by cloning the repo to your local machine. Then run `npm install` to install all dependencies. Then run `npm start` to start the server.

## Usage

after starting the server you can use Postman or Instomnia to test the routes. The routes are as follows:

### User Routes
* GET `/api/users` - get all users
* GET `/api/users/:id` - get a single user by id
* POST `/api/users` - create a new user
* PUT `/api/users/:id` - update a user by id
* DELETE `/api/users/:id` - delete a user by id
* POST `/api/users/:userId/friends/:friendId` - add a friend to a user's friend list
* DELETE `/api/users/:userId/friends/:friendId` - remove a friend from a user's friend list

### Thought Routes
* GET `/api/thoughts` - get all thoughts
* GET `/api/thoughts/:id` - get a single thought by id
* POST `/api/thoughts` - create a new thought
* PUT `/api/thoughts/:id` - update a thought by id
* DELETE `/api/thoughts/:id` - delete a thought by id
* POST `/api/thoughts/:thoughtId/reactions` - add a reaction to a thought
* DELETE `/api/thoughts/:thoughtId/reactions/:reactionId` - remove a reaction from a thought

## Walkthrough

[Walkthrough](https://drive.google.com/file/d/1vEE02uVEl9ISG0_7iw7eGUYhx0EIuqDb/view)








