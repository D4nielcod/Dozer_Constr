// Navigation bar
const resBar = document.querySelector(".resbar");
const navMenuBtn = document.querySelector(".nav-menu-btn");
const resMenuBtn = document.querySelector(".res-menu-btn");

navMenuBtn.addEventListener("click", function () {
  resBar.style.animation = "resbarEntree 1s forwards 1";
});

resMenuBtn.addEventListener("click", function () {
  resBar.style.animation = "resbarExit 1s forwards 1";
});

// Modal Section
const navbarContactBtn = document.querySelector(".navbar-contact");
const resbarContactBtn = document.querySelector(".resbar-contact");
const modalBox = document.querySelector(".modal-box");
const closeBtn = document.querySelector(".close-btn");

navbarContactBtn.addEventListener("click", function () {
  modalBox.style.display = "flex";
});

resbarContactBtn.addEventListener("click", function () {
  modalBox.style.display = "flex";
  resBar.style.animation = "resbarExit 1s forwards 1";
});

closeBtn.addEventListener("click", function () {
  modalBox.style.display = "none";
});
