var submit = document.getElementById("submit");

submit.onclick = function() {

	var responses = [];

	var responseElements = document.getElementsByClassName("response");

	for (var i = 0; i < responseElements.length; i++)
		responses.push(responseElements[i].value);

	var message = document.getElementById("message");
	
	message.innerHTML = "Hello " + responses[0] + ", from " + responses[2] + ", welcome to my website.";
};