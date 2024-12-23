document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  if (menuToggle && navLinks) {
    // Toggle menu visibility on menu button click
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      menuToggle.classList.toggle("active");
    });

    // Close menu when a navigation link is clicked
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.classList.remove("active");
      });
    });

    // Close menu when clicking outside the menu or button
    document.addEventListener("click", (event) => {
      if (
        navLinks.classList.contains("show") && // Menu is open
        !navLinks.contains(event.target) && // Click is outside the menu
        !menuToggle.contains(event.target) // Click is outside the toggle button
      ) {
        navLinks.classList.remove("show");
        menuToggle.classList.remove("active");
      }
    });
  } else {
    console.error(
      "menuToggle or navLinks not found. Ensure your HTML structure matches the script."
    );
  }
});
