// This is the ain express file for routing and showing data on webpage

// Import Express
let express = require("express");
// Import express handlebars
let  expressHandlebars = require("express-handlebars");

// Import Controller for using the routes as written their
let routes = require("./controllers/burgers_controller.js");

// Run Applicaiton Using Express
let app = express();
// Port for the application
let PORT = 3000;
// This is the directory from where static content will be loaded
let DIRECTORY = "public";
// Use the directory and load content
app.use(express.static(DIRECTORY));
// Set urlencoding true
app.use(express.urlencoded({ extended: true }));
// Using ofjson format
app.use(express.json());

// Configure the express engine
let ENGINE_TYPE = "handlebars"
app.engine(ENGINE_TYPE,  expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", ENGINE_TYPE);
// Above two lines set the engine to handlebars

// Set the routes
app.use(routes);


// After above configuration, start the server, on given port
app.listen(PORT, function() {
    console.log("Eat the Burger startetd at : http://localhost:" + PORT);
});
