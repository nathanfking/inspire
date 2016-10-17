
function WeatherService() {
	var url = 'http://bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&units=imperial&APPID=bd82255fd0a21fa1238699b9eda2ee35'
	var apiUrl = url + encodeURIComponent(url2);


	this.getWeather = function (callWhenDone) {
		return $.get(apiUrl, function (res) {
			callWhenDone(res)
			console.log(res)
		})
	}
}