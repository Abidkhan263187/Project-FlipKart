// Get references to the HTML elements we need to interact with
const emailOrPhoneInput = document.getElementById('emailOrPhone');
const passwordInput = document.getElementById('password');
const signUpButton = document.getElementById('submitBtn');


// Check if the user's email or phone number is already in local storage
function userExists(emailOrPhone) {
const users = JSON.parse(localStorage.getItem('users')) || [];
return users.some(user => user.email === emailOrPhone || user.phone === emailOrPhone);
}

function handleSignUp(event) {
event.preventDefault();
const emailOrPhone = emailOrPhoneInput.value;
const password = passwordInput.value;

// Check if both fields are filled
if (!emailOrPhone || !password) {
alert('Please fill in both fields');
return;
}

// Check if the user already exists in local storage
if (userExists(emailOrPhone)) {
alert('An account with that email or phone number already exists. Please sign in.');
// Redirect the user to the sign in page
window.location.href = 'signin.html';
} else {
// Add the new user to local storage
const user = { email: emailOrPhone, phone: emailOrPhone, password };
const users = JSON.parse(localStorage.getItem('users')) || [];
users.push(user);
localStorage.setItem('users', JSON.stringify(users));
alert('Account created successfully!');
// Redirect the user to the dashboard or home page
window.location.href = 'signin.html';
}
}

// Attach event listener to the sign up button
signUpButton.addEventListener('click', handleSignUp);