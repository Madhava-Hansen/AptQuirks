# Apt Quirks

### About

Apartment Quirks is a single-page web application built using Ruby on Rails, React.js, JavaScript, Redux and postgreSQL. Its purpose is to help people get to know an apartment before they sign a lease.

![show page screenshot](https://github.com/Madhava-Hansen/AptQuirks/blob/master/app/assets/images/show_page_screen_shot.jpg)

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

My app has a custom built user authentication system that Utilizes the Ruby BCrypt Gem. Passwords are sent to Rails and then put through the BCrypt hashing function for security. Each users hashed password is saved in the database for authentication comparison upon logging in.

## Back end
The back end is handle with Ruby on Rails. The MVC structure allows me to route requests to the appropriate controllers, check validations on the model level and passes SQL queries to postgreSQL. Rails receives data back from posgres and converts it to JSON, using jBuilder, before passing it back to the front end.

## Front end

The front end is handled using React.js and Redux. My app interacts with rails by sending Ajax requests and receiving JSON objects back. Redux holds all the data as objects in its Store and passes the data down to the appropriate components so they can correctly render information back to the user.

## Libraries

1. React.js
2. Redux
3. jQuery
4. Google API

## Gems
  * JBuilder
  * BCrypt

## Code Guide

If you'd like to check out my code, these are some good sections to look through.

1. [Controllers](https://github.com/Madhava-Hansen/AptQuirks/tree/master/app/controllers/api)

2. [Components](https://github.com/Madhava-Hansen/AptQuirks/tree/master/frontend/components)

3. [Models](https://github.com/Madhava-Hansen/AptQuirks/tree/master/app/models)


## Components

### Apartment Show
  * Renders the address text and a Google Map with the address location marked with a pin.
### Conversation
  * Handles the sending and receiving of private messages to other users.
### login
  * Take in the users username and password and sends an Ajax request to Rails for authentication.
### Logout
  * Sends an Ajax request to the Rails SessionController which then dispatches null as the currentUser.
### Apartment Search
  * Utilizes the Google Places API address search feature. Pulls out the street address, city, state and zip from the address object after the user submits an address search.
