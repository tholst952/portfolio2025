"use strict";

const btn = document.querySelector(".btn");
const topImg = document.querySelector(".home-img img");
const navBtn = document.querySelector(".nav-btn");
const navMenu = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link");
const emailCopy = document.querySelector(".email-copy");
const contactImgParent = document.querySelector(".contact-form-img");
const contactImg = contactImgParent.querySelector("img");
const contactForm = document.querySelector(".contact-form-inputs");

///////////////////////////////////////////////////
///// HOME SECTION /////
//////////////////////////////////////////////////

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

///////////////////////////////////////////////////
///// CONTACT SECTION /////
//////////////////////////////////////////////////

// copies email to user's clipboard
emailCopy.addEventListener("click", () => {
  const copyText = "trena.holsten@gmail.com";
  navigator.clipboard
    .writeText(copyText)
    .then(() => {
      contactImg.src = "/img/black-background.png";
      console.log("Copied email to clipboard!");

      // Set image back to default after 1 second
      setTimeout(() => {
        contactImg.src = "/img/avatar-black-stars.png";
      }, 1500);
    })
    .catch((err) => {
      console.error("Failed to copy email", err);
    });
});

/************************************************* */
// Handle the contact image hover effects for wide screens and static for mobile
// immediately evoked function below
/************************************************* */
(function () {
  // Image paths
  const imagePaths = {
    default: "/img/avatar-red-shy-smile.png",
    parentHover: "/img/avatar-red/closed-shy.png",
    formHover: "/img/avatar-red-eyes-left-shy.png",
  };

  // Media query for min-width: 704px
  const mediaQuery = window.matchMedia("(min-width: 704px)");

  // Check if hover effects should be enabled
  function shouldEnableHoverEffects() {
    return mediaQuery.matches;
  }

  // Image change handler
  function changeImage(imagePath) {
    if (shouldEnableHoverEffects()) {
      contactImg.src = imagePath;
    }
  }

  // Event handlers
  function handleParentMouseOver() {
    changeImage(imagePaths.parentHover);
  }

  function handleParentMouseLeave() {
    changeImage(imagePaths.default);
  }

  function handleFormMouseEnter() {
    changeImage(imagePaths.formHover);
  }

  function handleFormMouseLeave() {
    changeImage(imagePaths.default);
  }

  // Add Event Listeners
  function addEventListeners() {
    contactImgParent.addEventListener("mouseover", handleParentMouseOver);
    contactImgParent.addEventListener("mouseleave", handleParentMouseLeave);
    contactForm.addEventListener("mouseenter", handleFormMouseEnter);
    contactForm.addEventListener("mouseleave", handleFormMouseLeave);
  }

  // Initialize Hover Effects
  function initHoverEffects() {
    addEventListeners();
  }

  // Listen for media query changes to handle dynamic resizing
  mediaQuery.addEventListener("change", function (e) {
    if (!e.matches) {
      // Reset to default image when below 704px
      contactImg.src = imagePaths.default;
    }
  });

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHoverEffects);
  } else {
    initHoverEffects();
  }
});

/*
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
*/
