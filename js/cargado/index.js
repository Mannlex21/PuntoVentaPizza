$(document).ready(function() {
	$(document).on('click', '#pizza', function(){
		document.getElementById("bandera").textContent="1";
		cargarPaginaAlimentosPizza();
		cambiarColorPizza();
	});	
});
function cambiarColorPizza() {
	//PROMOCIONES SELECCIONADA
	var promociones = document.getElementById('promociones');
	promociones.setAttribute('class','quincePixeles selecNo');
	var imgPromociones = document.getElementById('imgPromocionesBarra');
	imgPromociones.setAttribute('src','objetos/1-06.png');
	//ALIMENTOS SELECCIONADA
	var alimentos = document.getElementById('alimentos');
	alimentos.setAttribute('class','quincePixeles selec');
	var imgAlimentos = document.getElementById('imgAlimentosBarra');
	imgAlimentos.setAttribute('src','objetos/11-06.png');
	//PIZZA SELECCIONADA
	var pizza = document.getElementById('pizza');
	pizza.setAttribute('class','quincePixeles selec');
	var imgPizza = document.getElementById('imgPizzaBarra');
	imgPizza.setAttribute('src','objetos/12-06.png');
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