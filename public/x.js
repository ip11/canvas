

//option A
$("#form").submit(function(e){
  e.preventDefault()
  $.ajax({
    method: "POST",
    url: "/",
    data: {firstname: "John", lastname: "Boston"}
  })
    .done(function (msg) {
      
      alert("Data Saved: " + msg);
    });
});


