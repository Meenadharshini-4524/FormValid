'use strict';
let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');
let submitCrt = document.getElementById('submit-crt');

function validateName() {
  let name = document.getElementById('contact-name').value;

  if (name.length == 0) {
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-za-z]*$/)) {
    nameError.innerHTML = 'Write full name';
    return false;
  }
  nameError.innerHTML = '<i class="fa fa-check-circle-o"></i>';
  return true;
}

function validatePhone() {
  let phone = document.getElementById('contact-phone').value;

  if (phone.length == 0) {
    phoneError.innerHTML = 'Phone number is required';
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = 'should be 10 digits';
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = 'only digits please';
    return false;
  }
  phoneError.innerHTML = '<i class="fa fa-check-circle-o"></i>';
  return true;
}

function validateEmail() {
  let email = document.getElementById('contact-email').value;

  if (email.length == 0) {
    emailError.innerHTML = 'Email is requird';
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = 'Email Invalid';
    return false;
  }
  emailError.innerHTML = '<i class="fa fa-check-circle-o"></i>';
  return true;
}

function validateMessage() {
  let message = document.getElementById('contact-message').value;
  let requird = 30;
  let left = requird - message.length;

  if (message == 0) {
    messageError.innerHTML = 'Message is requird';
    return false;
  }
  if (left > 0) {
    messageError.innerHTML = `${left} more characters are required`;
    return false;
  }
  messageError.innerHTML = '<i class="fa fa-check-circle-o"></i>';
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fill the form';
    setTimeout(function () {
      submitError.style.display = 'none';
    }, 3000);
    return false;
  }
  submitCrt.innerHTML = 'form was successfully filled, thanks for filling';
}
