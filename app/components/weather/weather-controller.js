(function () {

        var wc = this;
        var weatherService = new WeatherService();

        weatherService.getWeather(function (res) {
         weather = JSON.parse(res)
                console.log(weather)
                lookOutWindow(weather)
                console.log(weather)
        })
        function lookOutWindow(weather) {
                var icon = 'https://openweathermap.org/img/w/' + weather.weather[0].icon + '.png';
                var place = weather.name
                var ferTemp = parseInt(weather.main.temp)
                var condition = weather.weather[0].description
                var celTemp = Math.floor((ferTemp - 32) * ( 5 / 9))
                console.log(place, celTemp, ferTemp, condition)
                var template = $('#weather').html();
                var template = template
                        .replace('{{boise}}', place)
                        .replace('{{tempf}}', ferTemp)
                        .replace('{{tempc}}', celTemp)
                        .replace('{{sky}}', condition)
                        .replace('{{cloudy}}', icon)

                $('#weather').empty().append($(template));
                console.log(template)
        }




} ())
