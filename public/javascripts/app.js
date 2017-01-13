$(function() {
    $.ajax({
        url: "http://ip-api.com/json"
    })
        .done(function (data) {

        var city = data.city,
        country = data.country,
        latitude = data.lat,
        longitude = data.lon,
        key = "fdf1425d366ca66c85b84ef54ec7e69e";

        $.ajax({
            url: "https://api.darksky.net/forecast/" + key + "/" + latitude + "," + longitude,
            crossDomain: true,
            dataType: "jsonp"
        })
            .done(function (d) {

            var latitude = d.latitude,
            longitude = d.longitude,
            city = d.timezone.split('/')[1],
            temperatureF = Math.round(d.currently.temperature) + "°F",
            temperatureC = Math.round((d.currently.temperature - 32) * (5 / 9)) + "°C",
            summary = d.currently.summary,
            mondayTemp = d.daily.data[0].apparentTemperatureMax,
            humidity = d.currently.humidity * 100 + "%";

            $(".city").text(city);
            $(".summary").text(summary);
            $(".temp-F").text(temperatureF);
            $(".temp-C").text(temperatureC);
        });
    });
});
