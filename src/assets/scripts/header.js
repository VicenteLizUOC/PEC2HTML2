const toggleButton = document.querySelector('.header__toggle');
const menu = document.querySelector('.header__menu');

if (toggleButton && menu) {
  toggleButton.addEventListener('click', () => {
    menu.classList.toggle('open');
    toggleButton.classList.toggle('active');
  });
}
