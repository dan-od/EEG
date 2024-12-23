document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Ensure both elements exist
  if (menuToggle && navLinks) {
    // Add click event listener for menu toggle
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("show"); // Toggle 'show' class on nav links
      menuToggle.classList.toggle("active"); // Add/remove 'active' class on hamburger
    });

    // Close the menu when any link inside is clicked
    navLinks.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        navLinks.classList.remove("show");
        menuToggle.classList.remove("active"); // Reset hamburger animation
      }
    });
  } else {
    console.error("Menu toggle or navigation links element is missing!");
  }
});
