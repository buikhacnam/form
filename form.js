const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const thanks = document.getElementById('thanks');
const but = document.getElementById('but');
const close_btn = document.querySelector('.close-btn');
const message_panel_container = document.querySelector('.message-panel-container');


form.addEventListener('submit', e => {
	e.preventDefault();
	if (checkInputs()) {
		thanks.innerText = username.value.trim().toUpperCase();
		message_panel_container.classList.toggle('visible');	
		const turnOff = [but, username, email, password, password2];
		turnOff.forEach(element => {
			return element.disabled = true;
		})
	} 
})

function checkInputs() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
    
    //check usename:
	if(usernameValue === "") {
		setErrorFor(username, "Username cannot be blank");
		return false;
	} else if (usernameValue.length > 10) {
		setErrorFor(username, "name needs to be shorter than 10 characters");
		return false;
	}
	 else {
		setSuccessFor(username);
	}

	//check email:
	if(emailValue === "") {
		setErrorFor(email, "Email cannot be blank");
		return false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "Not a valid email");
		return false;
	} else {
		setSuccessFor(email);
	}

	//check password:
	if(passwordValue === "") {
		setErrorFor(password, "Password cannot be blank");
		return false;
	} else if (passwordValue.length < 4) {
		setErrorFor(password, "Password must have at least 6 characters");
		return false;
	} 
	else {
		setSuccessFor(password);
	}

	//check password2:
	if (password2Value !== passwordValue) {
		setErrorFor(password2, "password does not match");
		return false;
	} else if (password2Value === "") {
		setErrorFor(password2, "Password cannot be blank");
		return false;
	} else {
		setSuccessFor(password2);
	}

	//if all is good:
	return true;
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



// slide in message

close_btn.addEventListener('click', () => {
	message_panel_container.classList.remove('visible');
	document.getElementById("but").disabled = false;
	const turnOn = [username, email, password, password2];
	turnOn.forEach(element => {
				element.disabled = false;
			    element.value = "";
			    element.parentNode.className = "form-control";
	})

});
