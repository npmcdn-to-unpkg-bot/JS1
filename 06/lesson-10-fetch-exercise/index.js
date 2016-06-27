/**
 * Your forecast.io key is available as the global variable:

process.env.FORECAST_KEY

 *
 */

/**
 * We include this line to ensure `fetch()` is ready to use in node
 */
require('isomorphic-fetch');

/*
TASK 1: Google maps

var suburb = "Paddington"
var url = `http://maps.googleapis.com/maps/api/geocode/json?address=${suburb}`

fetch(url).then((response) => {
	return response.json()
}).then((dataAsJson) => {
	console.log(dataAsJson)
})
*/

/*
TASK 2: Forecast api

var location = {
	name: "Sydney",
	latitude: "-33.8688197",
	longitude: "151.2092955"
}

var url = `https://api.forecast.io/forecast/${process.env.FORECAST_KEY}/${location.latitude},${location.longitude}`

console.log(url)

fetch(url).then((response) => {
	return response.json()
}).then((dataAsJson) => {
	console.log(dataAsJson)
})
*/

//TASK 1 & 2 COMBINED:

var name = "Sydney"

var googleMapsUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${name}`

fetch(googleMapsUrl).then((response) => {
	return response.json()
}).then((dataAsJson) => {
	return dataAsJson.results[0].geometry.location
}).then((location) => {
	var forecastUrl = `https://api.forecast.io/forecast/${process.env.FORECAST_KEY}/${location.lat},${location.lng}?units=si`
	fetch(forecastUrl).then((response) => {
		return response.json()
	}).then((dataAsJson) => {
		console.log(`At ${name} (${location.lat}, ${location.lng}) the weather is ${dataAsJson.currently.summary} and the temperature is ${dataAsJson.currently.temperature} degrees Celcius.`)
	})
})