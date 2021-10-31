'use strict';
const express = require('express');


const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const notFound = require('./handlers/404')
const stamper = require('./middleware/stamper')

app.get('/', (req, res) =>{
    res.send('welcome from the Home page 😄')
})


app.get('/data', stamper,(req, res) =>{
    const data ={
        10:'even',
        5:'odd',
        time: req.timestamp,
        number_of_requests:req.numberOfRequests,
    }
    res.status(200).json(data);
})

function start() {
    app.set( 'port', ( process.env.PORT || 5000 ));

    // Start node server
    app.listen( app.get( 'port' ), function() {
      console.log( 'Node server is running on port ' + app.get( 'port' ));
      });
}
app.use('*', notFound)
module.exports = { 
    app, 
    start
}



