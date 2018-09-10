/*
	html element references
*/
const submitButton = document.getElementById("submit");
const exclamationInput = document.getElementById("exclamation");
const adverbInput = document.getElementById("adverb");
const nounInput = document.getElementById("noun");
const adjectiveInput = document.getElementById("adjective");

/*
	listen for button press
*/
submitButton.onclick = function() {
	/*
		get all of the words, generate our story
	*/
	const message = document.createElement("p");
	document.body.appendChild(message);
	
	/*
		use a conditional to test if value was inputed
	*/
	if (exclamationInput.value) {
		message.textContent = exclamationInput.value
							+ " he said "
							+ adverbInput.value
							+ " as he jumped into his convertible "
							+ nounInput.value
							+ " and drove off with his "
							+ adjectiveInput.value
							+ " wife."
	} else {
		message.textContent = "You forgot to add an exclamation!";	
	}
	
};
	
	
	
	
	
	
	
	