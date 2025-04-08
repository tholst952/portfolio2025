"use strict";

const btn = document.querySelector(".btn");
const img = document.querySelector("img");
const navBtn = document.querySelector(".nav-btn");
const navMenu = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link");
const emailBtn = document.querySelectorAll(".email-btn");

//Image hover effect
btn.addEventListener("mouseenter", function () {
  img.src = "/img/avatar-12.png";
  // img.src = "/img/avatar-13.png";
});

btn.addEventListener("mouseleave", function () {
  img.src = "/img/avatar-11.png";
});

navBtn.addEventListener("click", function () {
  navMenu.classList.add("active");
});

//Close nav menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
  });
});

//Frowny face when mouse leaves the browser window
window.addEventListener("mouseout", function (e) {
  if (!e.relatedTarget) {
    img.src = "/img/avatar-14.png";
    console.log("The mouse has left the broswer window");
  }
});

//Avatar changes when nav link is hovered
navLinks.forEach(function (link) {
  link.addEventListener("mouseover", function () {
    img.src = "/img/avatar-15.png";
  });

  link.addEventListener("mouseout", function () {
    img.src = "/img/avatar-11.png";
  });
});

//Copy email to user's clipboard function
// const copyToClipboard = function () {
//   const copyText = "trena.holsten@gmail.com";

//   // navigator.clipboard.writeText(copyText.value);
//   alert("Copied email to clipboard!");
// };

emailBtn.addEventListener("click", () => {
  const copyText = "trena.holsten@gmail.com";
  navigator.clipboard
    .writeText(copyText)
    .then(() => alert("Copied email to clipboard!"));
});
