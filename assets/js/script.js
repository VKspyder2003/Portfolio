'use strict';

const header = document.querySelector('[data-header]');
const navToggleBtn = document.querySelector('[data-nav-toggle-btn]');
const submitButton = document.getElementById('submit-btn');
let scrollProgress = document.getElementById("progress");
let progressValue = document.getElementById("progress-value");

const calcScrollValue = () => {
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos >= 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(var(--bluetiful) ${scrollValue}%, white ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

navToggleBtn.addEventListener('click', function () {
  header.classList.toggle('nav-active')
  this.classList.toggle('active')
});

const navbarLinks = document.querySelectorAll('[data-nav-link]');

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener('click', function () {
    header.classList.toggle('nav-active')
    navToggleBtn.classList.toggle('active')
  });
}

window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }
});

submitButton.addEventListener('click', e => {
  return confirm('Press OK to send the mail')
});
