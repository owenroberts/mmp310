const elem = document.createElement('h1');
elem.textContent = "Hello world.";
document.body.appendChild(elem);

const submitButton = document.getElementById('submit');
const nameInput = document.getElementById('name');
const bioInput = document.getElementById('bio');
const boroughInput = document.getElementById('borough');

submitButton.onclick = function(event) {
	const name = nameInput.value;
	const bio = bioInput.value;
	const borough = boroughInput.value;
	const message = document.createElement('p');
	message.textContent = 'Hello, ' + name + ', from ' + borough + ' welcome to my website.'
	document.body.appendChild(message);
};