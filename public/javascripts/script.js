document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");
  const header = document.querySelector("header");
  const main = document.querySelector("main");

  if (menuToggle && navLinks && header) {
    // Function to adjust the menu position dynamically
    const adjustMenuPosition = () => {
      const headerHeight = header.offsetHeight; // Get the header height
      navLinks.style.top = `${headerHeight}px`; // Set menu's top position
    };

    // Function to adjust main content padding dynamically
    const adjustMainPadding = () => {
      const headerHeight = header.offsetHeight;
      if (main) {
        main.style.paddingTop = `${headerHeight}px`; // Ensure main content starts below header
      } else {
        document.body.style.paddingTop = `${headerHeight}px`; // Fallback if no <main>
      }
    };

    // Adjust menu and main content positions initially and on window resize
    window.addEventListener("load", () => {
      adjustMenuPosition();
      adjustMainPadding();
    }); // Ensure it runs after page load
    window.addEventListener("resize", () => {
      adjustMenuPosition();
      adjustMainPadding();
    });

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

    // Adjust header and menu on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
      adjustMainPadding();
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
      "menuToggle, navLinks, header, or main not found. Ensure your HTML structure matches the script."
    );
  }
});
