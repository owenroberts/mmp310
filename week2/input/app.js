var submit = document.getElementById("submit");
submit.onclick = function() {
	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var borough = document.getElementById("borough");
	var message = document.getElementById("message");

	console.log(email.value, typeof email.value)
	if (typeof email.value.length > 0)
		message.innerText = "Hello " + name.value + " from " + borough.value + ", welcome to my website!";	
	else
		message.innerText = "Nope."
};