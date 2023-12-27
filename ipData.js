// Globale Variablen für Latitude und Longitude
var globalLatitude;
var globalLongitude;

// Funktion zum Abrufen der JSON-Daten
function getIPInfo() {
  // URL für die JSON-Daten
  var url = "https://ipapi.co/json/";

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
  var html = "<p><strong>IP-Adresse:</strong> " + data.ip + "</p>";
// Dropdown-Menü hinzufügen
html += "<div class='dropdown'>";
html += "<button onclick='toggleDropdown()' class='dropbtn'>Stadt: " + data.city + "</button>";
html += "<div id='cityDropdown' class='dropdown-content'>";
html += "<a href='' onclick='toggleWeather()'>Weather</a>";
html += "<a href=''>Postal Code: " + data.postal + "</a>";
html += "</div>";
html += "</div>";
  html += "<p><strong>Region:</strong> " + data.region + "</p>";
  html += "<p><strong>Land:</strong> " + data.country_name + "</p>";
  html += "<p><strong>Land Hauptstadt:</strong> " + data.country_capital + "</p>";
  html += "<p><strong>Land Bevölkerung:</strong> " + data.country_population + "</p>";
  html += "<p><strong>Kontinent Code:</strong> " + data.continent_code + "</p>";
  html += "<p><strong>In EU:</strong> " + data.in_eu + "</p>";
  html += "<p><strong>Postleitzahl:</strong> " + data.postal + "</p>";
  html += "<p><strong>Latitude:</strong> " + data.latitude + "</p>";
  html += "<p><strong>Longitude:</strong> " + data.longitude + "</p>";
  html += "<p><strong>Zeitzone:</strong> " + data.timezone + "</p>";
  html += "<p><strong>UTC Offset:</strong> " + data.utc_offset + "</p>";
  html += "<p><strong>Landesvorwahl:</strong> " + data.country_calling_code + "</p>";
  html += "<p><strong>Währung:</strong> " + data.currency + "</p>";
  html += "<p><strong>Währungsname:</strong> " + data.currency_name + "</p>";
  html += "<p><strong>Sprachen:</strong> " + data.languages + "</p>";
  html += "<p><strong>Organisation:</strong> " + data.org + "</p>";
  // HTML-Code in das Element einfügen
  ipInfoElement.innerHTML = html;
}
// Funktion zum Anzeigen des Dropdown-Inhalts
function toggleDropdown() {
  var dropdown = document.getElementById("cityDropdown");
  dropdown.classList.toggle("show");
}
function toggleWeather() {
  getWeatherInfo(); // Die Wetterdaten abrufen
  openWeatherOverlay(); // Das Overlay öffnen
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// Funktion aufrufen, um die JSON-Daten abzurufen
getIPInfo();
