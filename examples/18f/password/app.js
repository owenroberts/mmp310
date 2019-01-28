const genBtn = document.getElementById('generate');
const displayPassword = document.getElementById('password-display');

// user clicks button 
genBtn.onclick = generatePassword;

// generate a password
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function generatePassword() {
	// create password
	let password = "";
	
	for (let i = 0; i < 10; i++) {
		const n = Math.floor(Math.random() * alphabet.length);
		// randomize uppercase vs lowercase
		password += alphabet[n];
	}

	// display password
	displayPassword.textContent = password;
}






