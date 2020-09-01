const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
})

function checkInputs() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
    
    //check usename:
	if(usernameValue === "") {
		setErrorFor(username, "Username cannot be blank");
	} else {
		setSuccessFor(username);
	}

	//check email:
	if(emailValue === "") {
		setErrorFor(email, "Email cannot be blank");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "Not a valid email");
	} else {
		setSuccessFor(email);
	}

	//check password:
	if(passwordValue === "") {
		setErrorFor(password, "Password cannot be blank");
	} else if (passwordValue.length < 6) {
		setErrorFor(password, "Password must have at least 6 characters");
	} 
	else {
		setSuccessFor(password);
	}

	//check password2:
	if (password2Value !== passwordValue) {
		setErrorFor(password2, "password does not match");
	} else if (password2Value === "") {
		setErrorFor(password2, "Password cannot be blank");
	} else {
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentNode;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentNode;
	formControl.className = "form-control success";
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
