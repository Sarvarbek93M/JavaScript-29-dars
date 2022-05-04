"use strict";

const wrapper = document.querySelector(".wrapper"),
  btn = wrapper.querySelector("[date-currentBtn='1']"),
  a = document.querySelector(".a");

// btn.addEventListener(
//   "click",
//   () => {
//     console.log("hi");
//   }
//   // { once: true }
// );

//console.log(a.parentElement); byu orqali asosiy div elentini olishimiz m-n
// console.log(btn.nextElementSibling); // bu orqali keyingi elementni chqarishimiz m-n

// for (let i of document.body.childNodes) {
//   if (i.nodeName == "#text") {
//     continue;
//   }
// //   console.log(i);
// }

const btns = document.querySelectorAll("button");

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    console.log("Dars " + index);
  });
});

console.log(btns);
