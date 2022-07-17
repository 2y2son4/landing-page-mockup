/* eslint-disable no-console */
'use strict';

const hamburgerMenu = document.querySelector('.js-hamburger-menu');
const navToggle = document.querySelector('.js-hamburger-icon');
const bars = document.querySelectorAll('.js-hamburger-bar');

function toggleHamburger() {
  bars.forEach((bar) => bar.classList.toggle('x'));
  hamburgerMenu.classList.toggle('hidden');
}

navToggle.addEventListener('click', toggleHamburger);
