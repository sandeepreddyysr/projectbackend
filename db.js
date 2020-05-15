var mongoose=require('mongoose');
var connection=mongoose.connect('mongodb://localhost/OmniwyseProject', {useNewUrlParser: true, useUnifiedTopology: true});
module.exports=connection;
