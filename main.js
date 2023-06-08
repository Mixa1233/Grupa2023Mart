// Access the form and prevent default form submission
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

// Validate the form inputs
function validateForm() {
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const phoneNumber = document.getElementById('phoneNumber');

  const firstNameError = document.getElementById('firstNameError');
  const lastNameError = document.getElementById('lastNameError');
  const emailError = document.getElementById('emailError');
  const phoneNumberError = document.getElementById('phoneNumberError');

  // Reset error messages
  firstNameError.textContent = '';
  lastNameError.textContent = '';
  emailError.textContent = '';
  phoneNumberError.textContent = '';

  
// Validate each field
if (firstName.value === '') {
    firstNameError.textContent = 'Please enter your first name.';
  } else if (!hasCapitalLetter(firstName.value)) {
    firstNameError.textContent = 'First name must contain at least one capital letter.';
  }
  
  if (lastName.value === '') {
    lastNameError.textContent = 'Please enter your last name.';
  } else if (!hasCapitalLetter(lastName.value)) {
    lastNameError.textContent = 'Last name must contain at least one capital letter.';
  }
  
  // ...
  
  // Check if a string contains at least one capital letter
  function hasCapitalLetter(str) {
    return /[A-Z]/.test(str);
  }
  
  if (email.value === '') {
    emailError.textContent = 'Please enter your email.';
  } else if (!validateEmail(email.value)) {
    emailError.textContent = 'Please enter a valid email address.';
  }

  if (phoneNumber.value === '') {
    phoneNumberError.textContent = 'Please enter your phone number.';
  } else if (!validatePhoneNumber(phoneNumber.value)) {
    phoneNumberError.textContent = 'Please enter a valid phone number.';
  }
}

// Validate email format using a regular expression
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Validate phone number format using a regular expression
function validatePhoneNumber(phoneNumber) {
  const re = /^\d{10}$/;
  return re.test(phoneNumber);
}
