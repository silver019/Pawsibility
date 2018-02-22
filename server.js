//DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var db = require("./models");
var sequelize = require("sequelize");

//CREATING SERVER INSTANCE
var app = express()

//SERVE STATIC CONTENT FOR APP FROM THE PUBLIC DIR IN THE APP DIR
app.use(express.static("public"));

//PARSE APP
app.use(bodyParser.urlencoded({
	extended: false
}));

//SETTING UP HANDLEBARS
app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));

app.set("view engine", "handlebars"	);
//STOPPED