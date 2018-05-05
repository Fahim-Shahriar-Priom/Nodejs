var express=require('express');
var router = express.Router();
var userModel = require.main.require('./model/user-model');


router.get('/',function(req,res){
    res.layout('layouts/visitor/header', {title:"Registration"}, {content:{block:"visitor/registration", data:{name:"Matthew"}}});
});

router.post('/', function(request, response){

    var user = {
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
        gender: request.body.gender
    };

    userModel.insert(user, function(flag){
        if(flag)
        {
            response.redirect('/login');
        }
        else
        {
            response.redirect('/registration');
        }
    });
});

module.exports=router;