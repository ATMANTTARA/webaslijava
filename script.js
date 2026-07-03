// Toggle mobile navigation menu
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.navbar__nav');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('is-open');
  });

  // Close menu when a link is clicked
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('is-open'));
  });
}
