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
const multer = require('multer');

const fileFilter = (req,file,cb)=>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
        cb(null,true);
    }else{
        cb(null,false);
    }
}
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
   
  var upload = multer({ 
      storage: storage ,
      fileFilter:fileFilter
    })
app.post('/create', upload.single('image'),getNotification.newNotification);
app.post('/login',loginController.login);
app.get('/notifications',getNotification.getNotification);
app.listen(8080,()=>{

    console.log("Server started listening on port 8080");
});
