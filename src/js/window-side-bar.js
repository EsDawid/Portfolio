sideBarButtons = document.querySelectorAll(".button-side-bar");

sideBarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentNode.nextElementSibling.classList.toggle("hiddenMenu");
  });
});
