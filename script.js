// Smooth scroll effect for navigation
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});


const sections = document.querySelectorAll(".section");

const revealOnScroll = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight / 1.2;
    if (sectionTop < triggerPoint) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);


const title = document.querySelector(".title");
const text = title.textContent;
title.textContent = "";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    title.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
window.onload = typeEffect;
