import "../sass/style.scss";

// navbar

let navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", function () {
  let expanded = this.getAttribute("aria-expanded");

  if (expanded === "true") {
    this.setAttribute("aria-expanded", false);
  } else {
    this.setAttribute("aria-expanded", true);
  }
});
