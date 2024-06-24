"use strict";

//select element
const body = document.querySelector("body");

const getData = async function () {
  const response = await fetch("./cars.json");
  const data = await response.json();
  return data;
};

//getData();

//render data on html
const renderData = function (data, html) {};

// main function:
(async function () {
  const cars = await getData();
  const html = `<br/>
    <p>${cars.Name}, ${cars.Horsepower}, ${cars.Origin}, ${cars.Year}</p>
    <br/>`;
  // render data by looping through it

  //add it to body body.insertAdjusentHtml.
})();
