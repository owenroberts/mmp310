const submitButton = document.getElementById('submit');
const storyP = document.getElementById('story');

const nounInput = document.getElementById('noun');

submitButton.onclick = function() {
	const noun = nounInput.value;
	const story = "Once there was a " + noun + " named Jerry.";
	storyP.textContent = story;
};