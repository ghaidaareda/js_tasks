import { fileError, displayTable, displayTableBody } from "./utility.js";

//select element
const carsTable = document.querySelector("#table-container");

// getting data from json file
const getData = async function (file) {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      fileError(`Page does not exist (${response.status})`);
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
  // 1- create table + table header
  let table = displayTable("Title", "Production Year", "Class", "Image");

  // create table body and check car object properties:
  data.forEach((car) => {
    let tbody =
      car.title !== ""
        ? displayTableBody(
            car.title,
            car.start_production || "No data avaliable",
            car.class || "No data avalible",
            car.image ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSotEQiQ4uV2BL4OkozQIs-dAoeF9HD7b4aew&s"
          )
        : null;
    if (tbody) table.appendChild(tbody);
  });
  carsTable.appendChild(table);
};

// main function:
(async function () {
  try {
    const cars = await getData("./car.json");
    //console.log(cars);
    if (cars.length === 0) {
      fileError(`No data available rigth now `);
      return;
    }
    renderData(cars);
  } catch (error) {
    console.error(error);
  }
})();
