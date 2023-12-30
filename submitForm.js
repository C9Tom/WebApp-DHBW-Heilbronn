// Funktion zum Verarbeiten des Formulars und Übergeben der IP-Adresse an die getIPInfo-Funktion
function submitForm(event) {
  // Verhindere das Standardverhalten des Formulars (Seitenneuladen)
  event.preventDefault();

  // Greife auf das Eingabefeld für die IP-Adresse zu
  var ipAddressInput = document.getElementById("ipAddressInput").value;

  // Rufe die getIPInfo-Funktion mit der eingegebenen IP-Adresse auf
  getIPInfo(ipAddressInput);

  // Zeige den ipInfoContainer an und verberge den submitFormContainer
  document.getElementById("ipInfoContainer").style.display = "block";
  document.getElementById("submitFormContainer").style.display = "none";
}

// Die Funktion submitForm wird aufgerufen, wenn das Formular abgeschickt wird. 
// Sie verhindert das Standardverhalten des Formulars, liest die eingegebene IP-Adresse aus 
// dem Eingabefeld und ruft dann die Funktion getIPInfo auf, um Informationen zur IP-Adresse abzurufen.
// Anschließend wird der ipInfoContainer angezeigt und der submitFormContainer versteckt.
