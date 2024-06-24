"use strict";

//select element
const body = document.querySelector("body");

// gstting data from json file
const getData = async function () {
  const response = await fetch("./cars.json");
  const data = await response.json();
  return data;
};

//render data on html
const renderData = function (data) {
  data.forEach((car) => {
    body.insertAdjacentHTML(
      "beforeend",
      `<p> Name:${car.Name}, Horsepower:${car.Horsepower}, Origin:${car.Origin}, Year:${car.Year}</p>`
    );
  });
};

// main function:
(async function () {
  const cars = await getData();
  console.log(cars);
  renderData(cars);
})();
