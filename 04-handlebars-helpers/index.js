const express = require('express'); 
const hbs = require('hbs'); // to configure hbs to use wax-on
const wax = require('wax-on'); // wax-on is for template inheritance

const app = express(); 

// configure wax-on for tempate inheritance
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts") // a layout is a template that other hbs can inherit from

// use for HBS for templates
app.set("view engine", "hbs"); 

// writing a custom hbs helper to compare two values
// 1st Parameter: the name of the helper
// 2nd 
hbs.handlebars.registerHelper("ifEquals", function(arg1, arg2, options){
    if (arg1 == arg2){
        // the 'this' refer to the hbs
        return options.fn(this); 
    } else {
        return options.inverse(this); 
    }
}); 

// ROUTES 
app.get("/", function(req, res){
    res.render("index"); 
    }) 

app.get("/", function (req,res){
    const menu= ["Apple", "Watermellon", "Orange"];
    const offer = true; 
    res.render('index', {
        fruits: menu
        
    })
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

