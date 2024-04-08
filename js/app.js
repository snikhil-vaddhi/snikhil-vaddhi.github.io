const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
const nav = document.querySelector(".nav-center");
const sbar = document.querySelector(".sidebar");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = new Date().getFullYear();
// ********** smooth scroll ************
// select links
document.querySelector(".nav-center").addEventListener("click", function (el) {
  el.preventDefault();
  // console.log('Link');
  if (el.target.classList.contains("scroll-link")) {
    const id = el.target.getAttribute("href");
    if (id === "#") return;
    if (id.startsWith("#")) {
      const targetElement = document.querySelector(id);
      const buffer = 62;
      const scrollPosition = targetElement.offsetTop - buffer;
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    } else if (id.includes("#")) {
      window.location.href = id;
    } else {
      window.open(id, "_blank");
    }
  }
});
window.addEventListener("resize", function () {
  const sidebar = document.querySelector(".sidebar");
  if (window.innerWidth > 768 && sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
  }
});
document.querySelector(".sidebar").addEventListener("click", function (el) {
  el.preventDefault();
  // console.log('Link');
  if (el.target.classList.contains("scroll-link")) {
    const id = el.target.getAttribute("href");
    console.log(id);
    if (id === "#") return;
    // console.log(document.querySelector(id).scrollIntoView());
    if (id.startsWith("#")) {
      const targetElement = document.querySelector(id);
      const buffer = 100;
      const scrollPosition = targetElement.offsetTop - buffer;
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });

      if (sidebar.classList.contains("show-sidebar")) {
        sidebar.classList.remove("show-sidebar");
      }
    } else if (id.includes("#")) {
      window.location.href = id;
    } else {
      window.open(id, "_blank");
    }
  }
});

const handleHover = function (e) {
  // console.log(e.target.classList);
  if (e.target.classList.contains("scroll-link")) {
    const link = e.target;
    const siblings = link
      .closest(".nav-center")
      .querySelectorAll(".scroll-link");
    const logo = link.closest(".nav-center").querySelector("img");
    siblings.forEach((s) => {
      if (s !== link) {
        s.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};
const handleHoverSidebar = function (e) {
  // console.log(e.target.classList);
  if (e.target.classList.contains("scroll-link")) {
    const link = e.target;

    const siblings = link.closest(".sidebar").querySelectorAll(".scroll-link");
    siblings.forEach((s) => {
      if (s !== link) {
        s.style.opacity = this;
      }
    });
  }
};
nav.addEventListener("mouseover", handleHover.bind(0.25));
nav.addEventListener("mouseout", handleHover.bind(1));
sbar.addEventListener("mouseover", handleHoverSidebar.bind(0.25));
sbar.addEventListener("mouseout", handleHoverSidebar.bind(1));
