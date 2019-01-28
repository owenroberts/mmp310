window.addEventListener("load", function(){
	var message = document.createElement("div");
	message.className = "message";
	message.classList.add("test");
	message.innerText = "Hello";
	message.style.color = "red";
	document.body.appendChild(message);
	
	var messages = document.getElementsByClassName("message");
	console.log(messages);
	//document.body.removeChild(messages[0]);
	// messages[0].remove();
	
	var img = new Image();
	img.src = "https://i.pinimg.com/736x/08/ea/86/08ea8648f88ec4eda4bf13260751d2e6--kid-stuff-cat-memes.jpg";
	var elem = document.createElement("div");
	elem.appendChild(img);
	document.body.appendChild(elem);
});







						
						
						
