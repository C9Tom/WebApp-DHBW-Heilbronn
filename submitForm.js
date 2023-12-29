// Funktion zum Verarbeiten des Formulars und Übergeben der IP-Adresse an die getIPInfo-Funktion
function submitForm(event) {
  event.preventDefault();
  var ipAddressInput = document.getElementById("ipAddressInput").value;
  getIPInfo(ipAddressInput);

// Zeige den ipInfoContainer und verberge den submitFormContainer
document.getElementById("ipInfoContainer").style.display = "block";
document.getElementById("submitFormContainer").style.display = "none";

}
