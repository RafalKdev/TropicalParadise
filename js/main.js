const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__items");
const navBtnBars = document.querySelector(".burger-btn__bars");
const allSections = document.querySelectorAll(".section");
const footerYear = document.querySelector(".footer__year");

const handleNav = () => {
  nav.classList.toggle("nav-active");
  navBtnBars.classList.remove("black__bars-color");

  allNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.remove("nav-active");
    });
  });
  handleNavItemsAnimation();
};
const handleNavItemsAnimation = () => {
  let delayTime = 0;
  allNavItems.forEach((item) => {
    item.classList.toggle("-nav__items-animation");

    item.style.animationDelay = "." + delayTime + "s";
    delayTime++;
  });
};
const handleCurentYear = () => {
  const currentYear = new Date().getFullYear();
  footerYear.textContent = currentYear;
};
const handleObserver = () => {
  const currentSection = window.scrollY;

  allSections.forEach((section) => {
    if (
      section.classList.contains("white__section") &&
      section.offsetTop <= currentSection + 60
    ) {
      navBtnBars.classList.add("black__bars-color");
    } else if (
      !section.classList.contains("white__section") &&
      section.offsetTop <= currentSection + 60
    ) {
      navBtnBars.classList.remove("black__bars-color");
    }
  });
};
handleCurentYear();
navBtn.addEventListener("click", handleNav);
window.addEventListener("scroll", handleObserver);
