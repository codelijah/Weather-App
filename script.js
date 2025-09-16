const weatherTemp = document.querySelector('.temp');
const weatherCity = document.querySelector('.city');
const weatherHumidity = document.querySelector('.humidity');
const weatherWind = document.querySelector('.wind');
const searchBtn = document.querySelector('.search button');
const searchInput = document.querySelector('.search input');
const weatherIcon = document.querySelector('.weather-icon');
const errorMessage = document.querySelector('.error');
const weatherDisplay = document.querySelector('.weather');

const apiKey = 'bd86c14e60c463ac82be81960aaef1da';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

if (!response.ok) {
  errorMessage.style.display = 'block';
  weatherDisplay.style.display = 'none';
} else {
  async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    //   console.log(data);

    weatherTemp.textContent = data.main.temp + '°C';
    weatherCity.textContent = data.name;
    weatherHumidity.textContent = data.main.humidity + '%';
    weatherWind.textContent = data.wind.speed + ' km/h';

    if (data.weather[0].main === 'Clear') {
      weatherIcon.src = 'Images/clear.png';
    } else if (data.weather[0].main === 'Clouds') {
      weatherIcon.src = 'Images/clouds.png';
    } else if (data.weather[0].main === 'Drizzle') {
      weatherIcon.src = 'Images/drizzle.png';
    } else if (data.weather[0].main === 'Mist') {
      weatherIcon.src = 'Images/mist.png';
    } else if (data.weather[0].main === 'Rain') {
      weatherIcon.src = 'Images/rain.png';
    } else if (data.weather[0].main === 'Snow') {
      weatherIcon.src = 'Images/snow.png';
    }
    weatherDisplay.style.display = 'block';
    errorMessage.style.display = 'none';
  }
}
searchBtn.addEventListener('click', function () {
  checkWeather(searchInput.value);
});

searchInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') checkWeather(searchInput.value);
});
