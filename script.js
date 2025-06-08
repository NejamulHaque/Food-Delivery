// Add active class toggle for category buttons
const buttons = document.querySelectorAll('.categories button');
const cards = document.querySelectorAll('.cards .card');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Toggle active class
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    cards.forEach(card => {
      const category = card.getAttribute('data-category');

      if (filter === 'all' || filter === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});


// Existing code...

// Track order form logic
document.getElementById('trackOrderForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('orderStatus').innerText = 'Your order is on the way!';
});

// Login form
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Logged in successfully! (Demo)');
});

// Signup form
document.getElementById('signupForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Account created successfully! (Demo)');
});
const buttons = document.querySelectorAll('.categories button');
const cards = document.querySelectorAll('.card');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Toggle active class
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    cards.forEach(card => {
      const category = card.getAttribute('data-category');

      if (filter === 'all' || filter === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {

  // TRACK ORDER FORM
  const trackForm = document.getElementById('trackOrderForm');
  if (trackForm) {
    trackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const orderInput = trackForm.querySelector('input[type="text"]');
      const orderStatusDiv = document.getElementById('orderStatus');
      
      // Simple validation
      if (orderInput.value.trim() === '') {
        orderStatusDiv.textContent = 'Please enter your Order ID.';
        orderStatusDiv.style.color = 'red';
        return;
      }
      
      // Simulate success
      orderStatusDiv.textContent = `Success: Order "${orderInput.value.trim()}" found!`;
      orderStatusDiv.style.color = 'green';

      // Optionally clear the input
      // orderInput.value = '';
    });
  }

  // LOGIN FORM
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Normally you'd validate user/pass or call API
      alert('Login successful!');
      loginForm.reset();
    });
  }

  // SIGNUP FORM
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Normally you'd validate data and call backend API
      alert('Signup successful!');
      signupForm.reset();
    });
  }

});
