//SURVEY MODEL
var express = require("express");
var router = express.Router();

var db = require("../models");

router.get('/', function (req, res) {
    res.render('survey')
});



router.get("/api", function(req, res){

    db.Dog.findAll()
        .then(results => {
            console.log(JSON.stringify(results) + "/api results");
                res.json(results);
        })
});

router.post('/api/submit', function (req, res) {
    console.log(req.body);
    var scores = req.body['scores[]'];
    console.log(`Scores is: ${scores}`);

    var totalScore = 0;

    for (var i = 0; i < scores.length; i++) {

        totalScore += parseInt(scores[i]);
    }   

    db.Owner.create({
        name:       req.body.name,
        email:      req.body.email,
        scores:     totalScore,
        zipcode:    req.body.zipcode
    })
        .then(function (owner) {
            // Matching Logic Here
            res.json( {
                name:       owner.name,
                email:      owner.email,
                scores:     owner.scores,
                zipcode:    owner.zipcode
            }) // send the best match {name: "", age:"", img:""}
        })
       .catch(function(err){
            res.status(401).json(err);
        })

});

module.exports = router;
