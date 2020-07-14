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

    $('.port-box img')
    .hover(function(){
        $(this).css('transform','translate3d(0,-15px,0)');
    })
    .mouseleave(function(){
        $(this).css('transform','translate3d(0,0,0)');
    })



    //Creamos un evento click para el enlace
    $(".ancla").click(function(evento){
      //Anulamos la funcionalidad por defecto del evento
      evento.preventDefault();
      //Creamos el string del enlace ancla
      var codigo = "#" + $(this).data("ancla");
      //Funcionalidad de scroll lento para el enlace ancla en 3 segundos
      console.log(codigo)
      $("html,body").animate({scrollTop: $(codigo).offset().top}, 2000);
    });

    //Menu mobile
    var toggleButton = document.querySelector('.toggle-menu');
    var navBar = document.querySelector('.nav-bar');
    toggleButton.addEventListener('click', function () {
        navBar.classList.toggle('toggle');
    });

    $('.nav-link').on('click', function(){
        navBar.classList.toggle('toggle');
    })
    // $('#myVideo').on("play", function() {
    //     $(".loader-page").css({visibility:"hidden",opacity:"0"}) 
    // });
    //$('#myVideo-m').on("play", function() {
        $(".loader-page").css({visibility:"hidden",opacity:"0"}) 
   // });
});


$("#contacto-form").submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');
    
    $.ajax({
           type: "POST",
           url: url,
           data: form.serialize(), // serializes the form's elements.
           beforeSend: function(  ) {
            $('#contacto-form').hide();
            $('.respuesta').css('display','flex');
            $(".loader-page").css({visibility:"visible",opacity:"1"}) 
           },
           success: function(data)
           {
               $('.respuesta').text(data);
               $(".loader-page").css({visibility:"hidden",opacity:"0"}) 
           }
         });

    
});
