// Dependencies
var express = require("express");
var path = require("path");
const { nextTick } = require("process");

// Sets up the Express App
var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
// Starts server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });