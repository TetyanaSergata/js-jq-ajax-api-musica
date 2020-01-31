// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.
$(document).ready(function() {
  var url = 'https://flynn.boolean.careers/exercises/api/array/music';

  // Chiamata Ajax
  $.ajax(
    {
      'url': url,
      'method': 'Get',
      'success': function(data) {
      console.log(data);
    },
    'error': function (request, state, errors) {
      alert('errore' + errors);
    }
  });
});
