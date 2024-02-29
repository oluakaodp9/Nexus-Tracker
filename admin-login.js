const form = document.getElementById('loginForm');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Add your login logic here, including validation and error handling
  // For example:
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === 'password123') {
    // Login successful
    console.log('Login successful!');
    // Replace with your desired action after successful login (e.g., redirect to admin dashboard)
  } else {
    // Login failed
    console.log('Login failed!');
    // Display an error message
    alert('Invalid username or password.');
  }
});
