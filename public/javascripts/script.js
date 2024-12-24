document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");
  const header = document.querySelector("header");

  if (menuToggle && navLinks && header) {
    // Function to adjust the menu position dynamically
    const adjustMenuPosition = () => {
      const headerHeight = header.offsetHeight; // Get the header height
      navLinks.style.top = `${headerHeight}px`; // Set menu's top position
    };

    // Adjust menu position initially and on window resize
    window.addEventListener("load", adjustMenuPosition); // Ensure it runs after page load
    window.addEventListener("resize", adjustMenuPosition);

    // Toggle menu visibility on menu button click
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      menuToggle.classList.toggle("active");
      adjustMenuPosition(); // Ensure position adjusts when menu is toggled
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
      "menuToggle, navLinks, or header not found. Ensure your HTML structure matches the script."
    );
  }
});
