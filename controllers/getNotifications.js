var db=require('../db.js');
var notification=require('../models/notification');
exports.newNotification = (req,res)=>{
    var createNotification=new notification({
        title: req.body.title,
        description: req.body.description
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
   notification.find({}, function(err,data){
           if(err){
               res.satus(404);
           }
           else{
              return res.send(data);
               console.log("success");
           }
      })
}
