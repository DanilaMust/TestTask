import {smoothScroll} from './modules/smoothScroll.js';
import {headerLink} from './modules/headerLink.js';
import {headerBurger} from './modules/headerBurger.js';
import {popup} from './modules/popup.js';
import {slider} from './modules/slider.js';

document.addEventListener("DOMContentLoaded", () => {
  smoothScroll();
  headerLink();
  headerBurger();
  popup();
  slider();
});

