// Funktion zum Abrufen der Wetterdaten basierend auf globalen Koordinaten
function getWeatherInfo() {
  // URL für die JSON-Daten
  var url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + globalLatitude + '&lon=' + globalLongitude + '&appid=694dee5528dec74b53bfe0d732504cda&units=metric';

  // Fetch verwenden, um die Daten abzurufen
  fetch(url)
      .then(response => response.json())
      .then(data => {
          // Funktion aufrufen, um die erhaltenen Daten anzuzeigen
          displayWeatherInfo(data);
      })
      .catch(error => {
          console.error('Fehler beim Abrufen der Daten:', error);
      });
}

// Funktion zum Anzeigen der Wetterdaten auf der Webseite
function displayWeatherInfo(data) {
  // Element mit der ID "weatherInfo" auswählen
  var weatherInfoElement = document.getElementById('weatherInfo');

  // HTML-Code für die Anzeige erstellen
  var html = '<p><strong>Weather:</strong> ' + data.weather[0].main + ' - ' + data.weather[0].description + '</p>';
  html += '<p><strong>Temperature:</strong> ' + data.main.temp + '°C</p>';
  html += '<p><strong>Perceived temperature:</strong> ' + data.main.feels_like + '°C</p>';
  html += '<p><strong>Air pressure:</strong> ' + data.main.pressure + ' hPa</p>';
  html += '<p><strong>Humidity:</strong> ' + data.main.humidity + '%</p>';
  html += '<p><strong>Visibility:</strong> ' + data.visibility + ' Meter</p>';
  html += '<p><strong>Wind speed:</strong> ' + data.wind.speed + ' m/s</p>';
  html += '<p><strong>Rain (1h):</strong> ' + (data.rain ? data.rain['1h'] : 'N/A') + ' mm</p>';
  html += '<p><strong>Cloudiness:</strong> ' + data.clouds.all + '%</p>';
  html += '<p><strong>Timezone:</strong> ' + data.timezone + '</p>';
  html += '<p><strong>City:</strong> ' + data.name + '</p>';

  // HTML-Code in das weatherInfoElement einfügen
  weatherInfoElement.innerHTML = html;
}

// Funktion aufrufen, um die Wetterdaten abzurufen
getWeatherInfo();

//Die Funktion getWeatherInfo ruft Wetterdaten von der 
//OpenWeatherMap-API ab, basierend auf den globalen Koordinaten. Die Funktion 
//displayWeatherInfo zeigt die empfangenen Wetterdaten auf der Webseite an. 
//Schließlich wird die Funktion getWeatherInfo aufgerufen, um die Wetterdaten 
//abzurufen und anzuzeigen.





