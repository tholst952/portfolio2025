"use strict";

const btn = document.querySelector(".btn");
const topImg = document.querySelector(".home-img img");
const navBtn = document.querySelector(".nav-btn");
const navMenu = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link");
const emailSpan = document.querySelectorAll(".email-span");
const contactImgParent = document.querySelector(".contact-form-img");
const contactImg = contactImgParent.querySelector("img");
const contactForm = document.querySelector(".contact-form-inputs");

//Image hover effect
btn.addEventListener("mouseenter", function () {
  topImg.src = "/img/avatar-12.png";
  // img.src = "/img/avatar-red.png";
  // img.src = "/img/avatar-13.png";
});

btn.addEventListener("mouseleave", function () {
  topImg.src = "/img/avatar-11.png";
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
    topImg.src = "/img/avatar-14.png";
    console.log("The mouse has left the broswer window");
  }
});

//Avatar changes when nav link is hovered
navLinks.forEach(function (link) {
  link.addEventListener("mouseover", function () {
    topImg.src = "/img/avatar-15.png";
  });

  link.addEventListener("mouseout", function () {
    topImg.src = "/img/avatar-11.png";
  });
});

//Copy email to user's clipboard function
// const copyToClipboard = function () {
//   const copyText = "trena.holsten@gmail.com";

//   // navigator.clipboard.writeText(copyText.value);
//   alert("Copied email to clipboard!");
// };

// copies email to user's clipboard
// emailSpan.addEventListener("click", () => {
//   const copyText = "trena.holsten@gmail.com";
//   navigator.clipboard
//     .writeText(copyText)
//     .then(() => alert("Copied email to clipboard!"));
// });

// Change Image when mouse hovers over it
contactImgParent.addEventListener("mouseover", function () {
  contactImg.src = "/img/avatar-red-closed-shy.png";
});

contactImgParent.addEventListener("mouseleave", function () {
  contactImg.src = "/img/avatar-red-shy-smile.png";
});

// Change the image when mouse hovers inside the contact form
contactForm.addEventListener("mouseenter", function () {
  contactImg.src = "/img/avatar-red-eyes-left-shy.png";
});

contactForm.addEventListener("mouseleave", function () {
  contactImg.src = "/img/avatar-red-shy-smile.png";
});
