const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");
const features = document.getElementById("features");
const featuresDropdown = document.getElementById("features-dropdown");
const company = document.getElementById("company");
const companyDropdown = document.getElementById("company-dropdown");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

features.addEventListener("click", () => {
  featuresDropdown.classList.toggle("expanded");
});

company.addEventListener("click", () => {
  companyDropdown.classList.toggle("expanded");
});