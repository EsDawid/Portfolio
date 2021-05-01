closingButtons = document.querySelectorAll(".closeWindow");
closingButtons.forEach((element) => {
  element.addEventListener("click", () => {
    element.parentNode.parentNode.classList.remove("show");

    element.parentNode.parentNode.style.left = "50%";
    element.parentNode.parentNode.style.top = "50%";
    element.parentNode.parentNode.style.transform = "translate(-50%, -50%)";
  });
});
document.getElementById("calculator-button").addEventListener("click", () => {
  document.getElementById("calculator").classList.add("show");
});

//Bottom menu
const bottomMenu = document.getElementById("bottom-menu");
document.getElementById("bottom-menu-button").addEventListener("click", () => {
  bottomMenu.classList.toggle("show-bottom-menu");
});

document.querySelector(".close-bottom-menu").addEventListener("click", () => {
  bottomMenu.classList.remove("show-bottom-menu");
});
