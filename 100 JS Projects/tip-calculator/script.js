let bill = document.querySelector("#bill");
let tip = document.querySelector("#tip");
let submitButton = document.querySelector("#calculate");
// let form = document.querySelector("form");
let total = document.querySelector("#total");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let billAmount = parseInt(bill.value);
  let tipPercentage = parseInt(tip.value);
  let tipAmount = (billAmount * tipPercentage) / 100;
  total.textContent = `₹ ${(billAmount + tipAmount).toFixed(2)}`;
});
