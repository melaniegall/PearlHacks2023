//var yes = document.getElementById("yes");
//var yes_emoji = "🐸"
//yes.onclick = function() {
//	if(yes.innerHTML.includes(yes_emoji)) {
//		yes.innerHTML = "yes"
//	} else {
//		yes.innerHTML = yes.innerHTML + yes_emoji
//	}}
//document.appendChild(element)
function playAudio(url) {
   new Audio(url).play();
 }


var userbday = document.getElementById("userbday");
var partnerbday = document.getElementById("partnerbday");
var submitbutton = document.getElementById("submitbutton")
submitbutton.onclick = function() {
	if(userbday.value == partnerbday.value) {
		document.getElementById("p1").innerHTML = "Twin slayyy";
	} else {
		document.getElementById("p1").innerHTML = "Not twins? Ugly.";
	}}
