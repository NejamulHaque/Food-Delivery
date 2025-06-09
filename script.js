// === Category Filter Buttons ===
const buttons = document.querySelectorAll('.categories button');
const cards = document.querySelectorAll('.cards .card');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    cards.forEach(card => {
      const category = card.getAttribute('data-category');
      card.style.display = (filter === 'all' || filter === category) ? 'block' : 'none';
    });
  });
});

// === DOM Ready Logic ===
document.addEventListener('DOMContentLoaded', () => {

  // === LOGIN FORM ===
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = loginForm.email.value;
      const password = loginForm.password.value;

      try {
       const res = await fetch('http://localhost:5001/api/auth/login', {
   method: 'POST',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify({ email, password })
   });

   const msg = await res.text();
    alert(msg);

if (res.ok) {
  window.location.href = 'dashboard.html';
}


      } catch (err) {
        alert('Login failed. Check console.');
        console.error(err);
      }
    });
  }

  // === SIGNUP FORM ===
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const inputs = signupForm.querySelectorAll('input');
      const name = inputs[0].value;
      const email = inputs[1].value;
      const password = inputs[2].value;

      try {
        const res = await fetch('http://localhost:5001/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, email, password })
        });

        const msg = await res.text();
        alert(msg);
        if (res.status === 201) signupForm.reset();
      } catch (err) {
        alert('Signup failed. Check console.');
        console.error(err);
      }
    });
  }

  // === ORDER TRACKING ===
  const trackForm = document.getElementById('trackOrderForm');
  if (trackForm) {
    trackForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const orderInput = trackForm.querySelector('input[type=\"text\"]');
      const orderStatusDiv = document.getElementById('orderStatus');

      if (orderInput.value.trim() === '') {
        orderStatusDiv.textContent = 'Please enter your Order ID.';
        orderStatusDiv.style.color = 'red';
        return;
      }

      try {
        const res = await fetch('http://localhost:5001/api/order/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ orderId: orderInput.value.trim() })
        });

        if (!res.ok) {
          orderStatusDiv.textContent = 'Order not found.';
          orderStatusDiv.style.color = 'red';
        } else {
          const data = await res.json();
          orderStatusDiv.textContent = `Order Status: ${data.status}`;
          orderStatusDiv.style.color = 'green';
        }
      } catch (err) {
        orderStatusDiv.textContent = 'Error contacting server.';
        orderStatusDiv.style.color = 'red';
        console.error(err);
      }
    });
  }
});
