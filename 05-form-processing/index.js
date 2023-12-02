const express = require('express'); 
const hbs = require('hbs'); // to configure hbs to use wax-on
const wax = require('wax-on'); // wax-on is for template inheritance
const app = express(); 

// configure wax-on for tempate inheritance
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts") // a layout is a template that other hbs can inherit from

// use for HBS for templates
app.set("view engine", "hbs"); 

app.use(express.urlencoded({
    extend:false // use basic forms not advanced forms 
    // it is false because - For basis forms 
    // if it is extended true - For very complicated forms i.e. object in object, array in object
}))

// ROUTES 
app.get("/", function(req, res){
    res.render("index"); 
    }) 

app.get("/about-us", function(req, res){
    res.render("about"); 
    }) 

app.get("/contact-us", function(req, res){
    res.render("contact"); 
    }) 

// We want to add a route for Get / add-food
app.get("/add-food", function(req,res){
    res.render('add-food');
})

// We want to add a route for POST / add-food
// From the point of view from the user 
// app.post("/add-food", function(req,res){
//     const foodName = req.body.foodName; // it is defualt .body - there is no link to the hbs file body
//     const calories = req.body.calories; 
    
//     res.render("food-summary", {
//         foodName:foodName,
//         calories:calories
//     }); 
// })

// faster way by using destructing syntax to extract many keys from an object at one go
app.post("/add-food", function (req,res){
    const {foodName, calories, meal, cuisine} = req.body;
    res.render("food-summary", {
        foodName,
        calories,
        meal,
        cuisine
    })
})

// START SERVER 
app.listen(3002, function(){ 
    console.log("Server has started") 
   });

