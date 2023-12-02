const express = require('express'); 
const hbs = require('hbs'); 
const wax = require('wax-on'); 
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

// START SERVER 
app.listen(3003, function(){ 
    console.log("Server has started") 
   });

