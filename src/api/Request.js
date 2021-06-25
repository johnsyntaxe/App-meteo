export default {
  /*Call current weather data for one location*/
  location(route, api_key, city) {
    return this.request('current', route, api_key, city);
  },

  /*forecast weather data*/
  forecast(route, api_key, dataGeolocalisation) {
    return this.request('forecast', route, api_key, dataGeolocalisation);
  },
  request(option, route, api_key, data) {
    let url = '';
    if (option === 'current') {
      url = route + data + api_key;
    } else {
      url = route + data.latitude + '&lon=' + data.longitude + api_key;
    }
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(responseData => {
          resolve(responseData);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
};
