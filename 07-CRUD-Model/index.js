// const means never changes - short for constant
const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');

// creates a new instance of an express application
// the `app` variable shouldn't be changed
const app = express();

// setup the view engine
app.set('view engine', 'hbs');
app.use(express.static('public'));

// setup wax on so that it will works with hbs
wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts')

// require in 188 handlebar helpers
require('handlebars-helpers')({
  handlebars: hbs.handlebars
});


// CREATE A GLOBAL ARRAY TO ACT AS IN THE IN-MEMORY DATABASE
// the global array foodRecords store all the food entries that the user has typed in
// using the array as a data store is temporary
// when the server restarts (i.e nodemon restarts the server) all data will be gone
let foodRecords = [
    {
        "id": Math.floor(Math.random() * 10000) + 1,
        "foodName": "Chicken Rice",
        "calories": 500,
        "meal":"lunch",
        "tags":["organic","less-oil"]
    },
    {
        "id": Math.floor(Math.random() * 10000) +1,
        "foodName": "Boston Clam Chowder",
        "calories": 750,
        "meal": "dinner",
        "tags": ["home-cooked"]
    },
    {
        "id": Math.floor(Math.random() * 10000) +1,
        "foodName": "Tuna Sandwich",
        "calories": 600,
        "meal": "snack",
        "tags": ["gluten-free"]
    }
];


// ROUTES HERE

app.get('/', function(req,res){
    // essentially fetch all the records in the database
    // and display them
    res.render('index.hbs', {
        'foodRecords': foodRecords
    })
})


// END ROUTES

app.listen(3100, ()=>{console.log("Server started")});