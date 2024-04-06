const form = document.getElementById('loginForm');
form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === 'password123') {
    // Login successful
    console.log('Login successful!');
  } else {
    // Login failed
    console.log('Login failed!');
    // Display an error message
    alert('Invalid username or password.');
  }
});
