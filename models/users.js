const mongoose = require('mongoose');
const Schema = mongoose.Schema;
exports.db=mongoose.connect(newFunction(), {useNewUrlParser: true, useUnifiedTopology: true});

var user = new Schema({

    username:String,
    email: String,
    mobile_number:Number,
    isAdmin: Boolean,
    password: String
 
});
module.exports = mongoose.model('User',user);

function newFunction() {
    return 'mongodb://localhost/OmniwyseProject';
}
