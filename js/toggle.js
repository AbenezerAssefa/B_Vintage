// Get references to the menu elements
const menuButton = document.getElementById("menuButton");
const menuContainer = document.getElementById("menuContainer");

// Toggle menu visibility when clicking the menu button
menuButton.addEventListener("click", function () {
  menuContainer.classList.toggle("show-menu");
});
