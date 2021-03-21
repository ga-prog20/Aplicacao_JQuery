$(function(){
    $('#azul').click(() => {
            $('p').css("color", "blue");
            $('p').fadeOut(2000);
            $('p').fadeIn('fast');
        });
    $('#vermelho').click(() => {
            $('p').css("color", "red");
            $('p').fadeOut(3000);
            $('p').fadeIn(5000);
        });
    
});