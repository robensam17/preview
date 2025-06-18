$(document).ready(function() {
  $("#10").click(function() {
    $('.frame-5').addClass('transform-active');
    $('.container').removeClass('transform-active');
    $('.tex').removeClass('transform-active');
    $('.newStyle').addClass('disp');
      $('.newStyle').removeClass('ndisp');
});
});

$(document).ready(function() {
  $("#11").click(function() {
    $('.frame-5').addClass('transform-active');
    $('.container').removeClass('transform-active');
    $('.tex').removeClass('transform-active');
    $('.newStyle').addClass('disp');
      $('.newStyle').removeClass('ndisp');
});
});

$(document).ready(function() {
  $("#12").click(function() {
    $('.tex').addClass('transform-active');
    $('.container').removeClass('transform-active');
    $('.frame-5').removeClass('transform-active');
    $('.newStyle').addClass('disp');
    $('.newStyle').removeClass('ndisp');
});
});


$(document).ready(function() {
  $("#13").click(function() {
    $('.container').addClass('transform-active');
      $('.tex').removeClass('transform-active');
        $('.frame-5').removeClass('transform-active');
        $('.container').addClass('disp');
        $('.newStyle').addClass('ndisp');
});
});

$(document).ready(function() {
  $("#14").click(function() {
    $('.tex').addClass('transform-active');
    $('.container').removeClass('transform-active');
      $('.frame-5').removeClass('transform-active');
      $('.newStyle').addClass('disp');
        $('.newStyle').removeClass('ndisp');
});
});


$(document).ready(function() {
  $("#15").click(function() {
    $('.container').addClass('transform-active');
      $('.tex').removeClass('transform-active');
        $('.frame-5').removeClass('transform-active');
        $('.container').addClass('disp');
        $('.newStyle').addClass('disp');
        $('.newStyle').removeClass('ndisp');
});
});


var attempt = 3;
  function validate(){
          var username = document.getElementById("username").value;
          var password = document.getElementById("password").value;
        if ( username == "Admin" && password == "Admin"){
          window.location = "target.html";
        }
        else{
        attempt --;

        if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
        return false;
        }
    }
};
