
// script.js
document.addEventListener('DOMContentLoaded', function () {
    var navbarToggleBtn = document.querySelector('.navbar-toggler');
    var additionalLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
    // Verstecke die Links zu Beginn
    additionalLinks.forEach(function (link) {
      link.classList.add('d-none');
    });
  
    navbarToggleBtn.addEventListener('click', function () {
      // Zeige oder verstecke die Links beim Klicken auf den Toggle-Button
      additionalLinks.forEach(function (link) {
        link.classList.toggle('d-none');
      });
    });
  });
  