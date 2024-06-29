// 1 - function to run if file not exise or empty:
export const fileError = function (textMessage) {
  const p = document.createElement("p");
  p.innerText = textMessage;
  document.body.appendChild(p);
};

// 2-function to check objects present and each property not undefined:
const validateCarObject = function (obj) {
  // properties: image, title , start_production, class
};

// 3-function to create (table) header:
export const displayTable = function (...properties) {
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let headRow = document.createElement("tr");

  properties.forEach((item) => {
    let th = document.createElement("th");
    th.textContent = item;
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);
  table.appendChild(thead);
  document.body.appendChild(table);

  return table;
};

//create table body:
export const displayTableBody = function (...cardata) {
  let tbody = document.createElement("tbody");
  let row = document.createElement("tr");
  cardata.forEach((property) => {
    let td = document.createElement("td");
    if (property === cardata[3]) {
      td.innerHTML = `<a href=${cardata[3]}><img src=${cardata[3]} ></a>`;
    } else {
      td.textContent = property;
    }
    row.appendChild(td);
  });
  tbody.appendChild(row);
  return tbody;
};

/*
  Table.insertAdjacentHTML(
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
*/
