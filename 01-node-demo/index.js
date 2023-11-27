const express = require('express');
const app = express();  // express function will return a new instance Express

// setup some routes
app.get("/", function(req,res){
    res.send("hello world"); // a route is combination of the "/" and 
    // a function
    // "res" stands for response - There is a response 
})

app.get("/about-us", function(req,res){
    res.send("About Us");
})

// For new changes to take place. You need to restart the server
// starts the server
app.listen(8000, function(){ // the port number is "8000" 
 console.log("Server has started") 
});
