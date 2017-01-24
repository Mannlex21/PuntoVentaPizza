function seleccionarSalsaQueso() {

	$('#divBoton1').remove();
	$('#divBoton2').remove();
	var circleLeft = document.getElementById('circleLeft');
	circleLeft.setAttribute('class','quincePixeles circleLeftNo');

	var circleCenter = document.getElementById('circleCenter');
	circleCenter.setAttribute('class','quincePixeles circleCenterSi');

	var circleRight = document.getElementById('circleRight');
	circleRight.setAttribute('class','quincePixeles circleRight');

	var tamMasa = document.getElementById('tamMasa');
	tamMasa.setAttribute('class','quincePixeles tamMasaNo');

	var salQueso = document.getElementById('salQueso');
	salQueso.setAttribute('class','quincePixeles salQuesoSi');

	var ingre = document.getElementById('ingre');
	ingre.setAttribute('class','quincePixeles ingre'); 
	cargado();
	cambiarConfiguracionMenuSalsa();
}
function cambiarConfiguracionMenuSalsa() {
	$('#contentIngre').remove();
	var centrado = document.getElementById("centrado");

	var divBoton1 = document.createElement('div');
	divBoton1.setAttribute('id','divBoton1');
	divBoton1.setAttribute('class','quincePixeles');

	var texto1 = document.createElement('p');
	var t = document.createTextNode('Salsa:');
	texto1.setAttribute('id','texto1');
	texto1.setAttribute('class','quincePixeles textoSalsa');
	texto1.appendChild(t);

	var boton1 = document.createElement('div');
	boton1.setAttribute('id','boton1');
	boton1.setAttribute('class','quincePixeles selectTamano');

	var pboton1 = document.createElement('p');
	var tBoton1 =document.createTextNode('Seleccionar');
	pboton1.setAttribute('class','textoBoton');
	pboton1.appendChild(tBoton1);
//----------------------------------------------------------------------

	var divBoton2 = document.createElement('div');
	divBoton2.setAttribute('id','divBoton2');
	divBoton2.setAttribute('class','quincePixeles');

	var texto2 = document.createElement('p');
	var t2 = document.createTextNode('Queso:');
	texto2.setAttribute('id','texto2');
	texto2.setAttribute('class','quincePixeles textoQueso');
	texto2.appendChild(t2);

	var boton2 = document.createElement('div');
	boton2.setAttribute('id','boton2');
	boton2.setAttribute('class','quincePixeles selectMasa');
	
	var pboton2 = document.createElement('p');
	var tBoton2 =document.createTextNode('Seleccionar');
	pboton2.setAttribute('class','textoBoton');
	pboton2.appendChild(tBoton2);
//----------------------------------------------------------------------
	
	var figurePizza = document.getElementById('pizzaimg');
	figurePizza.setAttribute('class','quincePixeles pizzaimgMax');

	var imgPizza = document.getElementById('imgPizza');
	imgPizza.setAttribute('class','quincePixeles imgPizzaMax');

	var botonContinuar = document.getElementById('botonContinuar');
	botonContinuar.setAttribute('class','quincePixeles botonContinuarMasa');

	boton1.appendChild(pboton1);
	boton2.appendChild(pboton2);

	divBoton1.appendChild(boton1);
	divBoton1.appendChild(texto1);
	divBoton2.appendChild(boton2);
	divBoton2.appendChild(texto2);
	

	centrado.appendChild(divBoton1);
	centrado.appendChild(divBoton2);
	cargado();
}