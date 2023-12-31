// Funktion zum Verarbeiten des Formulars und Übergeben der IP-Adresse an die getIPInfo-Funktion
function submitForm(event) {
  // Verhindere das Standardverhalten des Formulars (Seitenneuladen)
  event.preventDefault();

  // Greife auf das Eingabefeld für die IP-Adresse zu
  var ipAddressInput = document.getElementById("ipAddressInput").value.trim();

  // Überprüfe, ob die eingegebene IP-Adresse eine gültige IPv4 oder IPv6 Adresse ist
  if (isValidIPAddress(ipAddressInput)) {
    // Rufe die getIPInfo-Funktion mit der eingegebenen IP-Adresse auf
    getIPInfo(ipAddressInput);

    // Zeige den ipInfoContainer an und verberge den submitFormContainer
    document.getElementById("ipInfoContainer").style.display = "block";
    document.getElementById("submitFormContainer").style.display = "none";
  } else {
    // Zeige das Error-Modal mit der entsprechenden Fehlermeldung
    var errorMessage = "Please enter a valid IPv4 or IPv6 address.";
    displayErrorModal(errorMessage);
  }
}

// Funktion zur Überprüfung, ob die eingegebene Zeichenkette eine gültige IPv4 oder IPv6 Adresse ist
function isValidIPAddress(ipAddress) {
  // Hier kannst du eine umfassendere Überprüfung hinzufügen
  // Beispiel: Rückgabe einer Boolean-Wert basierend auf einer regulären Ausdruck Überprüfung
  var ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
  var ipv6Pattern = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;

  return ipv4Pattern.test(ipAddress) || ipv6Pattern.test(ipAddress);
}

// Funktion zum Anzeigen des Error-Modals mit der übergebenen Fehlermeldung
function displayErrorModal(errorMessage) {
  // Setze die Fehlermeldung im Modal
  document.getElementById("errorMessage").innerHTML = errorMessage;

  // Zeige das Modal an
  var errorModal = document.getElementById("errorModal");
  errorModal.style.display = "block";

  // Schließe das Modal und lade die Seite neu, wenn der Benutzer es schließt
  var closeErrorModalButton = document.getElementsByClassName("close")[1];
  closeErrorModalButton.onclick = function () {
    errorModal.style.display = "none";
    location.reload();
  };
}



// Die Funktion submitForm wird aufgerufen, wenn das Formular abgeschickt wird. 
// Sie verhindert das Standardverhalten des Formulars, liest die eingegebene IP-Adresse aus 
// dem Eingabefeld und überprüft, ob die Angegebenen Daten auch wirklich eine IP-Adresse sind
// ruft dann die Funktion getIPInfo auf, um Informationen zur IP-Adresse abzurufen.
// Anschließend wird der ipInfoContainer angezeigt und der submitFormContainer versteckt.
