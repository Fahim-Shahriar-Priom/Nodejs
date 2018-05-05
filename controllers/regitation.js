var express=require('express');
var router = express.Router();
var asyncValidator = require('async-validator');

var userRules = require.main.require('./validation-rules/user');
var userModel = require.main.require('./model/user-model');


router.get('/',function(req,res){
    res.layout('layouts/visitor/header', {title:"Registration"}, {content:{block:"visitor/registration", data:{name:"Matthew"}}});
});

router.post('/', function(request, response) {

    var user = {
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
        gender: request.body.gender
    };

    var validator = new asyncValidator(userRules.create);
    validator.validate(user, function (errors, fields)
    {
        if (errors) {
            res.render('visitor/registration', {errs: errors});
        }
        else {
            userModel.insert(user, function (flag)
            {
                if (flag) {
                    response.redirect('/login');
                }
                else {
                    response.redirect('/registration');
                }
            });

        }
    });

});
module.exports=router;