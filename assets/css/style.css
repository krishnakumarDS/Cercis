"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const heroContent = document.getElementById("hero-content");
  const heroBanner = document.getElementById("hero-banner");

  heroContent.style.animation = "fadeInLeft 2s ease-out forwards";
  setTimeout(() => {
    heroBanner.style.animation = "fadeInRight 2s ease-out forwards";
  }, 500);
});

const imageElement = document.getElementById("blogImage");
let currentIndex = 1;

setInterval(() => {
  imageElement.classList.add("fade-out");

  setTimeout(() => {
    currentIndex++;
    if (currentIndex > 3) currentIndex = 1;
    imageElement.src = `./assets/images/blog-${currentIndex}.jpg`;
    imageElement.classList.remove("fade-out");
  }, 500);
}, 3000);

document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.getElementById("about-section");
  const aboutBanner = document.getElementById("about-banner");
  const aboutContent = document.getElementById("about-content");
  let hasAnimated = false; // Prevent re-triggering

  function handleScroll() {
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionPosition < screenHeight * 0.75 && !hasAnimated) {
      hasAnimated = true;

      // First Animation - Banner (Image)
      aboutBanner.style.animation = "slideInLeft 1.5s ease-out forwards";

      // Second Animation - Content (Delayed)
      setTimeout(() => {
        aboutContent.style.animation = "slideInRight 1.5s ease-out forwards";
      }, 500); // 500ms delay

      window.removeEventListener("scroll", handleScroll); // Stop checking after animation
    }
  }

  window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  const productSection = document.getElementById("product-section");
  const products = document.querySelectorAll(".scrollbar-item");
  let hasAnimated = false; // Prevents re-triggering

  function handleScroll() {
    const sectionPosition = productSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionPosition < screenHeight * 0.75 && !hasAnimated) {
      hasAnimated = true;

      // Animate each product sequentially
      products.forEach((product, index) => {
        setTimeout(() => {
          if (index % 2 === 0) {
            product.style.animation = "slideInRight 1s ease-out forwards";
          } else {
            product.style.animation = "slideInLeft 1s ease-out forwards";
          }
        }, index * 500); // Delay for a cascading effect
      });

      window.removeEventListener("scroll", handleScroll); // Stop checking after animation
    }
  }

  window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  const ctaContent = document.getElementById("cta-content");
  const ctaBanner = document.getElementById("cta-banner");

  function animateCTA() {
    const section = document.querySelector(".section.cta");
    const sectionPos = section.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
      ctaContent.style.animation = "fadeInUp 1s ease-out forwards";
      setTimeout(() => {
        ctaBanner.style.animation = "fadeInUp 1s ease-out forwards";
      }, 300); // Image appears slightly after text
    }
  }

  window.addEventListener("scroll", animateCTA);
});

document.addEventListener("DOMContentLoaded", function () {
  const footerElements = [
    document.getElementById("footer-content"),
    document.getElementById("footer-links"),
    document.getElementById("footer-products"),
    document.getElementById("footer-contact"),
    document.getElementById("footer-bottom"),
  ];

  const footerSection = document.getElementById("footer-section");

  function animateFooter() {
    const sectionPos = footerSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if (sectionPos < screenPos) {
      footerElements.forEach((element, index) => {
        setTimeout(() => {
          element.style.animation = "fadeInUp 1s ease-out forwards";
        }, index * 200); // Adds delay for a staggered effect
      });
      window.removeEventListener("scroll", animateFooter); // Prevents re-triggering animation
    }
  }

  window.addEventListener("scroll", animateFooter);
});
/**
 * addEvent on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  navbarToggler.classList.toggle("active");
};

addEventOnElem(navbarToggler, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  navbarToggler.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNav);

/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
