const calcButtons = document.querySelectorAll(".num");
const currButtons = document.querySelectorAll(".curr");
let result = document.querySelector(".result-container__result");
let currOperation = document.querySelector(
  ".result-container__current-operation"
);

const closeCalc = document.querySelector(".closeCalc");
const resultButton = document.querySelector(".result-button");
const operationButtons = document.querySelectorAll(".operation");
const CEButton = document.querySelector(".clear-number");
let currOperationHolder = "";
const signArray = ["+", "-", "*", "/"];
prevResult = "";
newResult = "";
//display button content on result div
calcButtons.forEach((button) => {
  button.addEventListener("click", () => {
    result.textContent += button.textContent;
  });
});
currButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currOperation.textContent += button.textContent;
  });
});

//display result
resultButton.addEventListener("click", () => {
  prevResult = result.textContent;
  newResult = eval(result.textContent);
  result.textContent = newResult;
  setTimeout(() => {
    currOperation.textContent += eval(result.textContent);
  }, 10);
});

//remove result after close calc
closeCalc.addEventListener("click", () => {
  result.textContent = "";
  currOperation.textContent = "";
});

//Checking equal sign in current result
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currOperation.textContent.lastIndexOf("=") > 0) {
      setTimeout(() => {
        currOperation.textContent = currOperation.textContent.slice(
          currOperation.textContent.lastIndexOf("=") + 1,
          currOperation.textContent.length
        );
      }, 50);
    }
  });
});

CEButton.addEventListener("click", () => {
  result.textContent = "0";
});

let today = new Date();
let day = String(today.getDate());
let month = String(today.getMonth() + 1);
let year = String(today.getFullYear());
let hours = String(today.getHours());
let minutes = String(today.getMinutes());

let arrayOfDate = [hours, minutes, day, month, year];
let formattedArrayOfDate = [];
function formatDate(arrayOfDate) {
  formattedArrayOfDate = arrayOfDate.map((element) => {
    if (parseInt(element) < 10) {
      element = String(0 + element);
    }
    return element;
  });
}
formatDate(arrayOfDate);

document.querySelector(
  ".time"
).textContent = `${formattedArrayOfDate[0]}:${formattedArrayOfDate[1]}`;
document.querySelector(
  ".date"
).textContent = `${formattedArrayOfDate[2]}.${formattedArrayOfDate[3]}.${formattedArrayOfDate[4]}`;

setInterval(() => {
  today = new Date();
  day = String(today.getDate());
  month = String(today.getMonth() + 1);
  year = String(today.getFullYear());
  hours = String(today.getHours());
  minutes = String(today.getMinutes());
  arrayOfDate = [hours, minutes, day, month, year];
  formatDate(arrayOfDate);
  document.querySelector(
    ".time"
  ).textContent = `${formattedArrayOfDate[0]}:${formattedArrayOfDate[1]}`;
  document.querySelector(
    ".date"
  ).textContent = `${formattedArrayOfDate[2]}.${formattedArrayOfDate[3]}.${formattedArrayOfDate[4]}`;
}, 60000);

// // dragElement(document.querySelector(".windowDrag"));
// draggableWindows = document.querySelectorAll(".windowDrag");
// draggableWindows.forEach((window) => {
//   dragElement(window);
// });

// function dragElement(elmnt) {
//   var pos1 = 0,
//     pos2 = 0,
//     pos3 = 0,
//     pos4 = 0;
//   draggableTopBars = document.querySelectorAll(".windowDragHeader");
//   if (draggableTopBars) {
//     // if present, the header is where you move the DIV from:
//     draggableTopBars.forEach((topBar) => {
//       topBar.onmousedown = dragMouseDown;
//     });
//     // document.querySelector(".windowDragHeader").onmousedown = dragMouseDown;
//   } else {
//     // otherwise, move the DIV from anywhere inside the DIV:
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = elmnt.offsetTop - pos2 + "px";
//     elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
//   }

//   function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }

//Draggable
interact(".window").draggable({
  // enable inertial throwing
  inertia: false,
  // keep the element within the area of it's parent
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: "parent",
      endOnly: false,
    }),
  ],
  // enable autoScroll
  autoScroll: true,

  listeners: {
    // call this function on every dragmove event
    move: dragMoveListener,
  },
});

function dragMoveListener(event) {
  //   var target = event.target.parentNode;
  var target = event.target;
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  // translate the element
  target.style.transform = "translate(" + x + "px, " + y + "px)";

  // update the posiion attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;

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


sideBarButtons = document.querySelectorAll(".button-side-bar");

sideBarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentNode.nextElementSibling.classList.toggle("hiddenMenu");
  });
});
