//DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var handlebars = require("express-handlebars");
var controller = require("./controllers/survey")
var sequelize = require("sequelize");
var app = express();
var PORT =8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set("view engine", "handlebars");


app.use('/', controller)

app.listen(PORT, () => {
  console.log(`listening @ PORT: ${PORT}`);
});
