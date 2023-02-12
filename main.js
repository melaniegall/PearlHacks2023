function playAudio(url) {
   new Audio(url).play();
 }
//Song: George Michael, "Careless Whisper"

var userbday = document.getElementById("userbday");
var partnerbday = document.getElementById("partnerbday");
var submitbutton = document.getElementById("submitbutton");

submitbutton.onclick = function() {
	if(userbday.value == partnerbday.value) {
		document.getElementById("p1").innerHTML = "You're made for each other!";
	} else {
		document.getElementById("p1").innerHTML = "You have nothing in common. End it now. 🐸";
	}}

// rat image source: https://lafeber.com/mammals/a-valentine-to-my-rats-the-greatest-species/
