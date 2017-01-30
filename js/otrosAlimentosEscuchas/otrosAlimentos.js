$(document).ready(function() {
	var divBarraBusqueda = $('#divBarraBusqueda');
  	var divBarraBusqueda_offset = $('#divBarraBusqueda').offset();
	$(document).on('click', '#otros', function(){
		document.getElementById("centrado").innerHTML='';
		document.getElementById("bandera").textContent="2";		
		cambiarColorOtros();
		cargarPaginaOtrosAlimentos();
	});
	$(window).on('scroll', function() {
    if($(window).scrollTop()>145) {
		$('#divBarraBusqueda').addClass('divBarraBusqueda-fijo');
    } else {
      $('#divBarraBusqueda').removeClass('divBarraBusqueda-fijo');
    }
  });
	var idProducto;
	$(document).on('mouseenter', '.producto', function(){
		mostrarMenuCompra(this.id);
		idProducto = this.id;
	});
	$(document).on('mouseleave', '.producto', function(){
		quitarMenuCompra(this.id);
	});

	$(document).on('click', '.agregarCarrito', function(){
		agregarProductoCarrito(idProducto);
	});
});
function cambiarColorOtros() {
	//PROMOCIONES	
	var promociones = document.getElementById('promociones');
	promociones.setAttribute('class','quincePixeles selecNo');
	var imgPromociones = document.getElementById('imgPromocionesBarra');
	imgPromociones.setAttribute('src','objetos/1-06.png');
	//ALIMENTOS SELECCIONADA
	var alimentos = document.getElementById('alimentos');
	alimentos.setAttribute('class','quincePixeles selec');
	var imgAlimentos = document.getElementById('imgAlimentosBarra');
	imgAlimentos.setAttribute('src','objetos/11-06.png');
	//PIZZA  NO SELECCIONADA
	var pizza = document.getElementById('pizza');
	pizza.setAttribute('class','quincePixeles selecNo');
	var imgPizza = document.getElementById('imgPizzaBarra');
	imgPizza.setAttribute('src','objetos/6-06.png');
	//OTROS
	var otros = document.getElementById('otros');
	otros.setAttribute('class','quincePixeles selec');
	var imgOtros = document.getElementById('imgOtrosBarra');
	imgOtros.setAttribute('src','objetos/11-06.png');
	//BEBIDAS NO SELECCIONADA
	var bebidas = document.getElementById('bebidas');
	bebidas.setAttribute('class','quincePixeles selecNo');
	var imgBebidas = document.getElementById('imgBebidasBarra');
	imgBebidas.setAttribute('src','objetos/3-06.png');
	//MI CARRITO
	var carrito = document.getElementById('miCarrito');
	carrito.setAttribute('class','quincePixeles selecNo');
	var imgCarrito = document.getElementById('imgCarritoBarra');
	imgCarrito.setAttribute('src','objetos/2-06.png');
}