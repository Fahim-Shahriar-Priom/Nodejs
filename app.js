//decleration
var express = require('express');
var bodyParser = require('body-parser');
var ejs_layout = require('ejs-layouts');
var expressSession = require('express-session');
const fileUpload = require('express-fileupload');

var app = express();
var login = require('./controllers/login');
var logout = require('./controllers/logout');
var registration = require('./controllers/registration');
var home = require('./controllers/home');
var admin = require('./controllers/admin');
var user = require('./controllers/user');

// CONFIGURATION
app.set('view engine', 'ejs');

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(ejs_layout.express);
app.use(express.static('public'));
app.use(expressSession({secret: 'my top secret password', saveUninitialized: true, resave: false}));
app.use(fileUpload());

//route
app.get('/',function(req,res){
	res.redirect('/home');
});
app.use('/login',login);
app.use('/logout',logout);
app.use('/registration',registration);
app.use('/home',home);
app.use('/admin',admin);
app.use('/user',user);





//server

app.listen(1111,function(){
	console.log('server started..');
});