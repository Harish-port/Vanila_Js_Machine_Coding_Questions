// Solution 1

let incrementBtn = document.getElementById("increment");
let decrementBtn = document.getElementById("decrement");
let resetBtn = document.getElementById("decrement");

incrementBtn.addEventListener("click", () => {
  let counterValue = document.getElementById("count");
  let currentValue = parseInt(counterValue.textContent);
  counterValue.innerHTML = currentValue + 1;
  console.log(currentValue, ",<<");
});

decrementBtn.addEventListener("click", () => {
  let counterValue = document.getElementById("count");
  let currentValue = parseInt(counterValue.textContent);
  counterValue.innerHTML = currentValue - 1;
  console.log(currentValue, ",<<");
});

resetBtn.addEventListener("click", () => {
  let counterValue = document.getElementById("count");
  let currentValue = parseInt(counterValue.textContent);
  counterValue.innerHTML = 0;
  console.log(currentValue, ",<<");
});
