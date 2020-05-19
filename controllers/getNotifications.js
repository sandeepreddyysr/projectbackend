var db=require('../db.js');
var notification=require('../models/notification');
var jwt = require('jsonwebtoken');
exports.newNotification = (req,res)=>{
    var imageurl;
    if(req.file){
        var image = req.file.path;
        var url = image.split('\\');
         imageurl = "http://localhost:4200/"+url[1];
    }
    var createNotification=new notification({
        title: req.body.title,
        description: req.body.description,
        link : req.body.link,
        image : imageurl,
        date : Date()
    })
    createNotification.save( function(err,data){
            if(err){
                res.satus(404);
            }
            else{
               return res.send(data);
                console.log("success");
            }
       })
 }
exports.getNotification = (req,res)=>{
   notification.find({}).sort({date:-1}).exec(function(err,data){
           if(err){
               res.satus(404);
           }
           else{
              return res.send(data);
               console.log("success");
           }
      })
}
