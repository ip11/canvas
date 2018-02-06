

//option A
$("#form").submit(function(e){
  e.preventDefault()
  $.ajax({
    method: "POST",
    url: "/forajax",
    data: {firstname: $("#firstname").val(), lastname: $("#lastname").val()}
  })
    .done(function (msg) {

      console.log(msg);


      $("#form").hide()
      $('#users').append($('<p></p>').text(JSON.stringify(msg)));

      // $("#users").append($("p"));
    });
});


