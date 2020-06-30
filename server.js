//Dependences

var express = require("express");

// var PORT = process.env.PORT || 3000;

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const apiRoutes = require('./app/routing/apiRoutes');
const htmlRoutes = require('./app/routing/htmlRoutes');

// apiRoutes(app)
htmlRoutes(app)

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});