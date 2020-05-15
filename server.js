var express = require('express');
var app = express();
var User = require('./models/users');
var bodyParser = require('body-parser');
var getNotification=require('./controllers/getNotifications');
var loginController = require('./controllers/loginController');
var cors = require('cors');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.post('/create',getNotification.newNotification);
app.post('/login',loginController.login);
app.get('/notifications',getNotification.getNotification);
app.listen(8080,()=>{

    console.log("Server started listening on port 8080");
});
