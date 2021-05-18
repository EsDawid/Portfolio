sideBarButtons = document.querySelectorAll(".button-side-bar");

sideBarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(
      button.parentNode.nextElementSibling.classList.toggle("hiddenMenu")
    );
    // button.parentNode.nextElementSibling.classList.toggle("hiddenMenu");
  });
});
