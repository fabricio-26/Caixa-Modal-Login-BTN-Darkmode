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

    voltarClose();
    function voltarClose(){
        $('.vlt').click(function(){
            $('.active-cadastro').fadeOut(1)
            $('input[type=button]').fadeIn()
        })
    }

    cadastrar();
    function cadastrar(){
        $('.cad').click(function(){
            $('.bg').fadeOut(000);
            $('.active-cadastro').fadeIn();

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
                $('body').css('background','white');
                $('.button').css('background','rgb(18, 18, 20)');
                
                cliked = true;  
            }else{
                cliked = false;
                $('.cicle').css('margin-left','0px');
                $('body').css('background','rgb(18, 18, 20)');
                $('.button').css('background','#ccc');
            }
                
            
            
        })
    }
});