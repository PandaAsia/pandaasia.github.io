$(document).ready(function(){
    var imgItems = $('.slider li').length;
    var imgPos;
    for(i = 1; i <= imgItems; i++){
		$('.paginacion').append('<li><span class="fa fa-circle"></span></li>');
    } 
    
    $('.slider li').hide(); // Ocultanos todos los slides
	$('.slider li:first').show(); // Mostramos el primer slide
    $('.pagination li:first').css({'color': '#CD6E2E'}); // Damos estilos al primer item de la paginacion
    
    $('.paginacion li').click(pagination);

    setInterval(function(){
		nextSlider();
    }, 4000);

    function pagination(){
		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado

		// Dandole estilos a la paginacion seleccionada
		$('.pagination li').css({'color': '#858585'});
		$(this).css({'color': '#CD6E2E'});

		imgPos = paginationPos;

	}
    
    function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado

	}
});