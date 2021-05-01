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
