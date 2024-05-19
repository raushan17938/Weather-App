const apiKey = '848d07fee58235aa365e17f4933688f2'; // Replace with your API key
const searchButton = document.getElementById('search');
const locationInput = document.getElementById('location');
const cityName = document.getElementById('city-name');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            cityName.textContent = data.name;
            temperature.textContent = `${data.main.temp}°C`;
            description.textContent = data.weather[0].description;
            weatherIcon.style.backgroundImage = `url('http://openweathermap.org/img/w/${data.weather[0].icon}.png')`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});
