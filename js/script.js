//Funcion de imagen profile
//:l
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