// Dependencies 
const express = require('express'); 

const app = express(); 
// ROUTES // All express code needs to be wihtin the lines until the app.listen
app.get("/", function(req, res){
    // res is the response object
    res.send("Hello World"); 
    }) 

// PASSING DATA VIA THE URL

// ':firstName" is a place holder (URL parameter). The name of the placeholder is 'firstName'
// /hello/paul then it means the `firstName` parameter should contain `paul`
// /hello/kevin then it means the `firstName` parameter should contain `kevin`
app.get("/hello/:firstName/:lastName", function(req,res){ // within the route, I cannot have 2 of the same 'words' in the route. 
    res.send("Hello"); 
})

// Query strings 
// The parameters for the query string wil not be in the route URL
app.get("/addTwo", function(req,res){
    const n1 = parseInt(req.query.n1); // we expect the kets in the query string to be 'n1' and 'n2' respectively
    const n2 = parseInt(req.query.n2); 
    const sum = n1 + n2  
    res.send("Sum = "+sum); 
})

app.get("/about-us", function(req,res){
    res.send("About Us"); 
})

// START SERVER 
app.listen(3000, function(){ // the port number is "8000" 
    console.log("Server has started") 
   });
// to start the server, type 'node index.js' 
// into the terminal 
