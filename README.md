# Apt Quirks

### About

Apartment Quirks is a web application built using Ruby, Ruby on Rails, JavaScript, React.js and Redux. Its purpose is to help people get to know an apartment before they rent it by reading and writing reviews for the places they've lived in before. It's a single page application that utilized Ajax requests to deliver data without sending new page requests.

## Apartment Quirks allows user to:

1. Create an account
2. Log in/out
3. Search for any apartment
4. Like/unlike apartments
5. Post apartment reviews
6. Update reviews
7. Create and update a user profile
8. Send private messages to other users

# Customized User Authentication

My app has a custo built user authentication system that uses BCrypt password hashing to verify a users password without saving the password in the database.

## Back end
I developed the apps backend using Ruby on Rails with postgreSQL to store the data. The back end structure is RESTful.

## Front end

The front end is handled using React/Redux. As the user interacts with the app, I use React to update it's virtual DOM which then allows updates to the browsers DOM to only make changes that are necessary. This makes for very fast re-rendering and a smooth user experience. I use Redux to keep track of and update the state of the app. As the back end passes JSON objects to the front end, Redux accepts the new data and makes updates where necessary.

## Libraries

1. React.js
2. Redux
3. jQuery
4. Google API
5. Gems
  a. JBuilder
  b. BCrypt

#Code Guide

If you'd like to check out my code, these are some good sections to look through.

1. Controllers
2. Components
3. Routes


##Components

1. Apartment Show

2. Conversation

3. log in
