function seleccionarIngredientes() {
	$('#divBoton1').remove();
	$('#divBoton2').remove();
	$('#divContinuar').remove();
	
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
	agregarIngredientes();
}
function agregarIngredientes() {
	var centrado = document.getElementById('centrado');

	var contentIngre = document.createElement('div');
	contentIngre.setAttribute('id','contentIngre');
	contentIngre.setAttribute('class','quincePixeles contentIngre');
	
	var keyPizzeria1= "mFZZOOkT0EdExK5ld2HnzPAoIOm1";
	var contador = 0;
	datos = firebase.database().ref('administrador/'+keyPizzeria1+'/pizzeria1/productos/pizza/ingredientes').orderByKey();
	datos.on("value", function(ingredientes) {
		
		var cantIngredientes = ingredientes.numChildren();
		var contadorIngre = 0;
		datos = firebase.database().ref('administrador/'+keyPizzeria1+'/pizzeria1/productos/pizza/ingredientes').orderByKey();
		datos.on("child_added", function(ingredientes) {
			
			ingredienteArray = {'id':ingredientes.getKey(),'nombre':ingredientes.val().nombre,'precio':ingredientes.val().precio}
			ingredientesArray.push(ingredienteArray);
			if (cantIngredientes ===1) {
				//cuando sea uno
				var divRadio;
				divRadio = document.createElement('div');
				divRadio.setAttribute('id','div'+contadorIngre);
				divRadio.setAttribute('class','quincePixeles caja1ingre');
				divRadio.setAttribute('style','height:'+altura+'%;');

				var radio = document.createElement('input');	
				radio.setAttribute('type','checkbox');
				radio.setAttribute('id','radio'+contadorIngre);
				radio.setAttribute('name',ingredientes.getKey());
				radio.setAttribute('value',ingredientes.getKey());
				radio.setAttribute('class','quincePixeles radio1');

				var pRadio = document.createElement('p');
				pRadio.setAttribute('for','radio'+contadorIngre);
				pRadio.setAttribute('class','quincePixeles pRadio1 textoRadio');
				var textoRadio =  document.createTextNode(ingredientes.val().nombre);
				pRadio.appendChild(textoRadio);

				divRadio.appendChild(radio);
				divRadio.appendChild(pRadio);
				contentIngre.appendChild(divRadio);	
				centrado.appendChild(contentIngre);
			}
			if(cantIngredientes>1 && cantIngredientes<=8){
				var cantIngredientesAltura = cantIngredientes;
				if(cantIngredientes%2!==0){
					cantIngredientesAltura=cantIngredientesAltura+1;
				}
				var altura=100/(cantIngredientesAltura/2);
				
					var divRadio;
					divRadio = document.createElement('div');
					divRadio.setAttribute('id','div'+contadorIngre);
					divRadio.setAttribute('class','quincePixeles caja8ingre');
					divRadio.setAttribute('style','height:'+altura+'%;');

					var radio = document.createElement('input');	
					radio.setAttribute('type','checkbox');
					radio.setAttribute('id','radio'+contadorIngre);
					radio.setAttribute('name',ingredientes.getKey());
					radio.setAttribute('value',ingredientes.getKey());
					radio.setAttribute('class','quincePixeles radio');

					var pRadio = document.createElement('p');
					pRadio.setAttribute('for','radio'+contadorIngre);
					pRadio.setAttribute('class','quincePixeles pRadio textoRadio');
					var textoRadio =  document.createTextNode(ingredientes.val().nombre);
					pRadio.appendChild(textoRadio);

					divRadio.appendChild(radio);
					divRadio.appendChild(pRadio);
					contentIngre.appendChild(divRadio);	
					centrado.appendChild(contentIngre);
			}
			if(cantIngredientes>8 && cantIngredientes <=16){
				
				//seran 3 columnas y 4 filas
				var cantIngredientesAltura = cantIngredientes;
				if(cantIngredientes%2!==0){
					cantIngredientesAltura=cantIngredientesAltura+1;
				}
				var altura=100/(cantIngredientesAltura/3);
				
					var divRadio;
					divRadio = document.createElement('div');
					divRadio.setAttribute('id','div'+contadorIngre);
					divRadio.setAttribute('class','quincePixeles caja16ingre');
					divRadio.setAttribute('style','height:'+altura+'%;');

					var radio = document.createElement('input');	
					radio.setAttribute('type','checkbox');
					radio.setAttribute('id','radio'+contadorIngre);
					radio.setAttribute('name',ingredientes.getKey());
					radio.setAttribute('value',ingredientes.getKey());
					radio.setAttribute('class','quincePixeles radio16');

					var pRadio = document.createElement('p');
					pRadio.setAttribute('for','radio'+contadorIngre);
					pRadio.setAttribute('class','quincePixeles pRadio16 textoRadio');
					var textoRadio =  document.createTextNode(ingredientes.val().nombre);
					pRadio.appendChild(textoRadio);

					divRadio.appendChild(radio);
					divRadio.appendChild(pRadio);
					contentIngre.appendChild(divRadio);	
					centrado.appendChild(contentIngre);
			}
			if(cantIngredientes>16 && cantIngredientes<=24){
				//seran 4 columnas y 6 filas
				var cantIngredientesAltura = cantIngredientes;
				if(cantIngredientes%2!==0){
					cantIngredientesAltura=cantIngredientesAltura+1;
				}
				var altura=100/(cantIngredientesAltura/4);
					var divRadio;
					divRadio = document.createElement('div');
					divRadio.setAttribute('id','div'+contadorIngre);
					divRadio.setAttribute('class','quincePixeles caja24ingre');
					divRadio.setAttribute('style','height:'+altura+'%;');

					var radio = document.createElement('input');	
					radio.setAttribute('type','checkbox');
					radio.setAttribute('id','radio'+contadorIngre);
					radio.setAttribute('name',ingredientes.getKey());
					radio.setAttribute('value',ingredientes.getKey());
					radio.setAttribute('class','quincePixeles radio24');

					var pRadio = document.createElement('p');
					pRadio.setAttribute('for','radio'+contadorIngre);
					pRadio.setAttribute('class','quincePixeles pRadio24 textoRadio');
					var textoRadio =  document.createTextNode(ingredientes.val().nombre);
					pRadio.appendChild(textoRadio);

					divRadio.appendChild(radio);
					divRadio.appendChild(pRadio);
					contentIngre.appendChild(divRadio);	
					centrado.appendChild(contentIngre);
			}
			contadorIngre = contadorIngre+1;
			cargado();
		});
	});
	//---------------------------------------------------------------
	cargado();
}
function reducirPizza() {
	var centrado = document.getElementById('centrado');
	var pizzaimg = document.getElementById('pizzaimg');
	pizzaimg.setAttribute('class','quincePixeles pizzaimgMin');

	var  imgPizza= document.getElementById('imgPizza');
	imgPizza.setAttribute('class','quincePixeles imgPizzaMin');

	var divContinuar = document.createElement('div');
	divContinuar.setAttribute('id','divContinuar');
	divContinuar.setAttribute('class','quincePixeles');

	var botonContinuar = document.createElement('div');
	botonContinuar.setAttribute('id','botonContinuarIngre');
	botonContinuar.setAttribute('class','quincePixeles botonContinuarIngre');

	var textoBoton = document.createElement('p');
	var tBoton = document.createTextNode('Continuar');
	textoBoton.setAttribute('class','textoBoton quincePixeles');
	textoBoton.appendChild(tBoton);
	botonContinuar.appendChild(textoBoton);
	divContinuar.appendChild(botonContinuar);
	centrado.appendChild(divContinuar);

	cargado();
}
function confirmarIngre() {
	var checkbox= document.getElementsByTagName('input');
	var pRadios = document.getElementsByClassName("textoRadio");
	var value = "";
	var verificarVacios=0;
	for (var i = 0; i < checkbox.length; i++) {
	    if (checkbox[i].type === 'checkbox' && checkbox[i].checked) {
	        value = ""+checkbox[i].value;	       
	        //console.log(checkbox[i].value);
	        //console.log(pRadios[i].innerHTML);
	        pizzaJSON['ingredientes'][value] = pRadios[i].innerHTML;
	        for (var x = 0; x < ingredientesArray.length; x++) {
		        if(pRadios[i].innerHTML===ingredientesArray[x].nombre){
		        	pizzaJSON.precioTotal=pizzaJSON.precioTotal+ingredientesArray[x].precio;
		        }
	    	}	        

	        verificarVacios=verificarVacios+1;
	    }
	    
	}
	if(verificarVacios>0){
		console.log("Si hay ingre");
		var keyPedidoPizza = firebase.database().ref('administrador/'+keyPizzeria1+'/pizzeria1/pedidos/'+localStorage.getItem("sessionKey")+'/pizza').child('pedidoPizza').push().key;
		var updates = {};
		updates['administrador/'+keyPizzeria1+'/pizzeria1/pedidos/'+localStorage.getItem("sessionKey")+'/pizza/'+keyPedidoPizza] = pizzaJSON;
		pizzaJSON = 
			{
				'tamano':'',
				'masa':'',
				'salsa':'',
				'queso':'',
				'ingredientes':{},
				'precio':0
			};	
			var onComplete = function(error) {
			  if (error) {
			    console.log('Synchronization failed');
			  } else {
			    console.log('Synchronization succeeded');
			    document.getElementById("centrado").innerHTML='';
				document.getElementById("bandera").textContent="0";
				cargarPaginaAlimentosPizza();
			  }
			};
		return firebase.database().ref().update(updates,onComplete);

	}else{
		console.log("No hay ingre");
		//SI NO HAY INGREDIENTES GUARDADOS, MANDARA UN MENSAJE
	}

}