$(function() {
  "use strict";

  $(".buy-now").on('click', function(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    Swal.fire(
      'Commande enregistrée',
      'Nous allons vous contacter bientôt pour confirmer votre commande.',
      'success'
    )
  });

});