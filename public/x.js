




$("#email,#password,#password2").on("input", function(){

  var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if( re.test($("#email").val()) && ($("#password").val()==$("#password2").val() ) && ($("#password").val().length!=0)){
    $("#submitbutton").attr("disabled",false);
  }else{
    $("#submitbutton").attr("disabled",true);
  }
});









//option A
// $("#form").submit(function(e){
//   e.preventDefault()
//   $.ajax({
//     method: "POST",
//     url: "/forajax",
//     data: {firstname: $("#firstname").val(), lastname: $("#lastname").val()}
//   })
//     .done(function (msg) {
//
//       console.log(msg);
//
//
//       $("#form").hide()
//       $('#users').append($('<p></p>').text(JSON.stringify(msg)));
//
//       // $("#users").append($("p"));
//     });
// });


