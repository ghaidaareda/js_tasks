// exporting module:

// object for all helper functions needed to validate data and handling error

// function to run if file not exise or empty:
export const fileError = function (responseStatus) {
  const p = document.createElement("p");
  p.innerText = `Page does not exist (${responseStatus})`;
  document.body.appendChild(p);
};

// function to check objects present and each property not undefined:
const validateCarObject = function (obj) {
  // properties: image, title , start_production, class
};

// function to render data create element .html and append child(table)

//
