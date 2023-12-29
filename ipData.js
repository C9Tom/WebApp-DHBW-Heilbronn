// Globale Variablen für Latitude und Longitude
var globalLatitude;
var globalLongitude;

// Funktion zum Abrufen der JSON-Daten mit einer optionalen IP-Adresse als Parameter
function getIPInfo(ipAddress) {
  // Erzeuge die URL basierend auf der übergebenen IP-Adresse oder verwende die Standard-URL
  var url = ipAddress ? `https://ipapi.co/${ipAddress}/json/` : "https://ipapi.co/json/";

  // Fetch verwenden, um die Daten abzurufen
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Speichere Latitude und Longitude in globalen Variablen
      globalLatitude = data.latitude;
      globalLongitude = data.longitude;

      // Funktion aufrufen, um die Daten anzuzeigen
      displayIPInfo(data);

      // Überprüfe, ob Latitude und Longitude definiert sind, bevor getWeatherInfo aufgerufen wird
      if (globalLatitude !== undefined && globalLongitude !== undefined) {
        getWeatherInfo();
      } else {
        console.error("Latitude und/oder Longitude sind nicht definiert.");
      }
    })
    .catch((error) => {
      console.error("Fehler beim Abrufen der Daten:", error);
    });
}

// Funktion zum Anzeigen der JSON-Daten auf der Webseite
function displayIPInfo(data) {
  // Element mit der ID "ipInfo" auswählen
  var ipInfoElement = document.getElementById("ipInfo");
  // HTML-Code für die Anzeige erstellen
  var html = "<p><strong>IPv6-Adresse:</strong> " + data.ip + "</p>";
// Dropdown-Menü hinzufügen
html += "<p><div class='dropdown'>";
html += "<button onclick='toggleDropdown()' class='dropbtn'><strong>City:</strong> " + data.city + "</button>";
html += "<div id='cityDropdown' class='dropdown-content'>";
html += "<a href='' onclick='toggleWeather(event)'>Weather</a>";
html += "<a>Postal Code: " + data.postal + "</a>";
html += "</div>";
html += "</div></p>";
  html += "<p><strong>Region:</strong> " + data.region + "</p>";
  html += "<p><strong>Country:</strong> " + data.country_name + "</p>";
  html += "<p><strong>Capital:</strong> " + data.country_capital + "</p>";
  html += "<p><strong>Population:</strong> " + data.country_population + "</p>";
  html += "<p><strong>Continent Code:</strong> " + data.continent_code + "</p>";
  html += "<p><strong>In EU:</strong> " + data.in_eu + "</p>";
  html += "<p><strong>Latitude:</strong> " + data.latitude + "</p>";
  html += "<p><strong>Longitude:</strong> " + data.longitude + "</p>";
  html += "<p><strong>Timezone:</strong> " + data.timezone + "</p>";
  html += "<p><strong>UTC Offset:</strong> " + data.utc_offset + "</p>";
  html += "<p><strong>Country code:</strong> " + data.country_calling_code + "</p>";
  html += "<p><strong>Currency:</strong> " + data.currency + "</p>";
  html += "<p><strong>Name of currency:</strong> " + data.currency_name + "</p>";
  html += "<p><strong>Languages:</strong> " + data.languages + "</p>";
  html += "<p><strong>Organization:</strong> " + data.org + "</p>";
  // HTML-Code in das Element einfügen
  ipInfoElement.innerHTML = html;
}
// Funktion zum Anzeigen des Dropdown-Inhalts
function toggleDropdown() {
  var dropdown = document.getElementById("cityDropdown");
  dropdown.classList.toggle("show");
}
// Funktion zum Anzeigen des Modal
function toggleWeather(event) {
  event.preventDefault();
  var modal = document.getElementById('weatherModal');
  modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';

  if (modal.style.display == 'block'){
    getWeatherInfo();
  }
}

// Funktion zum Schließen des Modals
function closeWeatherModal() {
  document.getElementById('weatherModal').style.display = 'none';
  // Schließe auch das Dropdown-Menü, wenn es geöffnet ist
  var dropdown = document.getElementById("cityDropdown");
  if (dropdown.classList.contains('show')) {
    dropdown.classList.remove('show');
  }
}

// Funktion zum Öffnen des Modals
function openWeatherOverlay() {
  // Hier können Sie zusätzliche Aktionen hinzufügen, wenn das Modal geöffnet wird
  toggleWeather();
}
// Funktion aufrufen, um die JSON-Daten abzurufen
getIPInfo();
