var email = document.forms['form']['email'];
var pass = document.forms['form']['pass'];
var emailEr = document.getElementById('emailEr');
var passEr = document.getElementById('passEr');

email.addEventListener('textInput', verif_email);
password.addEventListener('textInput', verif_pass);

function valid(){
	if (email.value.length < 9) {
		email.style.border = "1px solid red";
		emailEr.style.display = "block";
		email.focus();
		return false;
	}
	if (pass.value.length < 6) {
		pass.style.border = "1px solid red";
		passEr.style.display = "block";
		pass.focus();
		return false;
	}
}
function verif_email(){
	if (email.value.length >= 8) {
		email.style.border = "1px solid silver";
		emailEr.style.display = "none";
		return true;
	}
}
function verif_pass(){
	if (pass.value.length >= 5) {
		pass.style.border = "1px solid silver";
		passEr.style.display = "none";
		return true;
	}
}

