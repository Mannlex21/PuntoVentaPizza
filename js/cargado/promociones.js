$(document).ready(function() {
	cargarBarraLateral();
	$(document).on('click', '#promociones', function(){
		document.getElementById("centrado").innerHTML='';
		document.getElementById("bandera").textContent="0";		
		cambiarColorPromociones();
	});
});
function cambiarColorPromociones() {
	//PROMOCIONES SELECCIONADA
	var promociones = document.getElementById('promociones');
	promociones.setAttribute('class','quincePixeles selec');
	var imgPromociones = document.getElementById('imgPromocionesBarra');
	imgPromociones.setAttribute('src','objetos/9-06.png');
	//ALIMENTOS NO SELECCIONADA
	var alimentos = document.getElementById('alimentos');
	alimentos.setAttribute('class','quincePixeles selecNo');
	var imgAlimentos = document.getElementById('imgAlimentosBarra');
	imgAlimentos.setAttribute('src','objetos/4-06.png');
	//PIZZA  NO SELECCIONADA
	var pizza = document.getElementById('pizza');
	pizza.setAttribute('class','quincePixeles selecNo');
	var imgPizza = document.getElementById('imgPizzaBarra');
	imgPizza.setAttribute('src','objetos/6-06.png');
	//OTROS NO SELECCIONADA
	var otros = document.getElementById('otros');
	otros.setAttribute('class','quincePixeles selecNo');
	var imgOtros = document.getElementById('imgOtrosBarra');
	imgOtros.setAttribute('src','objetos/4-06.png');
	//BEBIDAS NO SELECCIONADA
	var bebidas = document.getElementById('bebidas');
	bebidas.setAttribute('class','quincePixeles selecNo');
	var imgBebidas = document.getElementById('imgBebidasBarra');
	imgBebidas.setAttribute('src','objetos/3-06.png');
	//MI CARRITO NO SELECCIONADA
	var carrito = document.getElementById('miCarrito');
	carrito.setAttribute('class','quincePixeles selecNo');
	var imgCarrito = document.getElementById('imgCarritoBarra');
	imgCarrito.setAttribute('src','objetos/2-06.png');
}