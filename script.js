"use strict";

const btn = document.querySelector(".btn");
const img = document.querySelector("img");

btn.addEventListener("mouseenter", function () {
  img.src = "/img/avatar-12.png";
});

btn.addEventListener("mouseleave", function () {
  img.src = "/img/avatar-11.png";
});
