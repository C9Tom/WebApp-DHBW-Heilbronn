// Funktion zum Abrufen der JSON-Daten
function getWeatherInfo() {
  // URL für die JSON-Daten
  var url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + globalLatitude + '&lon=' + globalLongitude + '&appid=APIKEY&units=metric';

  // Fetch verwenden, um die Daten abzurufen
  fetch(url)
      .then(response => response.json())
      .then(data => {
          // Funktion aufrufen, um die Daten anzuzeigen
          displayWeatherInfo(data);
      })
      .catch(error => {
          console.error('Fehler beim Abrufen der Daten:', error);
      });
    }

// Funktion zum Anzeigen der JSON-Daten auf der Webseite
function displayWeatherInfo(data) {
  // Element mit der ID "weatherInfo" auswählen
  var weatherInfoElement = document.getElementById('weatherInfo');

  // HTML-Code für die Anzeige erstellen
  var html = '<p><strong>Wetter:</strong> ' + data.weather[0].main + ' - ' + data.weather[0].description + '</p>';
  html += '<p><strong>Temperatur:</strong> ' + data.main.temp + '°C</p>';
  html += '<p><strong>Gefühlt wie:</strong> ' + data.main.feels_like + '°C</p>';
  html += '<p><strong>Luftdruck:</strong> ' + data.main.pressure + ' hPa</p>';
  html += '<p><strong>Luftfeuchtigkeit:</strong> ' + data.main.humidity + '%</p>';
  html += '<p><strong>Sichtweite:</strong> ' + data.visibility + ' Meter</p>';
  html += '<p><strong>Windgeschwindigkeit:</strong> ' + data.wind.speed + ' m/s</p>';
  html += '<p><strong>Regen (1h):</strong> ' + (data.rain ? data.rain['1h'] : 'N/A') + ' mm</p>';
  html += '<p><strong>Bewölkung:</strong> ' + data.clouds.all + '%</p>';
  html += '<p><strong>Zeitzone:</strong> ' + data.timezone + '</p>';
  html += '<p><strong>Stadt:</strong> ' + data.name + '</p>';

  var overlayHtml = '<div id="weatherOverlay" class="overlay">';
  overlayHtml += '<div class="overlay-content">';
  overlayHtml += '<span class="close" onclick="closeWeatherOverlay()">&times;</span>';
  overlayHtml += html;
  overlayHtml += '</div></div>';
// Element mit der ID "weatherInfo" auswählen
var weatherInfoElement = document.getElementById('weatherInfo');
// HTML-Code in das Element einfügen
weatherInfoElement.innerHTML = html + '<a href="#" onclick="toggleWeather()">Details anzeigen</a>' + overlayHtml;

  // Hier öffnen wir das Overlay, wenn die Wetterdaten angezeigt werden
  openWeatherOverlay();
}

// Funktion aufrufen, um die JSON-Daten abzurufen
getWeatherInfo();
