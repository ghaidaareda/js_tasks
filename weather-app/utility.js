// exporting module
url reverse coding ='https://api.openweathermap.org/geo/1.0/reverse?lat=31.4335144&lon=31.8039578&limit=1&appid=a533a789f05c61b81a2a562d029bf6ba'
`http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}`
url city  = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`








// old solution to get city from navigator and reverse geocoding
const getCoords = function () {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            console.log(lat, long);
            resolve([lat, long]);
          },
          (error) => {
            reject(`Cannot get your position: ${error}`);
          }
        );
      } else {
        reject("Geolocation is not supported by the browser.");
      }
    });
  };
  
  // get current city:
  const getCity = async function () {
    try {
      const [lat, long] = await getCoords();
      const response = await fetch(
        `https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${long}&localityLanguage=en&key=bdc_a4353828a36940cd820c238c8586db66`
      );
      if (!response.ok) {
        throw new Error("Could not get your location.");
      }
      const data = await response.json();
      console.log(data);
      console.log(data.City);
    } catch (error) {
      console.error(error.message);
    }
  };
  
