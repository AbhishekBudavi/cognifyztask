// script.js

// Random background color button
document.getElementById('colorButton').addEventListener('click', function() {
      document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  });
  
  // Form validation
  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      let isValid = true;
      let errorMessage = '';
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
  
      if (name === '') {
          errorMessage += 'Name is required.\n';
          isValid = false;
      }
      if (email === '') {
          errorMessage += 'Email is required.\n';
          isValid = false;
      }
      if (password.length < 6) {
          errorMessage += 'Password must be at least 6 characters long.\n';
          isValid = false;
      }
  
      if (isValid) {
          alert('Form submitted successfully!');
          document.getElementById('contactForm').reset();
      } else {
          document.getElementById('errorMessage').textContent = errorMessage;
      }
  });
  