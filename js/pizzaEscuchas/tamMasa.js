$(document).ready(function() {
	/*$(document).on('click', '#tamMasa', function(){
		seleccionarTamMasa();
	});
	$(document).on('click', '#circleLeft', function(){
		seleccionarTamMasa();
	});*/

	//CLICK
	$(document).on('click', '#botonTam', function(){
		mostrarMenuTam();
	});	
	$(document).on('click', '.tamanoMasa', function(){
		selecTamanoMasa(this.id);
	});
	$(document).on('click', '#botonMasa', function(){
		mostrarMenuMasa();
	});	
	$(document).on('click', '.tipoMasa', function(){
		selecTipoMasa(this.id);
	});
	$(document).on('click', '#botonContinuarTamMasa', function(){
		confirmarTamMasa();
	});

	//HOVER
	$(document).on('mouseenter', '.tipoMasa', function(){
		animacionSobre(this.id);
	});
	$(document).on('mouseleave', '.tipoMasa', function(){
		animacionFuera(this.id);
	});
	$(document).on('mouseenter', '.tamanoMasa', function(){
		animacionSobre(this.id);
	});
	$(document).on('mouseleave', '.tamanoMasa', function(){
		animacionFuera(this.id);
	});

});

