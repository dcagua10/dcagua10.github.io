/* Seccion de JS */
"use strict.";

/* Funcion de profile */
$("#profile").click(function()
{
  var x = $("#profile");
  if (x.attr("src")==='img/Profile.jpg'){
  x.attr("src","img/Profile.jpg");
  }
  else{
  x.attr("src","img/ube.png");
  }
});
