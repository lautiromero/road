$( document ).ready(function() {
    $('.services-list a')
    .hover(function(){
        $(this).css('transform','translate3d(25px,0,0)');
    })
    .mouseleave(function(){
        $(this).css('transform','translate3d(0,0,0)');
    })

    $('#s-web')
    .hover(function(){
        $('.second-sec').css('background-color','#354753');
        $('#web-ss').css('display','flex');  
    });
    $('#s-ec')
    .hover(function(){
        $('.second-sec').css('background-color','#0e8781');
        $('#ec-ss').css('display','flex');      
    });
    $('#s-so')
    .hover(function(){
        $('.second-sec').css('background-color','#a5184e');
        $('#so-ss').css('display','flex');      
    });
    $('#s-di')
    .hover(function(){
        $('.second-sec').css('background-color','#966e6a');
        $('#di-ss').css('display','flex');      
    });
    $('#s-vid')
    .hover(function(){
        $('.second-sec').css('background-color','#6f91b4');
        $('#vid-ss').css('display','flex');      
    });
    $('#s-bra')
    .hover(function(){
        $('.second-sec').css('background-color','#0e8781');
        $('#bra-ss').css('display','flex');      
    });

    $('.services-list a').mouseleave(function(){
        $('.second-sec').css('background-color','#171717');
        $('.service-box').css('display','none')
    })



});