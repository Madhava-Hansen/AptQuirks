# Apt Quirks

### About

Apartment Quirks is a single-page web application built using Rails, React/Redux and postgreSQL. Its purpose is to help people get to know an apartment before they sign a lease.

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

My app has a custom built user authentication system that uses the Ruby BCrypt Gem password hashing to verify a users password without saving the password to database.

## Back end
I developed the apps backend using Ruby on Rails with postgreSQL to store the data. The back end structure is RESTful.

## Front end

The front end is handled using React/Redux. As the user interacts with the app, I use React to update it's virtual DOM which then allows updates to the browsers DOM to only make changes that are necessary. This makes for very fast re-rendering and a smooth user experience. I use Redux to keep track of and update the state of the app. As the back end passes JSON objects to the front end, Redux accepts the new data and makes updates where necessary.

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

1. Controllers
  * [Controllers](https://github.com/Madhava-Hansen/AptQuirks/tree/master/app/controllers/api)
2. Components
  * [Components](https://github.com/Madhava-Hansen/AptQuirks/tree/master/frontend/components)
3. Models
  * [Models](https://github.com/Madhava-Hansen/AptQuirks/tree/master/app/models)


##Components

1. Apartment Show
  * Renders the address text and a Google Map with the address location marked with a pin.
2. Conversation
  * Handles the sending and receiving of private messages to other users.
3. login
  * Take in the users username and password and sends an Ajax request to Rails for authentication.
4. Logout
  * Sends an Ajax request to the Rails SessionController which then dispatches null as the currentUser.
5. Apartment Search
  * Utilizes the Google Places API address search feature. Pulls out the street address, city, state and zip from the address object after the user submits an address search.
