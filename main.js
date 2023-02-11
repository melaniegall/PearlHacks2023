var yes = document.getElementById("yes");
var yes_emoji = "🐸"
yes.onclick = function() {
	if(yes.innerHTML.includes(yes_emoji)) {
		yes.innerHTML = "yes"
	} else {
		yes.innerHTML = yes.innerHTML + yes_emoji
	}
}
