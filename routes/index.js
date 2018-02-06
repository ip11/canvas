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



    res.redirect("/showallusers")

})


router.post("/forajax", function(req,res,next){



  var person = new User({firstName: req.body.firstname, lastNameName:req.body.lastname});
  person.save(function(){


    User.find({}, function(err, users) {

      console.log(err, users)
      res.json({
        users:users
      })
    });
  });




})



router.get("/showallusers", function(req,res, next){




    User.find({}, function(err, users) {

        console.log(err, users)
        res.render("list", {users : users}) 
    });

})



router.post("/delete", function(req,res,next){

  User.remove({ _id: req.body._id }, function(err) {
    if (err) {
      console.log(err)
    }

    res.redirect("/showallusers");




  });




})



router.get('/update/:id', function(req, res, next) {


  console.log(req.params.id)



  User.find({_id:req.params.id}, function(err, users){


    console.log(users)
    res.render('update', { users: users });



  })
  //
  // User.findOneAndUpdate({_id: req.}, {$set:{name:"Naomi"}}, {new: true}, function(err, doc){
  //   if(err){
  //     console.log("Something wrong when updating data!");
  //   }
  //
  //   console.log(doc);
  // });



});



router.post('/update/:id', function(req, res, next) {


  console.log(req.params.id)



  User.findOneAndUpdate({_id:req.params.id},{$set: {firstName: req.body.firstName, lastNameName: req.body.lastNameName}}, function(err, users){

    console.log(users)
    res.redirect("/showallusers");



  })
  //
  // User.findOneAndUpdate({_id: req.}, {$set:{name:"Naomi"}}, {new: true}, function(err, doc){
  //   if(err){
  //     console.log("Something wrong when updating data!");
  //   }
  //
  //   console.log(doc);
  // });



});



module.exports = router;
