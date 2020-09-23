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

    var cliked;
    btnDarkmode()
    function btnDarkmode(){
        cliked = false;
        $('.button').click(function(){
            if(cliked == false){
                $('.cicle').css('margin-left','35px');
                $('.cicle').css('transition','0.5s');
                cliked = true;  
            }else{
                cliked = false;
                $('.cicle').css('margin-left','0px');
            }
                
            
            
        })
    }
});