function handleChangePassword() {
    // Get the input values
    const emailOrPhone = document.getElementById("emailOrPhone").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    // Validate that the passwords match
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
  
    // Get the user's current password from local storage
    const users = JSON.parse(localStorage.getItem("users"));
    const currentUser = users.find(user => user.emailOrPhone === emailOrPhone);
    if (!currentUser) {
      alert("User not found.");
      return;
    }
    if (currentUser.password !== currentPassword) {
      alert("Current password is incorrect.");
      return;
    }
  
    // Update the user's password in local storage
    currentUser.password = newPassword;
    localStorage.setItem("users", JSON.stringify(users));
  
    // Notify the user that the password has been changed
    alert("Password changed successfully.");
  
    // Clear the input fields
    document.getElementById("emailOrPhone").value = "";
    document.getElementById("currentPassword").value = "";
    document.getElementById("newPassword").value = "";
    document.getElementById("confirmPassword").value = "";
  }
  