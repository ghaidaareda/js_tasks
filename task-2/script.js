"use strict";

//select element
const carsTable = document.querySelector("table");

// gstting data from json file
const getData = async function () {
  try {
    const response = await fetch("./cars.json");
    if (!response.ok)
      throw new Error(`something went wrong ${response.status}`);

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
};

//render data on html
const renderData = function (data) {
  data.forEach((car) => {
    carsTable.insertAdjacentHTML(
      "beforeend",
      `<tbody>
    <tr>
      <td>${car.Name}</td>
      <td>${car.Horsepower}</td>
      <td>${car.Origin}</td>
      <td>${car.Year}</td>
    </tr>
  </tbody>`
    );
  });
};

// main function:
(async function () {
  try {
    const cars = await getData();
    renderData(cars);
  } catch (error) {
    console.error(error);
  }
})();
