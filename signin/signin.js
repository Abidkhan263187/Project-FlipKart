// Get references to the HTML elements we need to interact with
const emailOrPhoneInput = document.getElementById('emailOrPhone');
const passwordInput = document.getElementById('password');
const signInButton = document.getElementById('signIn');

// Check if the user's email or phone number is already in local storage
function userExists(emailOrPhone) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  return users.some(user => user.email === emailOrPhone || user.phone === emailOrPhone);
}

function handleSignIn(event) {
  event.preventDefault();
  const emailOrPhone = emailOrPhoneInput.value;
  const password = passwordInput.value;

  // Check if both fields are filled
  if (!emailOrPhone || !password) {
    alert('Please fill in both fields');
    return;
  }

  // Check if the user exists in local storage
  if (userExists(emailOrPhone)) {
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(user => user.email === emailOrPhone || user.phone === emailOrPhone);
    if (user.password === password) {
      alert('Welcome back!');
      // Redirect the user to the dashboard or home page
      window.location.href = 'index.html';
    } else {
      alert('Incorrect password. Please try again.');
    }
  } else {
    alert('No user found with that email or phone number. Please sign up first.');
    window.location.href = 'signup.html';
  }
}

// Attach event listener to the sign in button
signInButton.addEventListener('click', handleSignIn);
