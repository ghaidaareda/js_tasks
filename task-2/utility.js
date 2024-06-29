// exporting module:

// 1 - function to run if file not exise or empty:
export const fileError = function (responseStatus) {
  const p = document.createElement("p");
  p.innerText = `Page does not exist (${responseStatus})`;
  document.body.appendChild(p);
};

// 2-function to check objects present and each property not undefined:
const validateCarObject = function (obj) {
  // properties: image, title , start_production, class
};

// 3-function to render data create (table) and append child element

//
