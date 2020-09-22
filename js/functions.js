$(function(){

    $('input[type=button]').click(function(){
        $('input[type=button]').fadeOut(1)
        $('.bg').fadeIn() 
    })

    botaoDeFecharClose();
    function botaoDeFecharClose(){
        $('.btn-close').click(function(){
            $('.bg').fadeOut(1)
            $('input[type=button]').fadeIn()
        })
    }
});