const dotenv = require('dotenv'); //allow us to use env variables
dotenv.config()
const WEATHER_KEY = process.env.WEATHER_KEY;
const GEO_USER = process.env.GEO_USER;
const PIX_KEY = process.env.PIX_KEY;

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');
const app = express();
const fetch = require('node-fetch');
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { ModuleFilenameHelpers } = require('webpack');
app.use(cors());
// Initialize the main project folder (points server code to the folder with the browser code)
app.use(express.static('dist'));


// Setup Server
app.get('/all', function (req, res){
    res.send(projectData);
});

app.post('/process-infos', function (req, res){
    const geonameEndpoint = 'http://api.geonames.org/';
    const geoQuery = `searchJSON?q=${req.body.place}&maxRows=10&username=${GEO_USER}`
    const pixBase = 'https://pixabay.com/api';
    const pixQuery = `/?key=${PIX_KEY}&q=${req.body.place}&image_type=photo`;
    fetch(geonameEndpoint+geoQuery)
    .then((res) => {
        return res.json();
    })
    .then((geoData) => {
        let coordinates = {}
        coordinates.lat = geoData.geonames[0].lat; //latitude
        coordinates.lng = geoData.geonames[0].lng; //longitude
        const weatherBase = req.body.weatherBase;
        const weatherQuery = `?lat=${coordinates.lat}&lon=${coordinates.lng}&key=${WEATHER_KEY}&include=minutely`;
        
        fetch(weatherBase+weatherQuery)
        .then((res) => {
            return res.json()
        })
        .then((wdata) => {
            fetch(pixBase+pixQuery)
            .then((res) => {
                return res.json();
            })
            .then((pixData) => {
                let retObj = {}
                retObj.wData = {
                    city: wdata.city_name,
                    timezone: wdata.timezone,
                    temp: wdata.data[0].temp, //in celsius
                    description: wdata.data[0].weather.description
                };
                retObj.pixData = {
                    totalHits: pixData.totalHits,
                    imageAddress: pixData.hits[0].webformatURL,
                    imageUrl: pixData.hits[0].userImageURL
                }
                res.send(retObj);
            })
        })
    })
    .catch(error => {
        console.log("error occurred: ", error);
    })
})

const port = 8080; 

let listening = () => {
    console.log(`server is running a port ${port}`);
}
const server = app.listen(port, listening);
