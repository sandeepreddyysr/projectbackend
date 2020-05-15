const mongoose=require('mongoose');
const Schema=mongoose.Schema;

var notification=new Schema({
    title:String,
    description:String,
});
module.exports = mongoose.model("notification",notification);
