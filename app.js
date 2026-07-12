let lastWeather = "☁ -- °C";


function updateClock() {

    const now = new Date();


    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();


    const secondAngle = seconds * 6;
    const minuteAngle = minutes * 6 + seconds * 0.1;
    const hourAngle = (hours % 12) * 30 + minutes * 0.5;


    document.querySelector(".second").style.transform =
        `rotate(${secondAngle}deg)`;


    document.querySelector(".minute").style.transform =
        `rotate(${minuteAngle}deg)`;


    document.querySelector(".hour").style.transform =
        `rotate(${hourAngle}deg)`;
}



function updateDate() {

    const now = new Date();


    const days = [
        "Sonntag",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag"
    ];


    const months = [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember"
    ];


    document.getElementById("weekday").textContent =
        days[now.getDay()];


    document.getElementById("date").textContent =
        `${now.getDate()}. ${months[now.getMonth()]} ${now.getFullYear()}`;
}




async function updateWeather() {

    try {

        const url =
        "https://api.open-meteo.com/v1/forecast?latitude=47.05&longitude=8.27&current_weather=true";


        const response = await fetch(url);


        const data = await response.json();


        const temp =
            Math.round(
                data.current_weather.temperature
            );


        const code =
            data.current_weather.weathercode;


        let icon = "☁";


        if (code === 0) {
            icon = "☀";
        }
        else if (code <= 3) {
            icon = "⛅";
        }
        else if (code >= 51 && code <= 67) {
            icon = "🌧";
        }
        else if (code >= 71 && code <= 77) {
            icon = "❄";
        }
        else if (code >= 80) {
            icon = "🌦";
        }


        lastWeather =
            `${icon} ${temp} °C`;


        document.getElementById("weather").textContent =
            lastWeather;

    }

    catch {

        document.getElementById("weather").textContent =
            lastWeather;

    }

}



setInterval(updateClock, 1000);

updateClock();

updateDate();

updateWeather();

setInterval(updateWeather, 600000);
