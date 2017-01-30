$(document).ready(function() {
	//CLICK
	/*$(document).on('click', '#salQueso', function(){
		seleccionarSalsaQueso();
	});
	$(document).on('click', '#circleCenter', function(){
		seleccionarSalsaQueso();
	});*/
	$(document).on('click', '#botonSalsa', function(){
		mostrarMenuSalsa();
	});
	$(document).on('click', '.tipoSalsa', function(){
		selecSalsa(this.id);
	});	
	$(document).on('click', '#botonQueso', function(){
		mostrarMenuQueso();
	});	
	$(document).on('click', '.tipoQueso', function(){
		selecQueso(this.id);
	});	
	$(document).on('click', '#botonContinuarSalsaQueso', function(){
		confirmarSalsaQueso();
	});

	//HOVER
	$(document).on('mouseenter', '.tipoSalsa', function(){
		animacionSobre(this.id);
	});
	$(document).on('mouseleave', '.tipoSalsa', function(){
		animacionFuera(this.id);
	});

});