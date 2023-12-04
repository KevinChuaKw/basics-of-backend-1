// const means never changes - short for constant
const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');

// creates a new instance of an express application
// the `app` variable shouldn't be changed
const app = express();

// set up the view engine
app.set('view engine', 'hbs'); 
app.use(express.static('public')); 

// enable forms
app.use(express.urlencoded({
    extended: false
})); 

// setup wax-on so that it will work with HBS 
wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

