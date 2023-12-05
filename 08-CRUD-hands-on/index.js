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

// Mock DataBase
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

app.get('/', function(req,res){
    res.render("index",{
        "foodRecords":foodRecords
    })
})



app.listen(3000, function(){
    console.log("Server has started");
})