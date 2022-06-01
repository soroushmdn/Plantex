// @@@@@@@@@@@@@@@ show & remove menu @@@@@@@@@@@@@@@@@

const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});

// @@@@@@@@@@@@  remove menu when click on navlinks @@@@@@@@@@@@

const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach((n) => {
  n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

// @@@@@@@@@@@@  add header boxshadow @@@@@@@@@@@@
const header = document.getElementById('header');
window.addEventListener('scroll', scrollHeader);

function scrollHeader() {
  if (this.scrollY >= 100) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

// @@@@@@@@@@@@ show scroll up @@@@@@@@@@@@
window.addEventListener('scroll', scrollUp);

function scrollUp() {
  const scrollUp = document.getElementById('scrollup');
  if (this.scrollY >= 300) {
    scrollUp.classList.add('show-scrollup');
  } else {
    scrollUp.classList.remove('show-scrollup');
  }
}

//  @@@@@@@@@@@@@@@@@@@ scrollrevealjs.org @@@@@@@@@@@@@@@@@@@@
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home__container`);
sr.reveal(`.about__img, .contact__box`, { origin: 'left' });
sr.reveal(`.about__data, .contact__form`, { origin: 'right' });
sr.reveal(`.steps__card, .products__card, .questions__item, .footer__content`, {
  interval: 150,
});
