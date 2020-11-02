//Import Required Modules
var express = require('express');
var app = express();
//Bring in our controller
var todo_controller = require('./controllers/todo_controller');

var port = 4000;
// Set up view engine
app.set('view engine','ejs');
// Set up middleware to find static files
app.use(express.static('public'));

//Fire controllers
todo_controller(app);

// Have server listen for port 4000 and fire a callback function for when it starts to log to the console

app.listen(port,()=>{
    console.log(`Server started on localhost:${port}`);
})
