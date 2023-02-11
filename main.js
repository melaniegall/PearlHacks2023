var frog = document.getElementById("frog")
var frog_emoji = "🐸"
frog.onclick = function(){
	if(!frog.innerhtml.includes(frog_emoji)){
		frog.innerhtml = frog.innerhtml + frog_emoji
	} else {
		frog.innerhtml = 'frog'
	}
}
