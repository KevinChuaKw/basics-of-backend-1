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

// require in 188 handlebar helpers
require('handlebars-helpers')({
    handlebars: hbs.handlebars
})

// Sample hardcoded data for testing 

let foodRecords =[
    {
        "id": 12345,
        "foodName": "Duck Rice",
        "calories": 450,
        "meal": "lunch", 
        "tags": ["less-oil", "low-fat"]
    },
    {
        "id": Math.floor(Math.random()*10000)+1,
        "foodName": "Duck Rice",
        "calories": 450,
        "meal": "lunch", 
        "tags": ["less-oil", "low-fat"]
    },
    {
        "id": Math.floor(Math.random()*10000)+1,
        "foodName": "Duck Rice",
        "calories": 450,
        "meal": "lunch", 
        "tags": ["less-oil", "low-fat"]
    }, 
]

//ROUTES HERE

app.get("/", function(req, res){
    res.render("index", {
            foodRecords: foodRecords
        })
    }) 




// app.post("/add-food", function (req,res){
    
// })


// END ROUTES 

// Server
app.listen(3090, function(){
    console.log("Server has started"); 
})
