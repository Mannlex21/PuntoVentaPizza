function seleccionarTamMasa() {
	$('#divBoton1').remove();
	$('#divBoton2').remove();
	var circleLeft = document.getElementById('circleLeft');
	circleLeft.setAttribute('class','quincePixeles circleLeft');

	var circleCenter = document.getElementById('circleCenter');
	circleCenter.setAttribute('class','quincePixeles circleCenter');

	var circleRight = document.getElementById('circleRight');
	circleRight.setAttribute('class','quincePixeles circleRight');

	var tamMasa = document.getElementById('tamMasa');
	tamMasa.setAttribute('class','quincePixeles tamMasa');

	var salQueso = document.getElementById('salQueso');
	salQueso.setAttribute('class','quincePixeles salQueso');

	var ingre = document.getElementById('ingre');
	ingre.setAttribute('class','quincePixeles ingre');

	cargado();
	cambiarConfiguracionMenuTam();	
}
function cambiarConfiguracionMenuTam() {
	$('#contentIngre').remove();
	var centrado = document.getElementById("centrado");

	var divBoton1 = document.createElement('div');
	divBoton1.setAttribute('id','divBoton1');
	divBoton1.setAttribute('class','quincePixeles');

	var texto1 = document.createElement('p');
	var t = document.createTextNode('Tamaño:');
	texto1.setAttribute('id','texto1');
	texto1.setAttribute('class','quincePixeles textoTamano');
	texto1.appendChild(t);

	var boton1 = document.createElement('div');
	boton1.setAttribute('id','boton1');
	boton1.setAttribute('class','quincePixeles selectTamano');

	var pboton1 = document.createElement('p');
	var tBoton1 =document.createTextNode('Seleccionar');
	pboton1.setAttribute("id",'pboton1');
	pboton1.setAttribute('class','textoBoton');
	pboton1.appendChild(tBoton1);
//----------------------------------------------------------------------

	var divBoton2 = document.createElement('div');
	divBoton2.setAttribute('id','divBoton2');
	divBoton2.setAttribute('class','quincePixeles');

	var texto2 = document.createElement('p');
	var t2 = document.createTextNode('Masa:');
	texto2.setAttribute('id','texto2');
	texto2.setAttribute('class','quincePixeles textoMasa');
	texto2.appendChild(t2);

	var boton2 = document.createElement('div');
	boton2.setAttribute('id','boton2');
	boton2.setAttribute('class','quincePixeles selectMasa');
	
	var pboton2 = document.createElement('p');
	var tBoton2 =document.createTextNode('Seleccionar');
	pboton1.setAttribute("id",'pboton2');
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
	botonContinuar.setAttribute('id','botonContinuarTamMasa');
	botonContinuar.setAttribute('class','quincePixeles botonContinuarMasa');

	var textoBoton = document.createElement('p');
	var tBoton = document.createTextNode('Continuar');
	textoBoton.setAttribute('class','textoBoton quincePixeles');
	textoBoton.appendChild(tBoton);
	botonContinuar.appendChild(textoBoton);
	divContinuar.appendChild(botonContinuar);
	
	boton1.appendChild(pboton1);
	boton2.appendChild(pboton2);

	divBoton1.appendChild(boton1);
	divBoton1.appendChild(texto1);
	divBoton2.appendChild(boton2);
	divBoton2.appendChild(texto2);
	

	centrado.appendChild(divBoton1);
	centrado.appendChild(divBoton2);
	centrado.appendChild(divContinuar);
	cargado();
}
function mostrarMenuTam() {
	var centrado = document.getElementById("divBoton1");
	var sombraMenu = document.createElement('div');
	sombraMenu.setAttribute("id","sombraMenu");
	sombraMenu.setAttribute("class","quincePixeles sombraMenuMin");

	var menuTam = document.createElement('div');
	menuTam.setAttribute("id","menuTam");
	menuTam.setAttribute("class","quincePixeles menuTam");

	var keyPizzeria1= "mFZZOOkT0EdExK5ld2HnzPAoIOm1";
	var contador = 0;
	datos = firebase.database().ref('administrador/'+keyPizzeria1+'/pizzeria1/productos/pizza/tamaño').orderByKey();
	datos.on("child_added", function(tamaño) {
		var masa = document.createElement('div');
		var t = document.createTextNode(tamaño.val());
		masa.setAttribute("id",'tamMasa'+contador);
		masa.setAttribute('class','quincePixeles tamanoMasa');
		masa.appendChild(t);
		contador=contador+1;
		menuTam.appendChild(masa);		
		cargado();
	});
	centrado.appendChild(sombraMenu);
	centrado.appendChild(menuTam);
	cargado();
}
function mostrarMenuMasa() {
	var centrado = document.getElementById("divBoton2");
	var sombraMenu = document.createElement('div');
	sombraMenu.setAttribute("id","sombraMenu");
	sombraMenu.setAttribute("class","quincePixeles sombraMenuMin");

	var menuTipo = document.createElement('div');
	menuTipo.setAttribute("id","menuTipo");
	menuTipo.setAttribute("class","quincePixeles menuTipo");

	var keyPizzeria1= "mFZZOOkT0EdExK5ld2HnzPAoIOm1";
	var contador = 0;
	datos = firebase.database().ref('administrador/'+keyPizzeria1+'/pizzeria1/productos/pizza/masa').orderByKey();
	datos.on("child_added", function(tipoMasa) {
		var masa = document.createElement('div');
		var t = document.createTextNode(tipoMasa.val());
		masa.setAttribute("id",'tipoMasa'+contador);
		masa.setAttribute('class','quincePixeles tipoMasa');
		masa.appendChild(t);
		contador=contador+1;
		menuTipo.appendChild(masa);		
		cargado();
	});
	centrado.appendChild(sombraMenu);
	centrado.appendChild(menuTipo);
	cargado();
}
function selecTamanoMasa(idTamano) {
	console.log(idTamano);
	var t = document.getElementById(idTamano);
	document.getElementById("pboton1").innerHTML = t.textContent;;
	var botonTam = document.getElementById("botonTam");
	botonTam.setAttribute("value",t.textContent);
	pizzaJSON.tamano = t.textContent;
	console.log(pizzaJSON);
	quitarMenus();
}
function selecTipoMasa(idTamano) {
	console.log(idTamano);
	var t = document.getElementById(idTamano);
	document.getElementById("pboton2").innerHTML = t.textContent;
	var botonMasa = document.getElementById("botonMasa");
	botonMasa.setAttribute("value",t.textContent);
	pizzaJSON.masa = t.textContent;
	console.log(pizzaJSON);
	quitarMenus();
}

function confirmarTamMasa() {
	if(pizzaJSON.tamano===''){	
		if (pizzaJSON.masa==='') {
		console.log("Seleccione tamaño y masa");	
		}else{
			console.log("Seleccione tamaño");	
		}
	}else{
		if (pizzaJSON.masa==='') {
			console.log("Seleccione masa");		
		}else{
			seleccionarSalsaQueso();
		}
	}
}

