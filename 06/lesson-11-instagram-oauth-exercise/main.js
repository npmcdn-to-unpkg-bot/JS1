/**
 * Instagram OAuth Exercise
 * ====
 *
 * See the README.md for instructions
 */

(function() {

  var forecastBasUrl = 'https://crossorigin.me/https://api.forecast.io/forecast/'
  var instagramBasUrl = 'https://crossorigin.me/https://api.instagram.com/v1/'
  var container = document.querySelector('#container')
  var state = {
    accessToken: window.location.hash.split('=')[1] ? window.location.hash.split('=')[1] : false,
    recentMediaUrl: '',
    weatherDuringShot: ''
  }

  //var accessToken = window.location.hash.split('=')[1]

  if (false /* TODO: did user authorize? */) {
    renderLogin(state, container)
  } else {
    var userMediaUrl = `https://crossorigin.me/https://api.instagram.com/v1/users/self/media/recent/?access_token=${state.accessToken}`

    fetch(userMediaUrl).then((response) => {
      return response.json()
    }).then((dataAsJson) => {
      state.recentMediaUrl = dataAsJson.data[0].images.standard_resolution.url 

      var locationWeatherUrl = `https://crossorigin.me/https://api.forecast.io/forecast/API_KEY/${dataAsJson.data[0].location.latitude},${dataAsJson.data[0].location.longitude},${dataAsJson.data[0].created_time}`

      fetch(locationWeatherUrl).then((response) => {
        return response.json()
      }).then((dataAsJson) => {
        state.weatherDuringShot = dataAsJson.currently.summary
        renderImages(state, container)
      })
      
    })
  }

  function renderLogin(data, into) {
    into.innerHTML = `
      <h2>What was the weather when you snapped your shot?</h2>
      <form action="https://api.instagram.com/oauth/authorize/?client_id=a965a951fc3d4a38a4b607a0fafad38e&redirect_uri=http://localhost:3000&response_type=token" method="post">
        <button type="submit">Login to Instagram</button>
      </form>
    `
  }

  function renderImages(data, into) {
    into.innerHTML = `
      <h2>Hey, here's the weather during your shot!</h2>
      <div class="instaweather">
        <img src=${data.recentMediaUrl} />
        The weather was: ${state.weatherDuringShot}
      </div>
    `
  }
})()

