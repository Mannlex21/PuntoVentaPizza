function cargarPaginaOtrosAlimentos() {
	var contenedorPrincipal = document.getElementById('contenedorPrincipal');
	var contenidoPagina = document.getElementById('contenidoPagina');
	var centrado = document.getElementById('centrado');

	var contenidoSuperior = document.createElement('div');
	contenidoSuperior.setAttribute('id','contenidoSuperiorOtros');
	contenidoSuperior.setAttribute('class','quincePixeles');

	var figureLogo = document.createElement('figure');
	figureLogo.setAttribute('id','logoOtros');
	figureLogo.setAttribute('class','quincePixeles');

	var imgLogo = document.createElement('img');
	imgLogo.setAttribute('id','imgLogoOtros');
	imgLogo.setAttribute('src',"objetos/logo-07.png");

	figureLogo.appendChild(imgLogo);
	contenidoSuperior.appendChild(figureLogo);
//------------------------------------------------------------------------------------
	var contenidoInferior = document.createElement('div');
	contenidoInferior.setAttribute('id','contenidoInferiorOtros');
	contenidoInferior.setAttribute('class','quincePixeles contenidoInferiorOtros');

	var divBarraBusqueda = document.createElement('div');
	divBarraBusqueda.setAttribute('id','divBarraBusqueda');
	divBarraBusqueda.setAttribute('class', 'quincePixeles divBarraBusqueda');

	var barraBusqueda = document.createElement('div');
	barraBusqueda.setAttribute('id','barraBusqueda');
	barraBusqueda.setAttribute('class','quincePixeles barraBusqueda');

	var inputBusqueda = document.createElement('input');
	inputBusqueda.setAttribute('id','inputBusqueda');
	inputBusqueda.setAttribute('type','text');
	inputBusqueda.setAttribute('placeholder','Buscar alimento o bebida');
	inputBusqueda.setAttribute('class','quincePixeles inputBusqueda');

	barraBusqueda.appendChild(inputBusqueda);
	divBarraBusqueda.appendChild(barraBusqueda);
//------------------------------------------------------------------------------------
	var divProductos = document.createElement('div');
	divProductos.setAttribute('id','divProductos');
	divProductos.setAttribute('class','quincePixeles divProductos');
//------------------------------------------------------------------------------------
	var cantProduct=10;
	var keyPizzeria1= "mFZZOOkT0EdExK5ld2HnzPAoIOm1";
		var contador = 0;
	datos = firebase.database().ref('administrador/'+keyPizzeria1+'/pizzeria1/productos/otros').orderByKey();
	datos.on("child_added", function(otrosAlimentos) {
		
		//otrosAlimentos.forEach(function(productos) {
	  		var divProducto = document.createElement('div');
			divProducto.setAttribute('id','divProducto'+contador);
			divProducto.setAttribute('class','quincePixeles divProducto');	

			var producto = document.createElement('div');
			producto.setAttribute('id',otrosAlimentos.getKey());
			producto.setAttribute('class','quincePixeles producto');
			producto.setAttribute('value',otrosAlimentos.val().nombre);

			var figureProducto = document.createElement('figure');
			figureProducto.setAttribute('id','figureProducto'+contador);
			figureProducto.setAttribute('class','quincePixeles figureProducto');

			var imgProducto = document.createElement('img');
			imgProducto.setAttribute('id','imgProducto');
			imgProducto.setAttribute('class','quincePixeles imgProducto');
			imgProducto.setAttribute('src',otrosAlimentos.val().imagen);

			var textoNombreProducto = document.createElement('p');
			var t = document.createTextNode(otrosAlimentos.val().nombre);
			textoNombreProducto.setAttribute('class','quincePixeles textoNombreProducto');
			textoNombreProducto.appendChild(t);

			var textoPrecioProducto = document.createElement('p');
			var t = document.createTextNode('$'+otrosAlimentos.val().precio);
			textoPrecioProducto.setAttribute('class','quincePixeles textoPrecioProducto');
			textoPrecioProducto.appendChild(t);

			figureProducto.appendChild(imgProducto);
			producto.appendChild(textoNombreProducto);
			producto.appendChild(textoPrecioProducto);
			producto.appendChild(figureProducto);
			divProducto.appendChild(producto);
			divProductos.appendChild(divProducto);
			cargado();
			contador=contador+1;
		//});
	});
//------------------------------------------------------------------------------------
	var divBarraOpacidad = document.createElement('div');
	divBarraOpacidad.setAttribute('id','divBarraOpacidad');
	divBarraOpacidad.setAttribute('class', 'quincePixeles divBarraOpacidad');
//------------------------------------------------------------------------------------

	contenidoInferior.appendChild(divBarraBusqueda);
	contenidoInferior.appendChild(divProductos);

	centrado.appendChild(divBarraOpacidad);
	centrado.appendChild(contenidoInferior);
	centrado.appendChild(contenidoSuperior);
	contenidoPagina.appendChild(centrado);
	contenedorPrincipal.appendChild(contenidoPagina);

	cargado();
}
function mostrarMenuCompra(idProducto) {
	var producto = document.getElementById(idProducto);
	
	var sombra = document.createElement("div");
	sombra.setAttribute('id','sombra'+idProducto);
	sombra.setAttribute('class','quincePixeles sombra');

	var agregarCarrito = document.createElement("p");
	var textCarrito = document.createTextNode("Agregar al carrito");
	agregarCarrito.setAttribute("id","Producto-"+idProducto);
	agregarCarrito.setAttribute('class','quincePixeles agregarCarrito');
	agregarCarrito.appendChild(textCarrito);

	var verInfo = document.createElement("p");
	var textInfo = document.createTextNode("Ver información");
	verInfo.setAttribute("id","verInfo"+idProducto)
	verInfo.setAttribute('class','quincePixeles verInfo');
	verInfo.appendChild(textInfo);
	
	producto.appendChild(agregarCarrito);
	producto.appendChild(verInfo);

	producto.appendChild(sombra);
	$(".sombra").animate({opacity:"0.6"},300,function(){
	});
	cargado();
}	
function quitarMenuCompra(idProducto) {
	$(".sombra").animate({opacity:"0"},500,function(){
		$("#sombra"+idProducto).remove();
	});
	$(".agregarCarrito").animate({opacity:"0"},500,function(){
		$("#Producto-"+idProducto).remove();
	});
	$(".verInfo").animate({opacity:"0"},500,function(){
		$("#verInfo"+idProducto).remove();
	});
		
}
function agregarProductoCarrito(idProducto) {
	
	var keyPizzeria1= "mFZZOOkT0EdExK5ld2HnzPAoIOm1";
	datos = firebase.database().ref('administrador/'+keyPizzeria1+'/pizzeria1/productos/otros').orderByKey();
	datos.on("child_added", function(otrosAlimentos) {
		if(otrosAlimentos.getKey()===idProducto){
			var valor=otrosAlimentos.getKey();
			datos = firebase.database().ref('administrador/'+keyPizzeria1+'/pizzeria1/pedidos').orderByKey();
			datos.once("value", function(w){
				if(w.hasChild(localStorage.getItem("sessionKey"))){
					datos = firebase.database().ref('administrador/'+keyPizzeria1+'/pizzeria1/pedidos/'+localStorage.getItem("sessionKey")).orderByKey();
					datos.once("value", function(x){
						console.log(localStorage.getItem("sessionKey"));
						if (x.hasChild("otrosAlimentos")) {
						    datos = firebase.database().ref('administrador/'+keyPizzeria1+'/pizzeria1/pedidos/'+localStorage.getItem("sessionKey")+'/otrosAlimentos').orderByKey();
							datos.once("value", function(r) {
								console.log("Entro otrosAlimentos")
								console.log(r.hasChild(valor));
								if(r.hasChild(valor)){
									//AQUI ENTRA CUANDO ACTUALIZA LA CANTIDAD DE UN PRODUCTO
									var updates = {};
									producto.nombre=r.val()[valor].nombre;
									producto.cantidad=r.val()[valor].cantidad+1;
									producto.precio=r.val()[valor].precio;

									productosArray['precioTotal']=r.val().precioTotal+otrosAlimentos.val().precio;
									productosArray[valor]=producto;

									updates['administrador/'+keyPizzeria1+'/pizzeria1/pedidos/'+localStorage.getItem("sessionKey")+'/otrosAlimentos'] = productosArray;
									return firebase.database().ref().update(updates);
								}else{
									//AQUI ENTRA CUANDO AGREGA UN PRODUCTO QUE NO EXISTE EN EL CARRITO
									var updates = {};var update = {};
									precioTotal={'precioTotal':0}
									producto.nombre=otrosAlimentos.val().nombre;
									producto.cantidad=1;
									producto.precio=otrosAlimentos.val().precio;


									//precioTotal['precioTotal']=r.val().precioTotal+otrosAlimentos.val().precio;
									//productosArray[valor]=producto;

									
									updates['administrador/'+keyPizzeria1+'/pizzeria1/pedidos/'+localStorage.getItem("sessionKey")+'/otrosAlimentos/'+valor] = producto;
									firebase.database().ref().update(updates);		
									update['administrador/'+keyPizzeria1+'/pizzeria1/pedidos/'+localStorage.getItem("sessionKey")+'/otrosAlimentos/precioTotal'] = r.val().precioTotal+otrosAlimentos.val().precio;
									firebase.database().ref().update(update);
									
								}
							});

					  	}else{
					  		//AQUI ENTRA CUANDO EXISTE LA SESION, PERO NO EXISTE EL NODO otrosAlimentos
							var updates = {};
							producto.nombre=otrosAlimentos.val().nombre;
							producto.cantidad=1;
							producto.precio=otrosAlimentos.val().precio;

							productosArray['precioTotal']=otrosAlimentos.val().precio;
							productosArray[valor]=producto;
							
							updates['administrador/'+keyPizzeria1+'/pizzeria1/pedidos/'+localStorage.getItem("sessionKey")+'/otrosAlimentos'] = productosArray;
						    

							return firebase.database().ref().update(updates);
					  	}
					});
				}else{
					//AQUI ENTRA CUANDO NO EXISTE LA SESION, CUANDO SE CREA POR PRIMERA VEZ EL PEDIDO DEL CLIENTE
					console.log("AQUI ENTRA CUANDO NO EXISTE LA SESION, CUANDO SE CREA POR PRIMERA VEZ EL PEDIDO DEL CLIENTE");
					var updates = {};
					producto.nombre=otrosAlimentos.val().nombre;
					producto.cantidad=1;
					producto.precio=otrosAlimentos.val().precio;
					
					productosArray['precioTotal']=otrosAlimentos.val().precio;
					productosArray[valor]=producto;
					
					updates['administrador/'+keyPizzeria1+'/pizzeria1/pedidos/'+localStorage.getItem("sessionKey")+'/otrosAlimentos'] = productosArray;
					
					return firebase.database().ref().update(updates);
				}
			});

			
		}
	});	
}