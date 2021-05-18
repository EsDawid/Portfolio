//Variables
const bottomMenu = document.getElementById("bottom-menu");
const bottomMenuButton = document.getElementById("bottom-menu-button");
const closingButtons = document.querySelectorAll(".closeWindow");
let zIndex = 1;
const windows = document.querySelectorAll(".window");

//Closing buttons
closingButtons.forEach((element) => {
  element.addEventListener("click", () => {
    element.parentNode.parentNode.classList.remove("show");
  });
});

//Bottom menu
document.getElementById("bottom-menu-button").addEventListener("click", () => {
  bottomMenu.classList.toggle("show-bottom-menu");
  bottomMenuButton.classList.toggle("active");
});
document.querySelector(".desktop").addEventListener("click", () => {
  bottomMenu.classList.remove("show-bottom-menu");
  bottomMenuButton.classList.remove("active");
});

//Recycle bin
const recycleBin = document.getElementById("recycle-bin");
const recycleBinButtons = document.querySelectorAll(".recycle-bin-button");
recycleBinButtons.forEach((button) => {
  button.addEventListener("click", () => {
    recycleBin.classList.add("show");
    recycleBin.style.zIndex = zIndex;
    zIndex++;
    bottomMenu.classList.remove("show-bottom-menu");
    bottomMenuButton.classList.remove("active");
  });
});

//My computer
const myComputer = document.getElementById("myComputer");
const myComputerbuttons = document.querySelectorAll(".myComputer-button");
myComputerbuttons.forEach((button) => {
  button.addEventListener("click", () => {
    myComputer.classList.add("show");
    myComputer.style.zIndex = zIndex;
    zIndex++;
    bottomMenu.classList.remove("show-bottom-menu");
    bottomMenuButton.classList.remove("active");
  });
});

//Portfolio
const portfolio = document.getElementById("portfolio");
const portfolioButtons = document.querySelectorAll(".portfolio-button");
portfolioButtons.forEach((button) => {
  button.addEventListener("click", () => {
    portfolio.classList.add("show");
    portfolio.style.zIndex = zIndex;
    zIndex++;
    bottomMenu.classList.remove("show-bottom-menu");
    bottomMenuButton.classList.remove("active");
  });
});

//przeglądarka
const explorer = document.getElementById("explorer");
const explorerButtons = document.querySelectorAll(".explorer-button");
explorerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    explorer.classList.add("show");
    explorer.style.zIndex = zIndex;
    zIndex++;
    bottomMenu.classList.remove("show-bottom-menu");
    bottomMenuButton.classList.remove("active");
  });
});

//o mnie
const aboutMe = document.getElementById("about-me");
const aboutMeButtons = document.querySelectorAll(".about-me-button");
aboutMeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    aboutMe.classList.add("show");
    aboutMe.style.zIndex = zIndex;
    zIndex++;
    bottomMenu.classList.remove("show-bottom-menu");
    bottomMenuButton.classList.remove("active");
  });
});

//stack
const stack = document.getElementById("stack");
const stackButtons = document.querySelectorAll(".stack-button");
stackButtons.forEach((button) => {
  button.addEventListener("click", () => {
    stack.classList.add("show");
    stack.style.zIndex = zIndex;
    zIndex++;
    bottomMenu.classList.remove("show-bottom-menu");
    bottomMenuButton.classList.remove("active");
  });
});

//Open calc
const calculatorButtons = document.querySelectorAll(".calculator-button");
const calculator = document.getElementById("calculator");
calculatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.classList.add("show");
    calculator.style.zIndex = zIndex;
    zIndex++;
    bottomMenu.classList.remove("show-bottom-menu");
    bottomMenuButton.classList.remove("active");
  });
});

//changing z-index of active windows
windows.forEach((window) => {
  window.addEventListener("click", (e) => {
    e.target.closest(".window").style.zIndex = zIndex;
    zIndex++;
  });
});

//Select opener
const selector = document.getElementById("openSelector");
selector.addEventListener("change", (e) => {
  id = selector.value;
  windowContainer = document.getElementById(id);
  windowContainer.classList.add("show");
  bottomMenu.classList.remove("show-bottom-menu");
  bottomMenuButton.classList.remove("active");
  selector.value = "none";
});
