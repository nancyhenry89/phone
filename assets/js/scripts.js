$(document).ready(function(){
    $('.popup-title').click(function(){
        $(this).siblings('.popup-cont').fadeIn();
        });
        $('.close').click(function(){
            $(this).parents('.popup-cont').fadeOut();
            });


            $('.color').click(function(){
                    var img=$(this).attr('id');
                    $('.color').removeClass('selected');
                $(this).addClass('selected');
                $(this).parents('.colors').siblings('.pic').find('img').attr("src","assets/imgs/"+img+".png")
                });
});