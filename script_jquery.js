$(function(){
    $('#azul').click(() => {
            $('p').css("color", "blue");
            $('p').fadeOut();
            $('p').delay(1000);
            $('p').fadeIn('slow');
        });
    $('#vermelho').click(() => {
            $('p').css("color", "red");
            $('p').fadeOut();
            $('p').delay(1000);
            $('p').fadeIn('slow');
        });
    
});