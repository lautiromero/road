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
        $('.second-sec').css('background-color','#0e8781');
        
    });

    $('.services-list a').mouseleave(function(){
        $('.second-sec').css('background-color','#171717');
    })


});