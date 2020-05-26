var db=require('../db.js');
var notification=require('../models/notification');
exports.newNotification = (req,res)=>{
    var imageurl;
    var date;
    if(req.file){
        var image = req.file.path;
        var url = image.split('\\');
         imageurl = "http://localhost:8080/uploads/"+url[1];
    }
    else{
        imageurl=null;
    }
    if(req.body.scheduledDate){
        date=req.body.scheduledDate;
    }else {
      date= Date();
    }
    var createNotification=new notification({
        title: req.body.title,
        description: req.body.description,
        link : req.body.link,
        imageURL : imageurl,
        date : date,
        isScheduled : req.body.isScheduled
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
    var currentTime = new Date();
   notification.find({date: { $lte: currentTime }}).sort({date:-1}).exec(function(err,data){
           if(err){
               res.satus(404);
           }
           else{
              return res.send(data);
               console.log("success");
           }
      })
}
