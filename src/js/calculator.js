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
