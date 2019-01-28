/*
	get the answer to the first question
*/

// get the user submit button
const q1Btn = document.getElementById('qOneBtn');

// when the user clicks, read their answer
q1Btn.onclick = function() {
	const answer = document.getElementById('bp').value;
	// yes open question 2
	// no open question 3
	if (answer == "Yes") {
		document.getElementById('qTwo').style.display = "block";
	} else {
		document.getElementById('qThree').style.display = "block";
	}
	document.getElementById('qOne').style.display = "none";
};

/*
	question 2
*/
// get the user response when they click submit
const q2Btn = document.getElementById('qTwoBtn');
q2Btn.onclick = function() {
	const answer = document.getElementById('actor').value;
	// if it's correct give them a correct message
	// if it's wrong give them wrong message
	const message = document.createElement('p');
	document.body.appendChild(message);
	if (answer == "Chadwick Boseman") {
		message.textContent = "Correct!";
	} else {
		message.textContent = "Wrong!";	
	}
};

/*
	question 3
*/
// get user response
const q3Btn = document.getElementById('qThreeBtn');
q3Btn.onclick = function() {
	const answer = document.getElementById('whyNot').value;
	const message = document.createElement('p');
	document.body.appendChild(message);
	if (answer) {
		message.textContent = "Go see the movie now!";
	} else {
		message.textContent = "Why didn't you write anything?";	
	}
}






















