const BASE_URL =
  "https://api.frankfurter.app";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });``
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (isNaN(amtVal) || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  const URL = `${BASE_URL}/latest?amount=${amtVal}&from=${fromCurrency.value.toUpperCase()}&to=${toCurrency.value.toUpperCase()}`;
  let response = await fetch(URL);
  let data = await response.json();
  
  let rate = data.rates[toCurrency.value.toUpperCase()];

  if(!rate){
      console.log("Invalid currency code selected.");
      return;
    }
  let finalAmount = rate.toFixed(2);
  msg.innerText = `${amtVal} ${fromCurrency.value} = ${finalAmount} ${toCurrency.value}`;
  console.log(msg.innerText);
};

const updateFlag = (element) => {
  let currCode = element.value;
  let country = countryList[currCode];
  let newURL = `https://flagsapi.com/${country}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newURL;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtVal = parseFloat(amount.value);
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});