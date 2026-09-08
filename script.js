// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Close menu when a link is clicked
document.querySelectorAll('#navMenu a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
