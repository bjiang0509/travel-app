# Travel App Project

## Overview
This project will build a travel app that returns the weather forecast based on the location and departure date. The departure date and return date must be within 16 days from the current day because the weather API has a 16 days interval for weather prediction.

## Content

### Webpack:
The build tool for this project is webpack, an open-source JavaScript module bundler.

### HTML: 
The project contains a static HTML page (index.html) in the src/client/views folder.

### SASS:
The website is styles with SASS. The .scss files in the src/client/styles folder will be converted to css by webpack via the sass-loader.

### JS:
The Javascript files on the client side is located in the src/client/js folder and the Javascript files on the server side is located in the src/server folder.

### APIs
This project utlized three APIs.

1. [GEONAMES API](https://www.geonames.org) returns the latitude and longitude of the location
2. [WEATHERBIT API](https://www.weatherbit.io) returns the weather of the location (needs the latitude and longitude in the request)
3. [PIXABAY API](https://pixabay.com) returns an image base on the location name

### Node.js and Express
The server is set up using `express` from node.js and `npm` (package manager for Node.js packages) can be used to install the dependencies for the project (`npm install`).

### dotenv
dotenv needs to be installed to use enviroment variables. The `.env` file is located in the root directory and it contains the api key provided by the APIs.

### Jest
Jest is installed to conduct functional testing. The relevant tests locate in the `__test__` folder. `npm run test` on the terminal will run the tests and return the result on the console.

## Running the Project

1. Replace .env file with personal API keys
2. `npm install` on the terminal
3. `npm run prod` on the terminal
4. `npm run start` on the terminal
