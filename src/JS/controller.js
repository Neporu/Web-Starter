import "bootstrap";
import nav from "./Views/nav.js";
import footer from "./Views/footer.js";
import hero from "./Views/hero.js";

const controlObserverNav = function () {
  const header = document.querySelector("header");
  const option = {
    root: null,
    threshold: 0,
  };
  const callback = (entries) => {
    const [entry] = entries;

    !entry.isIntersecting
      ? header.classList.add("top")
      : header.classList.remove("top");
  };

  const observer = nav._observer(callback, option);
  observer.observe(header);
};

const init = function () {
  nav._renderDefault("afterbegin");
  footer._renderDefault("beforeend");
  hero._renderDefault("afterbegin");
  controlObserverNav();
};
init();
