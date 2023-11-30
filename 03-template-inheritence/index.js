const express = require('express'); 
const hbs = require('hbs'); // to configure hbs to use wax-on
const wax = require('wax-on'); // wax-on is for template inheritance

const app = express(); 

// configure wax-on for tempate inheritance
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts")

// ROUTES 
app.get("/", function(req, res){
    res.send("index.hbs"); 
    }) 


// START SERVER 
app.listen(3002, function(){ 
    console.log("Server has started") 
   });

