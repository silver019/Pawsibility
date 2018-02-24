module.exports=function(router){
router.post("/api/submit",function(req,res){
   console.log(req.body);

});

router.get('/',function(req,res){
    res.render('survey',)
});
}


