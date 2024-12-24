document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");
  const header = document.querySelector("header");
  const main = document.querySelector("main");

  if (menuToggle && navLinks && header) {
    const adjustMenuPosition = () => {
      const headerHeight = header.offsetHeight;
      navLinks.style.top = `${headerHeight}px`;
    };

    const adjustMainSpacing = () => {
      const headerHeight = header.offsetHeight;
      if (main && document.getElementById("contact")) {
        main.style.marginTop = `${headerHeight + 40}px`; // Add extra spacing for contact page
      } else if (main) {
        main.style.marginTop = `${headerHeight}px`;
      }
    };

    const toggleMenu = () => {
      navLinks.classList.toggle("show");
      menuToggle.classList.toggle("active");
      adjustMenuPosition();
    };

    const closeMenu = () => {
      navLinks.classList.remove("show");
      menuToggle.classList.remove("active");
    };

    // Initialize menu position
    window.addEventListener("load", () => {
      adjustMenuPosition();
      adjustMainSpacing();
    });
    window.addEventListener("resize", () => {
      adjustMenuPosition();
      adjustMainSpacing();
    });

    // Menu toggle click
    menuToggle.addEventListener("click", toggleMenu);

    // Close menu when clicking a nav item
    navItems.forEach((item) => {
      item.addEventListener("click", closeMenu);
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      if (
        navLinks.classList.contains("show") &&
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenu();
      }
    });
  } else {
    console.error("Menu script initialization failed. Check your HTML structure.");
  }
});
