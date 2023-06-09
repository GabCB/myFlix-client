# My Flix App (Cilent Side)
![My Flix App- Client](https://i.imgur.com/MMMjuEV.png)

![My Flix App- Client](https://i.imgur.com/MMMjuEV.png)

## Table of Contents

- [Overview](#overview)
- [Essential Views & Features](#essential-views--features)
  - [Movie View](#movie-view)
  - [Login View](#login-view)
  - [Signup View](#signup-view)
  - [Profile View](#profile-view)
- [Process](#process)
  - [Techologies](#built-with)
  - [Dependencies](#dependencies)
  - [Dev Dependencies](#dev-dependencies)
  - [Linting Configuration](#it-also-uses-the-following-linting-configuration)
- [API documentation](#api-documentation)
- [Links](#links)
- [Acknowledgments](#acknowledgments)


## Overview
myFlix is an app which main function is to provide users information (title, description, genre, director) about different movies.

In this app users can register, update their personal information, manage a list of their favorite movies and delete their account.

This client-side User Interface is connected to a REST API and a Mongo database that have have been [developed](https://github.com/GabCB/movie-web-app) previously.

## Essential Views & Features
Returns ALL movies to the user (each movie item with an image, title, and description)
Filtering the list of movies with a “search” feature
Ability to select a movie for more details
Ability to log out
Ability to navigate to Profile view

### Movie View:
- Returns data (description, genre, director, image) about a single movie to the user
- Allows users to add a movie to their list of favorite

### Login View:
- Allows users to log in with a username and password

### Signup view
- Allows new users to register (username, password, email, date of birth)

### Profile view
- Displays user registration details
- Allows users to update their info (username, password, email, date of birth)
- Displays favorite movies
- Allows users to remove a movie from their list of favorites
- Allows existing users to delete the account

## Process

### Built with:
- React
- Bootstrap
- JavaScript
- HTML
- CSS

### Dependencies:
- "bootstrap": "^5.2.3",
- "prop-types": "^15.8.1",
- "react": "^18.2.0",
- "react-bootstrap": "^2.7.2",
- "react-dom": "^18.2.0",
- "react-router": "^6.9.0",
- "react-router-dom": "^6.9.0",
- "react-toastify": "^9.1.2"

### Dev Dependencies:
- "@parcel/transformer-sass": "^2.8.3",
- "process": "^0.11.10"

### It also uses the following linting configuration:
- ESLint rules
- Prettier configuration

### API documentation
Information about the [API](https://github.com/GabCB/movie-web-app) used in this project can be found [here](https://moviewebapp.herokuapp.com/documentation.html).

## Links
[Live site URL](https://myawesomeflix.netlify.app/login) <br>
[Code URL](https://github.com/GabCB/myFlix-client/tree/myFlix-client_3.9) <br>
[API Url](https://moviewebapp.herokuapp.com/)


## Acknowledgments

I would like to thank my Career Foundry Tutor and Mentor for guiding me through the whole process.-