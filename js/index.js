// Navigation bar
const navBar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const mainBody = document.querySelector(".main-body");

menuBtn.addEventListener("click", function () {
  if (navBar.className === "navbar") {
    navBar.className = "responsive";
    mainBody.style.display = "none";
  } else if (navBar.className === "responsive") {
    navBar.className = "navbar";
    mainBody.style.display = "block";
  }
});

// Modal Section
contactBtn = document.querySelector(".navbar-contact");
modalBox = document.querySelector(".modal-box");
closeBtn = document.querySelector(".close-btn");

contactBtn.addEventListener("click", function () {
  modalBox.style.display = "flex";
  if (navBar.className === "responsive") {
    navBar.className = "navbar";
    mainBody.style.display = "block";
  }
});

closeBtn.addEventListener("click", function () {
  modalBox.style.display = "none";
});
