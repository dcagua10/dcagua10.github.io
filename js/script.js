/* Codigo Js */
var pf = document.getElementById("profileP")
pf.click(function()
{
	if(pf.attr("src")==="img/Profile.jpg")
	{
		pf.attr("src","img/Profile.jpg")
	}
	else
	{
		pf.attr("src","img/ube.png")
	}
});