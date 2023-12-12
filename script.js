// script.js

$(document).ready(function () {
    $('#emailForm').submit(function (e) {
      e.preventDefault();
  
      var apiKey = 'ema_live_ofh534E68GDclPMzdp70Gltfwr45BhrMWfxe8Xaf';
      var email = $('#emailInput').val();
  
      $.ajax({
        type: 'GET',
        url: 'https://api.emailvalidation.io/verify',
        data: { apiKey: apiKey, email: email },
        success: function (response) {
          // Verarbeite die API-Antwort hier
          console.log(response);
  
          // Beispiel: Zeige das Ergebnis auf der Website an
          $('#result').text('Ergebnis: ' + response.result);
        },
        error: function (error) {
          console.log('Fehler bei der API-Anfrage: ' + JSON.stringify(error));
        }
      });
    });
  });
  