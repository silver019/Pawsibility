//SURVEY MODEL
var express = require("express");
var router = express.Router();

var db = require("../models");

router.get('/',function(req,res){
    res.render('survey')
});

router.post('/api/submit',function(req,res){
   console.log(req.body);
   var scores = req.body['scores'];
   var totalScore = 0;
   console.log(scores);

   for(var i = 0; i < scores.length; i++) {
    
    totalScore += scores[i];
} 

db.Dog.find({
    where: { scores: totalScore }
      })
    .then(function (retreivedog) {
        res.json(retreivedog); 
    })
   
});









module.exports= router;
