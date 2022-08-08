const form = document.querySelector("#fill-form");
const firstnameInput = document.querySelector("#firstname");
const lastnameInput = document.querySelector("#lastname");
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password');
const confirmInput = document.querySelector('#confirm')
const telInput = document.querySelector('#telephone')
const textInput = document.querySelector('#say')

form.addEventListener("submit", (event) => {

    formValidation()

    if (isFormValid() == true) {
        form.submit();
    } else {
        event.preventDefault();

    }
});

function isFormValid() {
    const inputContainers = form.querySelectorAll('.input-group');
    let results = true
    inputContainers.forEach((element) => {
        if (element.classList.contains('error')) {
            results = false;
        }
    })
    return results;
}

function formValidation() {
    //firstname
    if (firstnameInput.value.trim() == "") {
        setError(firstnameInput, 'Required Field');
    } else if (firstnameInput.value.trim().length < 3 || firstnameInput.value.trim().length > 15) {
        setError(firstnameInput, 'minimum of 3 and maximum of 15 characters');
    } else {
        setSuccess(firstnameInput);
    }
    //lastname
    if (lastnameInput.value.trim() == "") {
        setError(lastnameInput, 'Required Field');
    } else if (firstnameInput.value.trim().length < 3 || firstnameInput.value.trim().length > 15) {
        setError(lastnameInput, 'minimum of 3 and maximum of 15 characters');
    } else {
        setSuccess(lastnameInput);
    }
    //email
    if (emailInput.value.trim() == "") {
        setError(emailInput, 'Required Field');
    } else if (isValidEmail(emailInput)) {
        setError(emailInput);
    } else {
        setSuccess(emailInput)
    }
    //password
    if (passwordInput.value.trim() == "") {
        setError(passwordInput, 'Input password');
    } else if (passwordInput.value.trim().length < 6) {
        setError(passwordInput, 'Password too weak');
    } else {
        setSuccess(passwordInput);
    }
    //confirm-password
    if (confirmInput.value.trim() == "") {
        setError(confirmInput, 'Required Field');
    } else if (passwordInput.value.trim() != confirmInput.value.trim()) {
        setError(confirmInput, 'Password mismatch');
    } else {
        setSuccess(confirmInput);
    }
    //telephone
    if (telInput.value.trim() == "") {
        setError(telInput, 'Add a telephone number');
    } else if (telInput.value.trim().length < 10) {
        setError(telInput, 'Invalid number');
    } else if (telInput.value.trim().length > 10) {
        setError(telInput, 'Invalid number');
    } else {
        setSuccess(telInput);
    }
    //textarea
    if (textInput.value.trim() == "") {
        setError(textInput, 'Give a reason');
    } else if (textInput.value.trim().length < 30 || textInput.value.trim().length > 200) {
        setError(textInput, 'Minimum of 20 and maximum of 100 words');
    } else {
        setSuccess(textInput);
    }
}

function setError(element, message) {
    const parent = element.parentElement;
    if (parent.classList.contains('success')) {
        parent.classList.remove('success')
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = message;
};

function setSuccess(element) {
    const parent = element.parentElement;
    if (parent.classList.contains('error')) {
        parent.classList.remove('error')
    }
    parent.classList.add("success")
}

function isValidEmail(email) {
    const reg = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return reg.test(email);
}