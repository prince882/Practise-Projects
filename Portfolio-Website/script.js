let lines = document.querySelector(".lines");
let hamburger = document.getElementById("hamburger");
lines.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  lines.classList.toggle("lines-active");
});
