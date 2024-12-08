document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (email && message) {
        alert(`Message sent from: ${email}\nMessage: ${message}`);
    } else {
        alert('Please fill out all fields.');
    }
});

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
