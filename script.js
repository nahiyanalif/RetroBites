// Open and close the mobile navigation menu.
const menuToggle = document.querySelector(".menu-toggle");
const mainMenu = document.querySelector(".main-menu");

if (menuToggle && mainMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainMenu.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.querySelector(".menu-toggle-label").textContent = isOpen
      ? "Close"
      : "Menu";
    menuToggle.querySelector(".menu-toggle-icon").textContent = isOpen
      ? "×"
      : "☰";
  });

  // Close the menu after someone chooses a section.
  mainMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.querySelector(".menu-toggle-label").textContent = "Menu";
      menuToggle.querySelector(".menu-toggle-icon").textContent = "☰";
    });
  });
}

// Keep the copyright year current.
const yearElement = document.querySelector("#current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
