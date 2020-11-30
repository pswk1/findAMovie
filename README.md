# findamovie

## Description
The application utilizes the [OMDB API](http://www.omdbapi.com/) to allow users to search for popular movie titles and their relevant information.

## Features
- Users may search for movie titles
- In the search results, users may read more about the movies, and give a vote thumbs up/down for approval or lack thereof.
- A table of movies that have received votes will be displayed with each movie's respective votes.

## Languages and Technologies
- Javascript
- React
- localStorage (for storing votes that movies may receive)
- [Material UI](https://material-ui.com/)

## Installation and Usage
- Clone this repository into your machine.
- Run ```npm install``` to install dependencies.
- Obtain a free API key for the OMDB API [here](http://www.omdbapi.com/apikey.aspx).
- Enter your API key in the API file in utils [here](https://github.com/pswk1/findamovie/blob/main/src/utils/API.js).
    - If you clone this repository, that link won't work, please proceed to the utils directory in your cloned repo.
    - Enter the key in the KEY variable: ```const KEY = '&apikey=';```
- Run ```npm start``` at the root of your repository to start the application.

## Contributors
Developed by [Peter Kang](https://github.com/pswk1).  

[LinkedIn](https://www.linkedin.com/in/peterswkang/)


