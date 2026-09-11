const dropdownElement = document.querySelector("[data-js-dropdown]");
const dropdownButtonElement = dropdownElement.querySelector(
  "[data-js-dropdown-button]",
);
const dropdownContentElement = dropdownElement.querySelector(
  "[data-js-dropdown-content]",
);

dropdownButtonElement.addEventListener("click", () => {
  const isActive = dropdownContentElement.classList.toggle("is-active");
  dropdownButtonElement.setAttribute("aria-expanded", isActive);
});

document.addEventListener("click", (event) => {
  if (!dropdownContentElement.classList.contains("is-active")) {
    return;
  }

  const isClickInsideDropdown = dropdownElement.contains(event.target);

  if (!isClickInsideDropdown) {
    dropdownContentElement.classList.remove("is-active");
    dropdownButtonElement.setAttribute("aria-expanded", false);
  }
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    dropdownContentElement.classList.contains("is-active")
  ) {
    dropdownContentElement.classList.remove("is-active");
    dropdownButtonElement.setAttribute("aria-expanded", "false");
    dropdownButtonElement.focus();
  }
});
