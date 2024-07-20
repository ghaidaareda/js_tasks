"use strict";
//importing module:

// function to get lat, long using navigator.geolocation and promisfy the function:
const getCoords = async function () {
  if ("geolocation" in navigator) {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      const city = await getCity([lat, long]);
      return city;
    } catch (error) {
      console.error(`Failed to get your position: ${error}`);
    }
  } else {
    console.error("Geolocation is not supported by the browser.");
  }
};

const getCity = async function (coords) {
  const [lat, long] = coords;
  const url = `http://api.openweathermap.org/geo/1.0/reverse?`;
  try {
    const response = await fetch(
      url +
        `lat=${lat}&lon=${long}&limit=1&appid=a533a789f05c61b81a2a562d029bf6ba`
    );
    if (!response.ok) {
      throw new Error(
        `Couldn't find the location. Please try again. Status: ${response.status}`
      );
    }
    const data = await response.json();
    return data[0].name;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

(async () => {
  const city = await getCoords();
  console.log(city);
})();

// geting weather data:

const getWeatherBySearch = async function (city) {
  try {
    const response = await fetch(`
      https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a533a789f05c61b81a2a562d029bf6ba`);
    if (!response.ok)
      throw new Error(`city not found. Status: ${response.status}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
};

getWeatherBySearch("Cairo");
