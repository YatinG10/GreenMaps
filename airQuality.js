import axios // If you are using Node.js
// For browsers, you can include Axios via a script tag or a module import

function getAirQuality(apiKey, location) {
  // Define the AirVisual API endpoint
  const apiUrl = 'http://api.airvisual.com/v2/city?city=Los%20Angeles&state=California&country=USA&key={apiKey}';

  // Make a GET request to the API and return the promise
  return axios.get(apiUrl)
    .then(response => {
      // Return the air quality data
      return response.data.data;
    })
    .catch(error => {
      // Handle errors here or propagate them
      throw error;
    });
}

// Example usage:
const apiKey = '5496bce2-ae1f-452e-81d7-e05961556c04';
const location = 'Beijing';

getAirQuality(apiKey, location)
  .then(airQualityData => {
    console.log('Air Quality Data:', airQualityData);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  /// DOESNT WORK BUT OUTPUTS THIS

  /*

  {
  "status": "success",
  "data": {
    "name": "Eilat Harbor",
    "city": "Eilat",
    "state": "South District",
    "country": "Israel",
    "location": {
      "type": "Point",
      "coordinates": [
        34.939443,
        29.531814
      ]
    },
    "forecasts": [ //object containing forecast information
      {
        "ts": "2017-02-01T03:00:00.000Z",  //timestamp
        "aqius": 21, //AQI value based on US EPA standard
        "aqicn": 7, //AQI value based on China MEP standard
        "tp": 8, //temperature in Celsius
        "tp_min": 6, //minimum temperature in Celsius
        "pr": 976,  //atmospheric pressure in hPa
        "hu": 100, //humidity %
        "ws": 3, //wind speed (m/s)
        "wd": 313, //wind direction, as an angle of 360° (N=0, E=90, S=180, W=270)
        "ic": "10n" //weather icon code, see below for icon index
      }, 
    …  // contains more forecast data for upcoming 76 hours
    ]
    "current": {
      "weather": {
        "ts": "2017-02-01T01:00:00.000Z",
        "tp": 12,
        "pr": 1020,
        "hu": 62,
        "ws": 2,
        "wd": 320,
        "ic": "01n"
      },
      "pollution": {
        "ts": "2017-02-01T01:15:00.000Z",
        "aqius": 18,
        "mainus": "p1", //main pollutant for US AQI
        "aqicn": 20,
        "maincn": "p1",  //main pollutant for Chinese AQI
        "p1": {   //pollutant details, concentration and appropriate AQIs
          "conc": 20,
          "aqius": 18,
          "aqicn": 20
        }
      }
    },
    "history": { //object containing weather and pollution history information
      "weather": [
        {
          "ts": "2017-02-01T01:00:00.000Z",
          "tp": 12,
          "pr": 1020,
          "hu": 62,
          "ws": 2,
          "wd": 320,
          "ic": "01n"
        },
        … // contains more weather historical data for past 48 hours

      ]
      "pollution": [
        {
          "ts": "2017-02-01T01:15:00.000Z",
          "aqius": 18,
          "mainus": "p1",
          "aqicn": 20,
          "maincn": "p1",
          "p1": {
            "conc": 20,
            "aqius": 18,
            "aqicn": 20
          }
        },
      …  // contains more pollution historical data for past 48 hours

      ]
    },
    "units": { //object containing units information
      "p2": "ugm3", //pm2.5
      "p1": "ugm3", //pm10
      "o3": "ppb", //Ozone O3
      "n2": "ppb", //Nitrogen dioxide NO2 
      "s2": "ppb", //Sulfur dioxide SO2 
      "co": "ppm" //Carbon monoxide CO 
    }
  }
}
*/



