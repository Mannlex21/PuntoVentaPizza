function seleccionarIngredientes() {
	$('#divBoton1').remove();
	$('#divBoton2').remove();
	
	var circleLeft = document.getElementById('circleLeft');
	circleLeft.setAttribute('class','quincePixeles circleLeftNo');

	var circleCenter = document.getElementById('circleCenter');
	circleCenter.setAttribute('class','quincePixeles circleCenter');

	var circleRight = document.getElementById('circleRight');
	circleRight.setAttribute('class','quincePixeles circleRightSi');

	var tamMasa = document.getElementById('tamMasa');
	tamMasa.setAttribute('class','quincePixeles tamMasaNo');

	var salQueso = document.getElementById('salQueso');
	salQueso.setAttribute('class','quincePixeles salQueso');

	var ingre = document.getElementById('ingre');
	ingre.setAttribute('class','quincePixeles ingreSi');
	cargado();
	reducirPizza();
	agregarIngredientes(8);
}
function agregarIngredientes(cantIngredientes) {
	var centrado = document.getElementById('centrado');

	var contentIngre = document.createElement('div');
	contentIngre.setAttribute('id','contentIngre');
	contentIngre.setAttribute('class','quincePixeles contentIngre');
	
	if (cantIngredientes ===1) {
		//cuando sea uno
	}
	//---------------------------------------------------------------
	if(cantIngredientes<=8){
		var cantIngredientesAltura = cantIngredientes;
		if(cantIngredientes%2!==0){
			cantIngredientesAltura=cantIngredientesAltura+1;
		}else{
			
		}
		var altura=100/(cantIngredientesAltura/2);
		console.log(altura);
		//seran 2 columnas y 4 filas
		for (var i = 0; i <cantIngredientes; i++) {
			var divRadio;
			divRadio = document.createElement('div');
			divRadio.setAttribute('id','div'+i);
			divRadio.setAttribute('class','quincePixeles caja8ingre');
			divRadio.setAttribute('style','height:'+altura+'%;');

			var radio = document.createElement('input');	
			radio.setAttribute('type','radio');
			radio.setAttribute('id','radio'+i);
			radio.setAttribute('name','Aceitunas');
			radio.setAttribute('value','aceituna');
			radio.setAttribute('class','quincePixeles radio');


			var pRadio = document.createElement('p');
			pRadio.setAttribute('for','radio'+i);
			pRadio.setAttribute('class','quincePixeles pRadio');
			var textoRadio =  document.createTextNode('Aceitunas');
			pRadio.appendChild(textoRadio);

			
			//radio.appendChild(textoRadio);
			divRadio.appendChild(radio);
			divRadio.appendChild(pRadio);
			contentIngre.appendChild(divRadio);	
		}		
		centrado.appendChild(contentIngre);
	}
	//---------------------------------------------------------------
	if(cantIngredientes>8 && cantIngredientes <16){
		//seran 3 columnas y 4 filas
	}
	if(cantIngredientes>16 && 24){
		//seran 3 columnas y 4 filas
	}
	cargado();
}
function reducirPizza() {
	var pizzaimg = document.getElementById('pizzaimg');
	pizzaimg.setAttribute('class','quincePixeles pizzaimgMin');

	var  imgPizza= document.getElementById('imgPizza');
	imgPizza.setAttribute('class','quincePixeles imgPizzaMin');

	var  botonContinuar= document.getElementById('botonContinuar');
	botonContinuar.setAttribute('class','quincePixeles botonContinuarIngre');
	cargado();
}