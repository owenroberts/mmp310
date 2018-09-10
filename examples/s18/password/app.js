// characters for password
const alpha = "abcdefghijklmnopqrstuvwxyz";
// rules 
	// password length
// user clicks on button
const btn = document.getElementById('generate');
btn.onclick = generatePassword;
const message = document.getElementById('password');
const passwordLengthInput = document.getElementById('length');
// generate password
function generatePassword() {
	let password = "";
	let length = passwordLengthInput.value;
	for (let i = 0; i < length; i++) {
		password += alpha[Math.floor(Math.random() * alpha.length)];
	}
	
	// display password
	message.textContent = password;
}