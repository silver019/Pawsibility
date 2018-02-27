//DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var handlebars = require("express-handlebars");
var controller = require("./controllers/survey")
var sequelize = require("sequelize");
var app = express();
const port = process.env.PORT || 8000;


var db = require("./models");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set("view engine", "handlebars");


app.use('/', controller)




db.sequelize.sync({force: true})
    .then(() => {

        app.listen(port, () => {
            console.log("Server is LIVE at ", port);
        });
         console.log("Sequelize is starting");
    })
    .catch(() => {
        console.log("Error");
    })
