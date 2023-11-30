const express = require('express'); 
const app = express(); 

// ROUTES 
app.get("/", function(req, res){
    res.send("index.hbs"); 
    }) 


// START SERVER 
app.listen(3002, function(){ 
    console.log("Server has started") 
   });

