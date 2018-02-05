var express = require('express');
var router = express.Router();

/* GET home page. */


var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/teja");
var nameSchema = new mongoose.Schema({
    firstName: String,
    lastNameName: String
});

var User = mongoose.model("User", nameSchema)


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post("/", function(req,res,next){



    var person = new User({firstName: req.body.firstname, lastNameName:req.body.lastname});
    person.save();



    res.render("formsubmitted",{title:"form submitted"})

})
router.get("/showallusers", function(req,res, next){




    User.find({}, function(err, users) {

        console.log(err, users)
        res.render("list", {users : users})
    });

})

module.exports = router;
