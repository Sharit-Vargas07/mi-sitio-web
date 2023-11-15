var stars = document.querySelectorAll('star');

stars.foreach(function(star) {
 star.addEventListener('click', function() {
 // Si la estrella ya está seleccionada, deseleccionar todas las estrellas
 if (star.classList.contains('selected')) {
   stars.foreach(function(star) {
     star.classList.remove('selected');
   });
 } else {
   // Si la estrella no está seleccionada, seleccionar todas las estrellas hasta esta
   var value = star.getAttribute('data-value');
   stars.foreach(function(star) {
     if (star.getAttribute('data-value') <= value) {
       star.classList.add('selected');
     } else {
       star.classList.remove('selected');
     }
   });
 }
 });
});

