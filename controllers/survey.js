//SURVEY MODEL
var express = require("express");
var router = express.Router();

var db = require("../models");

router.get('/', function (req, res) {
    res.render('survey')
});



router.get("/api", function(req, res){
    db.Dog.findAll({})
        .then(function(results){
            console.log(JSON.stringify(results) + "/api results")
                res.json(results);
        })
});

router.post('/api/submit', function (req, res) {
    console.log(req.body);
    var scores = parseInt(req.body['scores']);
    var totalScore = 0;

    for (var i = 0; i < scores; i++) {

        totalScore += scores[i];
    }   

    

    db.Dog.create({
        name:req.body.name,
        email:req.body.email,
        scores: req.body.scores,
        zipcode:req.body.zipcode
    })
        .then(function (retreivedog) {
            // Matching Logic Here
            res.json( {
                name:retreivedog.name,
                email:retreivedog.email,
                scores: retreivedog.scores,
                zipcode:retreivedog.zipcode
            }) // send the best match {name: "", age:"", img:""}
        })
       .catch(function(err){
            res.status(401).json({errro:"Error"})
        })

});

module.exports = router;
