function validateEmail() {
  fetch('https://api.emailvalidation.io/v1/info?apikey=ema_live_ofh534E68GDclPMzdp70Gltfwr45BhrMWfxe8Xaf&email=tomplieninger1%40web.de')
  .then((response) => response.json())
  .then((data) => {
      console.clear();
      console.log(data);
      createResultCards(data); //zur besseren Übersicht in andere Funktion - könnte aber auch zukünftig weitere fetch Abfragen geben, die Drinks zurückliefern und gerendered werden müssen

  });
}
