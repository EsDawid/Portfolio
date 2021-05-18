sidebarOpenerButtons = document.querySelectorAll(".side-bar-opener");

sidebarOpenerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(
      button.parentNode.parentNode.nextElementSibling.classList.toggle(
        "hiddenMenu"
      )
    );
  });
});
