const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
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
// date.innerHTML = new Date().getFullYear();
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // links.classList.remove("show-links");
    let position = null;
    const id = e.target.getAttribute("href").slice(1);
    if (id === "home") {
      const element = document.getElementById(id);

      position = element.offsetTop - 63;
    }
    if (id === "about") {
      const element = document.getElementById(id);

      position = element.offsetTop - 80;
    }
    if (id === "services") {
      const element = document.getElementById(id);

      position = element.offsetTop - 80;
    }

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth",
    });
    window.addEventListener("scroll", () => {
      if (sidebar.classList.contains("show-sidebar")) {
        sidebar.classList.remove("show-sidebar");
      }
    });
  });
});
