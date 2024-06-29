import { fileError } from "./utility.js";

//select element
const carsTable = document.querySelector("table");

// getting data from json file
const getData = async function (file) {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      fileError(response.status);
      throw new Error(`file not found ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};

//render data on html
const renderData = function (data) {
  data.forEach((car) => {
    carsTable.insertAdjacentHTML(
      "beforeend",
      `<tbody>
    <tr>
      <td>${car.title}</td>
      <td>${car.start_production}</td>
      <td>${car.class}</td>
      <td><a href=${car.image}><img src=${car.image} ></a></td>
    </tr>
  </tbody>`
    );
  });
};

// main function:
(async function () {
  try {
    const cars = await getData("./car.json");
    renderData(cars);
  } catch (error) {
    console.error(error);
  }
})();
