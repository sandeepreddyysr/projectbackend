var db=require('../db.js');
var User=require('../models/users');
exports.login = (req,res)=>{
    var uname = req.body.username;
var pass =  req.body.password;
console.log(req);
User.findOne({email:uname, password:pass}, function(err, result){

    if(err){
     res.status(500).send("Internal server Error");
    }
    if(result){

    res.send(result);

    }
    else{
        res.status(404).send("User not found");
    }

});

}

