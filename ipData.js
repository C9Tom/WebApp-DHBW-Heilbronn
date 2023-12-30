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
  var ipAddressLabel = data.ip.includes(":") ? "IPv6-Adresse" : "IPv4-Adresse";
  var html = "<p><strong>" + ipAddressLabel + ":</strong> " + data.ip + "</p>";
  // Dropdown-Menü hinzufügen
  html += "<p><div class='dropdown'>";
  html += "<button onclick='toggleDropdown()' class='dropbtn'><strong>City:</strong> " + data.city + "</button>";
  html += "<div id='cityDropdown' class='dropdown-content'>";
  html += "<a href='' onclick='toggleWeather(event)'>Weather</a>";
  html += "<a href='https://www.google.com/search?q=Postal Code " + data.postal + "'>Postal Code: " + data.postal + "</a>";
  html += "</div>";
  html += "</div></p>";
  html += "<p><strong>Region:</strong> <a href='https://en.wikipedia.org/wiki/" + data.region + "'>" + data.region + "</a></p>";
  html += "<p><strong>Country:</strong> <a href='https://en.wikipedia.org/wiki/" + data.country_name + "'>" + data.country_name + "</a></p>";
  html += "<p><strong>Capital:</strong> <a href='https://en.wikipedia.org/wiki/" + data.country_capital + "'>" + data.country_capital + "</a></p>";
  html += "<p><strong>Population:</strong> <a href='https://en.wikipedia.org/wiki/Demographics_of_" + data.country_name + "'>" + data.country_population + "</a></p>";
  html += "<p><strong>Continent Code:</strong> <a href='https://en.wikipedia.org/wiki/" + data.continent_code + "'>" + data.continent_code + "</a></p>";
  html += "<p><strong>In EU:</strong> <a href='https://en.wikipedia.org/wiki/European_Union" + "'>" + data.in_eu + "</a></p>";
  html += "<p><strong>Latitude:</strong> <a>" + data.latitude + "</a></p>";
  html += "<p><strong>Longitude:</strong> <a>" + data.longitude + "</a></p>";
  html += "<p><strong>Timezone:</strong> <a href='https://en.wikipedia.org/wiki/" + data.timezone + "'>" + data.timezone + "</a></p>";
  html += "<p><strong>UTC Offset:</strong> <a href='https://en.wikipedia.org/wiki/" + data.timezone + "'>" + data.utc_offset + "</a></p>";
  html += "<p><strong>Country code:</strong> <a href='https://en.wikipedia.org/wiki/" + data.country_calling_code + "'>" + data.country_calling_code + "</a></p>";
  html += "<p><strong>Currency:</strong> <a href='https://en.wikipedia.org/wiki/" + data.currency + "'>" + data.currency + "</a></p>";
  html += "<p><strong>Name of currency:</strong> <a href='https://en.wikipedia.org/wiki/" + data.currency_name + "'>" + data.currency_name + "</a></p>";
  html += "<p><strong>Languages:</strong> <a href='https://en.wikipedia.org/wiki/" + data.languages + "'>" + data.languages + "</a></p>";
  html += "<p><strong>Organization:</strong> <a href='https://www.google.com/search?q=" + data.org + "'>" + data.org + "</a></p>";

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

  if (modal.style.display == 'block') {
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
