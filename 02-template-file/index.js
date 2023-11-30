const express = require('express'); 
const app = express(); 

// configure Express to use HBS
app.set("view engine", "hbs"); 

// configure Express to send back static files
// express.static is function call to Express which will
// setup the static files and the string parameter
// is the name of the folder to find those files
app.use(express.static("public")); 

// ROUTES 
app.get("/", function(req, res){
    // we want our response to be the content of the file 'views\index.hbs'
    const today = new Date(); // creating a new date object, it will automatically be today's date (on the server)
    res.render("index.hbs", {
            "todayDate": today,
            "name": "Kevin Chua"
        }); // express allows us to send back the entire file - this is know as tempates
    }) 

app.get('/about-us', function(req,res){
    res.render('about', {
        "name": "Kevin Chua"
    })
})

// START SERVER 
app.listen(3001, function(){ // one port can only be used by one software at a time
    console.log("Server has started") 
   });


