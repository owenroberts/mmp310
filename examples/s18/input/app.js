const submitButton = document.getElementById("submit");
const nameInput = document.getElementById("name");
const bioInput = document.getElementById("bio");
const boroughSelect = document.getElementById("borough");

submitButton.onclick = function(event) {
	const message = document.createElement("p");
	message.textContent = "Hello, "
							+ nameInput.value
							+ " from " 
							+ boroughSelect.value
							+ " welcome to my website.";
	document.body.appendChild(message);
};
