document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded successfully!");

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      // Test toggling
      console.log("Menu toggle clicked!");
      navLinks.style.display =
        navLinks.style.display === "block" ? "none" : "block";
    });
  } else {
    console.error("menuToggle or navLinks not found.");
  }

  if (!menuToggle || !navLinks) {
    console.error("menuToggle or navLinks not found. DOM may not be ready.");
    return;
  }

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    console.log("Menu toggled!");
  });  
});
