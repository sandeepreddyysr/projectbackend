var express = require('express');
var app=express();
var jwt = require('jsonwebtoken');
var db=require('../db.js');
var notification=require('../models/notification');
exports.Schedules=(req,res)=>{
    jwt.verify(req.token,'secretkey',(err,userdata)=>{
        if(err){
            res.sendStatus(403);
            console.log(err);
        }
        else{
            var currentTime=new Date();
            notification.find({date :{$gt: currentTime}}).sort({date: -1}).exec(function(err,data){
                if(err){
                    res.satus(404);
                }
                else{
                   return res.send(data);
                    console.log("success");
                }
             
           })
         
        }
    })     

}
 exports.delete= function(req,res){
     notification.findByIdAndRemove(req.params.id,{useFindAndModify: false},function(err,data){
         if(err){
             res.status(404).send('internal server error');

         }
         else{
             res.send(data);
         }

     })

     }

     exports.update= function(req,res){
         var updateData={
            title : req.body.title,
            description : req.body.description,
            link : req.body.link
         }
         notification.findByIdAndUpdate(req.params.id,{$set:updateData},{new:true,upsert:false,useFindAndModify: false},function(err,updatedData){
               if(err){
                res.status(404).send('internal server error');
               }
               else{
                    res.send(updatedData);
               }
         })
     }
     