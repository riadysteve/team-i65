const burger = document.querySelector("header nav .burger");
const header = document.querySelector("header");
const navLinks = document.querySelector("header ul.nav-links");

burger.addEventListener("click", () => {
  if (header.classList.contains('active')) {
    header.style.animation = "back 1s forwards";
    header.classList.remove('active');
  } else {
    header.style.animation = "stretch 1s forwards";
    header.classList.add('active');
  }
});

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    header.classList.add('scroll');
  } else if (document.body.scrollTop == 0) {
    header.classList.remove('scroll');
  }
});

const whyus = document.querySelector('.why-us');
const listcompany = whyus.previousElementSibling.offsetTop;
const whyusarea = whyus.offsetTop;

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= listcompany) {
    whyus.style.animation = "fadeIn 2s forwards";
  }
});