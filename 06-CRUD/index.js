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

app.get('/add-food', function(req,res){
    res.render("add-food"); 
})

app.post('/add-food', function(req,res){
    res.send("This is for adding food"); 
})

// app.post("/add-food", function (req,res){
    
// })


// Route display the confirmation of delete

app.get("/delete-posting/:postingId", functions (req,res){
    
    // 1. Get the ID of the record from the URL parameters
    
    
    // 2. Find the record from the database
     

        // match by their id 
})

// there are differences between filter and find 
// filter will give you back a array of items 
// find will give you one item only 


// foreach is another way to do the for loop 
// it is not a very popular and well used 




// converting a funtion into a arrow function 




// When putting in {{}} you can put in a handlebar helper within the {{}} in the hbs file for helpers in the hbs filter



// END ROUTES 

// Server
app.listen(3090, function(){
    console.log("Server has started"); 
})
