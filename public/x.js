$("#email,#password,#password2").on("input", function(){

  var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if( re.test($("#email").val()) && ($("#password").val()==$("#password2").val() ) && ($("#password").val().length!=0)){
    $("#submitbutton").attr("disabled",false);
  }else{
    $("#submitbutton").attr("disabled",true);
  }
});

$("#form").submit(function(e){
  e.preventDefault()
  $.ajax({
    method: "POST",
    url: "/forajax",
    data: {
      firstname: $("#firstname").val(),
      lastname: $("#lastname").val(),
      email: $("#email").val(),
      password: $("#password").val(),
      password2: $("#password").val()
    }
  })
    .done(function (msg) {

      console.log(msg);


      $("#form").hide()
      $('#users').append($('<p></p>').text(JSON.stringify(msg)));

      // $("#users").append($("p"));
    });
});

$("#bodyid").click(function(e){


  console.log("click happened at " +e.pageX + " " + e.pageY);


})


var students  = [{name:"kamal", subject:"math"}, {name:"reddy", subject:"science"}]
$("body").append("<table id='t'></table>")
$("#t").append("<tr id=6><td>" + students[0].name+"</td><td>"+ students[0].subject+"</td></tr>")
$("#t").append("<tr id=6><td>" + students[1].name+"</td><td>"+ students[1].subject+"</td></tr>")

