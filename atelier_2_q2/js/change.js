$(document).ready(function () {
   var i = 0;
   var j = 0;
   $('button').on('click', function () {
      var name = $(this).prop("name");
      var name_selected = "[name='" + name + "']";
      if (name != 'corriger') {
         $(this).addClass('check');
         $(this).addClass('bg-dark');
         j++;
         jQuery(name_selected).each(function () {
            if ($(this).hasClass('bg-orange')) {
               $(this).removeClass('bg-orange')
            }
            $(this).prop('disabled', true);
         });
      }
   });
   /* ----------------------------------------------------------------------------------------- */
   $('#corriger').on('click', function () {

      jQuery('button').each(function () {
         if ($(this).prop("name") != 'corriger') {
            var locate = "[name='" + $(this).prop("name") + "']";
            if ($(".wrong_2" + locate).hasClass("check") && j == 5) {
               $('.wrong_2' + locate).addClass('bg-danger');
               $('.right' + locate).addClass('bg-success');
               $('.wrong_2' + locate).removeClass('bg-dark');
            }
            if ($(".wrong_1" + locate).hasClass("check") && j == 5) {
               $('.wrong_1' + locate).addClass('bg-danger');
               $('.right' + locate).addClass('bg-success');
               $('.wrong_1' + locate).removeClass('bg-dark');
            }
            if ($(".right" + locate).hasClass("check") && j == 5) {
               i++;
               $('.right' + locate).addClass('bg-success');
               $('.right' + locate).removeClass('bg-dark');
            }
            if (!$(".right" + locate).hasClass("check") && !$(".wrong_1" + locate).hasClass("check") && !$(".wrong_2" + locate).hasClass("check")) {
               $('.right' + locate).addClass('bg-orange');
               $('.wrong_1' + locate).addClass('bg-orange');
               $('.wrong_2' + locate).addClass('bg-orange');
            }
            $('.right' + locate).addClass('color');
            $('.wrong_1' + locate).addClass('color');
            $('.wrong_2' + locate).addClass('color');
         }
      });
      i = i / 3;
      if (j == 5 && i <= 5) {
         $('#resultat').text(i + "/5");
         j = -1;
         $('#resultat').css({
            'color': 'black'
         });
      } else if (j == -1) {
         $('#resultat').text("Vous avez terminer le qcm");
         $('#resultat').css({
            'color': 'black'
         })
      } else {
         $('#resultat').text("Esseyer de repondre a tout les questions");
         $('#resultat').css({
            'color': 'red'
         })
      }
   });
});