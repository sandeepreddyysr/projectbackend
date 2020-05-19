const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db=require('../db.js');

var user = new Schema({

    username:String,
    email: String,
    mobile_number:Number,
    isAdmin: Boolean,
    password: String
 
});
module.exports = mongoose.model('User',user);

