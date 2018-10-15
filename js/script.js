"use strict"

$(document).ready(function(){

    $('.nav-item').on('click', function(){
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    });
   
    // Effet apparition texte lettre par lettre
    // Trim enlève les espaces au début et à la fin
    // de la chaine

    var word = $('#display').text().trim();

    // On vide la div qui contient le mot
    $('#display').text('');

    // Parcourir les lettres du mot
    for (let i = 0 ; i < word.length; i++) {
        setTimeout(function() {
            $('#display').append(word[i]);
        }, 300 * i);
    }

});