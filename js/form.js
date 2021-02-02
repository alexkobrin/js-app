const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

 
form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInput()

})

function checkInput() {
    // we need get values from all inputs

    const uservalue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if (uservalue === '') {
        setErrorFor(username, "Username can't be blank ")

    } else {
        setSuccessFor(username)

    }

    if (emailValue == '') {
        setErrorFor(email, "Email can't be blank ")
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Email is not valid email")
    } else {
        setSuccessFor(email)
    }

    if (passwordValue == '') {
        setErrorFor(password, "Password can't be blank ")
    } else if (passwordValue.length <= 6) {
        setErrorFor(password, "Password  length has to be least 10 characters.  ")
    }
    else {
        setSuccessFor(password)
    }
    if (password2Value == '') {
        setErrorFor(password2, "Password can't be blank ")
    } else if (password2Value.length <= 6) {
        setErrorFor(password2, "Password  length has to be least 10 characters.  ")
    }
    else if (password2Value !== passwordValue) {
        setErrorFor(password2, "Passwords does not match  ")
    }
    else {
        setSuccessFor(password2)
    }
}

function setErrorFor(input, message) {

    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    small.innerText = message
    formControl.className = 'form-control error';

}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

