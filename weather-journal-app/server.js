// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8080 ;
const server = app.listen(port , ()=>{
    console.log(`server is running on port : ${port}`)
})

// Get route
app.get('/senData',function(req,res){
    res.send(projectData)
})

// Post route
app.post('/getData',function(req,res){
    projectData["date"]=req.body.date;
    projectData["temp"]=req.body.temp;
    projectData["feel"]=req.body.feel;
    console.log(projectData);
  
})
