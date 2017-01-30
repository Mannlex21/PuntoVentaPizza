function seleccionarSalsaQueso() {

	$('#divBoton1').remove();
	$('#divBoton2').remove();
	$('#divContinuar').remove();
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
	boton1.setAttribute('id','botonSalsa');
	boton1.setAttribute('class','quincePixeles selectTamano');

	var pboton1 = document.createElement('p');
	var tBoton1 =document.createTextNode('Seleccionar');
	pboton1.setAttribute("id","pboton1");
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
	boton2.setAttribute('id','botonQueso');
	boton2.setAttribute('class','quincePixeles selectMasa');
	
	var pboton2 = document.createElement('p');
	var tBoton2 =document.createTextNode('Seleccionar');
	pboton2.setAttribute("id","pboton2");
	pboton2.setAttribute('class','textoBoton');
	pboton2.appendChild(tBoton2);
//----------------------------------------------------------------------
	
	var figurePizza = document.getElementById('pizzaimg');
	figurePizza.setAttribute('class','quincePixeles pizzaimgMax');

	var imgPizza = document.getElementById('imgPizza');
	imgPizza.setAttribute('class','quincePixeles imgPizzaMax');

	var divContinuar = document.createElement('div');
	divContinuar.setAttribute('id','divContinuar');
	divContinuar.setAttribute('class','quincePixeles');

	var botonContinuar = document.createElement('div');
	botonContinuar.setAttribute('id','botonContinuarSalsaQueso');
	botonContinuar.setAttribute('class','quincePixeles botonContinuarMasa');

	var textoBoton = document.createElement('p');
	var tBoton = document.createTextNode('Continuar');
	textoBoton.setAttribute('class','textoBoton quincePixeles');
	textoBoton.appendChild(tBoton);
	botonContinuar.appendChild(textoBoton);
	divContinuar.appendChild(botonContinuar);

	/*var botonContinuar = document.getElementById('botonContinuar');
	botonContinuar.setAttribute("id",'botonContinuarSalsaQueso');
	botonContinuar.setAttribute('class','quincePixeles botonContinuarMasa');*/

	boton1.appendChild(pboton1);
	boton2.appendChild(pboton2);

	divBoton1.appendChild(boton1);
	divBoton1.appendChild(texto1);
	divBoton2.appendChild(boton2);
	divBoton2.appendChild(texto2);
	
	centrado.appendChild(divContinuar);
	centrado.appendChild(divBoton1);
	centrado.appendChild(divBoton2);
	cargado();
}
function mostrarMenuSalsa() {
	var centrado = document.getElementById("divBoton1");
	var sombraMenu = document.createElement('div');
	sombraMenu.setAttribute("id","sombraMenu");
	sombraMenu.setAttribute("class","quincePixeles sombraMenuMin");

	var menuSalsa = document.createElement('div');
	menuSalsa.setAttribute("id","menuSalsa");
	menuSalsa.setAttribute("class","quincePixeles menuSalsa");

	var keyPizzeria1= "mFZZOOkT0EdExK5ld2HnzPAoIOm1";
	var contador = 0;
	datos = firebase.database().ref('administrador/'+keyPizzeria1+'/pizzeria1/productos/pizza/salsa').orderByKey();
	datos.on("child_added", function(salsa) {
		var tipoSalsa = document.createElement('div');
		var t = document.createTextNode(salsa.val());
		tipoSalsa.setAttribute("id",'tipoSalsa'+contador);
		tipoSalsa.setAttribute('class','quincePixeles tipoSalsa');
		tipoSalsa.appendChild(t);
		contador=contador+1;
		menuSalsa.appendChild(tipoSalsa);		
		cargado();
	});
	centrado.appendChild(sombraMenu);
	centrado.appendChild(menuSalsa);
	cargado();
}
function selecSalsa(idSalsa) {
	var t = document.getElementById(idSalsa);
	document.getElementById("pboton1").innerHTML = t.textContent;;
	var botonSalsa = document.getElementById("botonSalsa");
	botonSalsa.setAttribute("value",t.textContent);
	pizzaJSON.salsa= t.textContent;
	console.log(pizzaJSON);
	quitarMenus();
}

function mostrarMenuQueso() {
	var centrado = document.getElementById("divBoton2");
	var sombraMenu = document.createElement('div');
	sombraMenu.setAttribute("id","sombraMenu");
	sombraMenu.setAttribute("class","quincePixeles sombraMenuMin");

	var menuQueso = document.createElement('div');
	menuQueso.setAttribute("id","menuQueso");
	menuQueso.setAttribute("class","quincePixeles menuQueso");

	var keyPizzeria1= "mFZZOOkT0EdExK5ld2HnzPAoIOm1";
	var contador = 0;
	datos = firebase.database().ref('administrador/'+keyPizzeria1+'/pizzeria1/productos/pizza/queso').orderByKey();
	datos.on("child_added", function(queso) {
		var tipoQueso = document.createElement('div');
		var t = document.createTextNode(queso.val());
		tipoQueso.setAttribute("id",'tipoQueso'+contador);
		tipoQueso.setAttribute('class','quincePixeles tipoQueso');
		tipoQueso.appendChild(t);
		contador=contador+1;
		menuQueso.appendChild(tipoQueso);		
		cargado();
	});
	centrado.appendChild(sombraMenu);
	centrado.appendChild(menuQueso);
	cargado();
}
function selecQueso(idQueso) {
	var t = document.getElementById(idQueso);
	document.getElementById("pboton2").innerHTML = t.textContent;;
	var botonQueso = document.getElementById("botonQueso");
	botonQueso.setAttribute("value",t.textContent);
	pizzaJSON.queso = t.textContent;
	console.log(pizzaJSON);
	quitarMenus();
}
function confirmarSalsaQueso(){
	if(pizzaJSON.salsa===''){	
		if (pizzaJSON.queso==='') {
		console.log("Seleccione salsa y queso");	
		}else{
			console.log("Seleccione salsa");	
		}
	}else{
		if (pizzaJSON.queso==='') {
			console.log("Seleccione queso");		
		}else{
			seleccionarIngredientes();
		}
	}
}
