import 'bootstrap';
import nav from './Views/nav.js';
import footer from './Views/footer.js';
import hero from './Views/hero.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime.js';

const controlObserverNav = function () {
  const header = document.querySelector('header');
  const hero = document.querySelector('#hero');
  const option = {
    root: null,
    threshold: 0,
    rootMargin: '-90px',
  };
  const callback = entries => {
    const [entry] = entries;

    !entry.isIntersecting
      ? header.firstElementChild.classList.add('navFix')
      : header.firstElementChild.classList.remove('navFix');
    // entry.isIntersecting ? console.log(entry) : console.log(entry);
  };

  const observer = new IntersectionObserver(callback, option);
  observer.observe(hero);
};

const init = function () {
  nav._renderDefault('afterbegin');
  footer._renderDefault('beforeend');
  hero._renderDefault('afterbegin');
  controlObserverNav();
};
init();
