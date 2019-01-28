const submitButton = document.getElementById('submit');
const storyP = document.getElementById('story');

const nounInput = document.getElementById('noun');
const verbInput = document.getElementById('verb');

const nounError = document.getElementById('noun-error');
const verbError = document.getElementById('verb-error');

submitButton.onclick = function() {
	
	// check to make sure user input a noun
	if (!nounInput.value) {
		nounError.textContent = "Please enter a noun.";
	} else if (!verbInput.value) {
		verbError.textContent = "Please enter a verb.";
	} else {
		const story = "Once there was a " + nounInput.value + " named Jerry.";
		storyP.textContent = story;	
	}
	
	
};