$(document).ready(function() {
	var banderaContraer=0;
	/*$(document).on('click','#contraer',function(){
		console.log("contraer");
	});*/	
	$(document).on('click', '#contraer', function(){
		ocultarSliderbar();
	});
	$(document).on('click', '#expandir', function(){
		mostrarSliderbar();
	});

}); 