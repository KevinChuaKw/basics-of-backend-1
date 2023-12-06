const express = require('express'); 
const hbs = require('hbs');
const wax = require('wax-on'); 

const app = express(); 

app.set('view engine','hbs'); 

app.use(express.urlencoded({
    "extended": false
}))

wax.on(hbs.handlebars); 
wax.setLayoutPath("./views/layouts"); 

app.use(express.static('public')); 

const helpers = require('handlebars-helpers')({
    handlebars: hbs.handlebars
})

// Sample hardcoded data for testing 

let foodRecords =[
    {
        id: 12345,
        foodName: "Duck Rice",
        calories: 450,
        meal: "lunch", 
        tags: ["less-oil", "low-fat"]
    },
    {
        id: Math.floor(Math.random()*10000)+1,
        foodName: "Chicken Rice",
        calories: 900,
        meal: "Breakfast", 
        tags: ["organic"]
    },
    {
        id: Math.floor(Math.random()*10000)+1,
        foodName: "Mixed Rice",
        calories: 834,
        meal: "Dinner", 
        tags: ["less-oil", "home-cooked", "organic", "healthy"]
    }, 
    {
        id: Math.floor(Math.random()*10000)+1,
        foodName: "Roasted Pork Rice",
        calories: 435,
        meal: "lunch", 
        tags: ["less-oil", "healthy"]
    }, 
]

// ROUTES HERE
// Known as the index Route 
// Where the 'r' is implemented

app.get('/', function(req,res){
    res.render("index",{
        "foodRecords":foodRecords
    })
})

app.get('/add-food', function(req,res){
    res.render('add-food'); 
})


app.post('/add-food', function(req,res){
    // extracting data from from and massage them if necessary
    const {foodName, calories, meal, tags} = req.body; 
    let selectedTags = [];
    if (tags){
        selectedTags = Array.isArray(tags) ? tags : [tags];
    }; 

    // creating the new record
    const newFoodRecord = {
        id: Math.floor(Math.random()*10000 + 1),
        foodName: foodName,
        calories: calories, 
        meal: meal, 
        tags: tags
    }

    // add to the "database"
    foodRecords.push(newFoodRecord); 

    // inform the browser (i.e. the client) to go to a new URL 
    res.redirect('/'); 

})

app.get('/edit-food/:foodId', function(req,res){
    // To get the food record by its food id
    let foodRecord = null;
    for (let record of foodRecords){
        if (record.id == parseInt(req.params.foodId)){
            foodRecord = record; 
            break; 
        }
    }

    res.render('edit-food', {
        foodRecord:foodRecord
    })
})


app.listen(3019, function(){
    console.log("Server has started");
})