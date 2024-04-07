const navMenu = document.querySelector('.nav__menu'),
      navToggle = document.querySelector('.nav__toggle'),
      navClose = document.querySelector('.nav__close'),
      navLink = document.querySelectorAll('.nav__item');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

const linkAction = () => {
  const navMenu = document.querySelector('.nav__menu');
  navMenu.classList.remove('show-menu');
}
navLink.forEach(l => l.addEventListener('click', linkAction));

const moreButton = document.querySelectorAll('.more');
const moreAction = function() {
    this.classList.toggle('more--inverse');
    const parentNode = this.parentNode;
    const skills = parentNode.querySelectorAll(".skill");
    for (let i = 1; i < skills.length; i++) {
        skills[i].classList.toggle('hide--phone');
    }
}
moreButton.forEach(m => m.addEventListener('click', moreAction));