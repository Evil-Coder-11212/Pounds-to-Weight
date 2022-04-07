// Initializing Variables
const inputEl = document.querySelector("#pounds-input");
const resultEl = document.querySelector("#result");
const convertBtn = document.querySelector("#convert-btn");

const convert = (num) => {
  let total = "";
  let error = false;
  let errorMessage = "";
  if (num != null && num != "") {
    error = false;
    total = Math.abs(num / 2.205);
    resultEl.textContent = total;
  } else {
    error = true;
    errorMessage = "Please fill all perimeter.";
    resultEl.textContent = errorMessage;
  }
};

// Calling Function
convertBtn.addEventListener("click", () => {
  convert(Number(inputEl.value));
});
