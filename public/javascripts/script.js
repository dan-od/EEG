document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent click from closing the menu
      navLinks.classList.toggle("show");
      menuToggle.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      if (navLinks.classList.contains("show") && !navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove("show");
        menuToggle.classList.remove("active");
      }
    });
  } else {
    console.error("menuToggle or navLinks not found.");
  }
});
