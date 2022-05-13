"use strict";

// bag modal code

const modal = document.querySelector(".bag-modal");
const modalOpen = document.querySelectorAll(".modal-open");
const modalClose = document.querySelector(".modal-close");
const wrapper = document.querySelector(".wrapp");

modalOpen.forEach((element) => {
  element.addEventListener("click", function () {
    modal.classList.remove("closed");
    wrapper.classList.add("wrapper--modal");
    document.body.style.overflow = "hidden";
  });
});

modalClose.addEventListener("click", function () {
  modal.classList.add("closed");
  wrapper.classList.remove("wrapper--modal");
  document.body.style.overflow = "scroll";
});

// modal-counter
let inputs = document.querySelectorAll("input");
for (let index = 0; index < inputs.length; index++) {
  inputs[index].setAttribute("readonly", "true");
}

let bagItems = document.querySelectorAll(".bag__item-wrapp");

bagItems.forEach(function foo(element) {
  const buttonCountPlus = element.querySelector(".counter-plus");
  const buttonCountMinus = element.querySelector(".counter-minus");
  const counterNumber = element.querySelector(".counter-number");
  const counterValue = element.querySelector(".counter-value");
  let price = 200;

  buttonCountPlus.addEventListener("click", function () {
    let value = parseInt(counterNumber.value);
    if (value <= 100) {
      value++;
      counterNumber.value = value;
      counterValue.value = "$" + " " + value * price;
    }
  });

  buttonCountMinus.addEventListener("click", function () {
    let value = parseInt(counterNumber.value);
    if (value >= 2) {
      value--;
      counterNumber.value = value;
      counterValue.value = "$" + " " + value * price;
    }
  });
});

const loginModal = document.querySelector('.login-modal');
const loginOpen = document.querySelectorAll('.login-open');
const loginClose = document.querySelector('.login-modal--close')

loginOpen.forEach((element) => {
  element.addEventListener("click", function () {
    loginModal.classList.remove("closed");
    wrapper.classList.add("wrapper--modal");
    document.body.style.overflow = "hidden";
  });
})

loginClose.addEventListener("click", function () {
  loginModal.classList.add("closed");
  wrapper.classList.remove("wrapper--modal");
  document.body.style.overflow = "scroll";
});

