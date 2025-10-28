// Toggle mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// Button click actions
document.getElementById("donateBtn").addEventListener("click", () => {
  alert("Redirecting to food donation form...");
});

document.getElementById("getStarted").addEventListener("click", () => {
  alert("Let's get started! Sign up to donate or volunteer.");
});

document.getElementById("joinNow").addEventListener("click", () => {
  alert("Thank you for joining the movement!");
});
