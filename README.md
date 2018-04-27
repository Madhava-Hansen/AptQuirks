# Apt Quirks

### About

Apartment Quirks is a single-page web application built using Ruby on Rails, React.js, JavaScript, Redux and postgreSQL. It's a place for people to tell their story about living at an apartment, so that others who are looking for a new one can be more informed.

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
9. Upload images of apartments

## Customized User Authentication

My app has a custom built user authentication system that utilizes the Ruby BCrypt Gem. Encrypted passwords are sent to Rails and then put through the BCrypt hashing function. Hashed passwords are stored in the Users table and then retrieved whenever a user logs in. If the users hashed password from the Users table matches the incoming login password hash, the user has been successfully authenticated and a session is created.

## Server side
I chose to use Ruby on Rails to handle my server side code for this project. Not only do I love the Ruby programming language but Rails is an excellent MVC framework for getting server side code up and running quickly. Incoming requests are processed by the Routes.rb file which sends requests to the appropriate controller. The controller uses the Active Record ORM that is built into Rails to persist or request data from my database. I use jbuilder to format the data before sending the JSON response back to the client side for rendering in the browser.  

## Client side

The frontend is handled using React.js and Redux. My app interacts with Rails by sending Ajax requests and receiving JSON objects back. The Redux Store maintains and updates the state of my application as well as passing state down to the appropriate components so they can correctly render information back to the user.

## Libraries

1. React.js
2. Redux

## Third party APIs

1. Google Places
2. Google Maps

## Gems
1. JBuilder
2. BCrypt
3. figaro

## Code Guide

If you'd like to check out my code, these are some good sections to look through.

1. [Controllers](https://github.com/Madhava-Hansen/AptQuirks/tree/master/app/controllers/api)

2. [Components](https://github.com/Madhava-Hansen/AptQuirks/tree/master/frontend/components)

3. [Models](https://github.com/Madhava-Hansen/AptQuirks/tree/master/app/models)


## Components

### Apartment Show
  * Each time a user searches for an address, the apartmentShow component will be rendered. This component sends Ajax requests to the database for likes, quirks and images associated with the current apartment id. It then renders the address, Google Map with location pin, likes, quirks and images for the current apartment.  
### Conversation
  * When this component mounts, it sends an Ajax request for all the conversations that are associated with the current user. Each conversation has an event listener which links the user to that particular conversation.
### Login
  * Take in the users username and password and sends an Ajax request to Rails for authentication, upon success the user will be redirected to the home page so they can start searching. Upon failure, an error message will be rendered letting the user know they have not been authenticated and they should try again.
### Logout
  * Sends an Ajax request to the Rails #SessionController. The session controller sets the current_user to nil, sets the users session_token to nil. Then I dispatch an action to the Redux store with null as the currentUser.
### Apartment Search
  * Utilizes the Google Places API address search feature. Pulls out the street address, city, state and zip from the address object after the user submits an address search and then redirects the user to the apartmentShow component.
