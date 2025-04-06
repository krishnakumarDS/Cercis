"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const e = document.getElementById("hero-content"),
    t = document.getElementById("hero-banner");
  (e.style.animation = "fadeInLeft 2s ease-out forwards"),
    setTimeout(() => {
      t.style.animation = "fadeInRight 2s ease-out forwards";
    }, 500);
});
const imageElement = document.getElementById("blogImage");
let currentIndex = 1;
setInterval(() => {
  imageElement.classList.add("fade-out"),
    setTimeout(() => {
      currentIndex++,
        currentIndex > 3 && (currentIndex = 1),
        (imageElement.src = `./assets/images/blog-${currentIndex}.jpg`),
        imageElement.classList.remove("fade-out");
    }, 500);
}, 3e3),
  document.addEventListener("DOMContentLoaded", function () {
    const e = document.getElementById("about-section"),
      t = document.getElementById("about-banner"),
      n = document.getElementById("about-content");
    let o = !1;
    window.addEventListener("scroll", function a() {
      e.getBoundingClientRect().top < 0.75 * window.innerHeight &&
        !o &&
        ((o = !0),
        (t.style.animation = "slideInLeft 1.5s ease-out forwards"),
        setTimeout(() => {
          n.style.animation = "slideInRight 1.5s ease-out forwards";
        }, 500),
        window.removeEventListener("scroll", a));
    });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    const e = document.getElementById("product-section"),
      t = document.querySelectorAll(".scrollbar-item");
    let n = !1;
    window.addEventListener("scroll", function o() {
      e.getBoundingClientRect().top < 0.75 * window.innerHeight &&
        !n &&
        ((n = !0),
        t.forEach((e, t) => {
          setTimeout(() => {
            e.style.animation =
              t % 2 == 0
                ? "slideInRight 1s ease-out forwards"
                : "slideInLeft 1s ease-out forwards";
          }, 500 * t);
        }),
        window.removeEventListener("scroll", o));
    });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    const e = document.getElementById("cta-content"),
      t = document.getElementById("cta-banner");
    window.addEventListener("scroll", function () {
      document.querySelector(".section.cta").getBoundingClientRect().top <
        window.innerHeight / 1.3 &&
        ((e.style.animation = "fadeInUp 1s ease-out forwards"),
        setTimeout(() => {
          t.style.animation = "fadeInUp 1s ease-out forwards";
        }, 300));
    });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    const e = [
        document.getElementById("footer-content"),
        document.getElementById("footer-links"),
        document.getElementById("footer-products"),
        document.getElementById("footer-contact"),
        document.getElementById("footer-bottom"),
      ],
      t = document.getElementById("footer-section");
    window.addEventListener("scroll", function n() {
      t.getBoundingClientRect().top < window.innerHeight / 1.2 &&
        (e.forEach((e, t) => {
          setTimeout(() => {
            e.style.animation = "fadeInUp 1s ease-out forwards";
          }, 200 * t);
        }),
        window.removeEventListener("scroll", n));
    });
  });
const addEventOnElem = function (e, t, n) {
    if (e.length > 1)
      for (let o = 0; o < e.length; o++) e[o].addEventListener(t, n);
    else e.addEventListener(t, n);
  },
  navbar = document.querySelector("[data-navbar]"),
  navbarLinks = document.querySelectorAll("[data-nav-link]"),
  navbarToggler = document.querySelector("[data-nav-toggler]"),
  toggleNav = function () {
    navbar.classList.toggle("active"), navbarToggler.classList.toggle("active");
  };
addEventOnElem(navbarToggler, "click", toggleNav);
const closeNav = function () {
  navbar.classList.remove("active"), navbarToggler.classList.remove("active");
};
addEventOnElem(navbarLinks, "click", closeNav);
const header = document.querySelector("[data-header]"),
  backTopBtn = document.querySelector("[data-back-top-btn]");
window.addEventListener("scroll", function () {
  window.scrollY >= 100
    ? (header.classList.add("active"), backTopBtn.classList.add("active"))
    : (header.classList.remove("active"),
      backTopBtn.classList.remove("active"));
});
