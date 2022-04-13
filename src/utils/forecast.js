const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=0ac1014930ac498307a2828d47d51858&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      console.log(body);
      callback(
        undefined,
        "It is currently " +
          body.current.temperature +
          " degress out. And it's " +
          body.current.weather_descriptions
      );
    }
  });
};

module.exports = forecast;
