$(document).ready(function(){
    $('.font-white').hover(
        function(){
            $(this).children('.en').stop().fadeIn();
            $(this).children('.zh').stop().fadeOut();
        },
        function(){
            $(this).children('.en').stop().fadeOut();
            $(this).children('.zh').stop().fadeIn();
        }
    );
});
    // $('.font-white').mouseleave(function(){
    //     $('.font-white').fadeToggle(function(){
    //         $('.en').css('display','none');
    //         $('.zh').css('display','block');
    //     });
    // });
