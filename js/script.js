let lon;
let lat;
let temperature = document.getElementById("temp");
let loc = document.getElementById("location");
let country = document.getElementById("country")

const kelvin = 273;

window.addEventListener("load", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            const api = ""
            const base = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
            `lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df`

            fetch(base)
            .then((response) => {
                console.log(base)
                return response.json();
            })
            .then((data) => {
                console.log(data);
                temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
                loc.textContent = data.name;
                country.textContent = data.sys.country;
            });
        });
    }
});