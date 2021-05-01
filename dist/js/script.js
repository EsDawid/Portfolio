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

dragElement(document.querySelector(".windowDrag"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

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

