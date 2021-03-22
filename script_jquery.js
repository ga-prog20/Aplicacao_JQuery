$(function(){
    $('#azul').click(() => {
            $('p').css("color", "blue")
           .fadeOut(2000)
           .fadeIn('fast');
        });
    $('#vermelho').click(() => {
            $('p').css("background-color", "red");
            $('#mensagem')
            .text("Cor alterada com sucesso")
            .css({color:'red', border:'1px solid red'})     
            .delay(3000)
            .fadeOut('fast')
            .addClass('green')
            
             $('button').removeClass('red');

        });
        $(function(){
            
            $('#l1').click(() => {
                $('#i1').show();
                $('#i2').hide();
                $('#i3').hide();
                $('#i4').hide();
            });
            
            $('#l2').click(() => {
                $('#i1').hide();
                $('#i2').show();
                $('#i3').hide();
                $('#i4').hide();

            });
            $('#l3').click(() => {
                $('#i1').hide();
                $('#i2').hide();
                $('#i3').show();
                $('#i4').hide();
            });
            $('#l4').click(() => {
                $('#i1').hide();
                $('#i2').hide();
                $('#i3').hide();
                $('#i4').show();
            });

        });
    
});