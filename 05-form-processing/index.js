const express = require('express'); 
const hbs = require('hbs'); // to configure hbs to use wax-on
const wax = require('wax-on'); // wax-on is for template inheritance

const app = express(); 

// configure wax-on for tempate inheritance
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts") // a layout is a template that other hbs can inherit from

// use for HBS for templates
app.set("view engine", "hbs"); 

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

// START SERVER 
app.listen(3002, function(){ 
    console.log("Server has started") 
   });

