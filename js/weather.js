const API_KEY = "1c902498279962586b644e2ae5de1918";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city= document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / 현제기온 섭씨 ${data.main.temp}도`;
    });
}
function onGeoError() {
    alert("Can't Find you. No Weather For You")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);