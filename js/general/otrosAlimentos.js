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
	var cantProduct=6;
	for (var i = 0; i < cantProduct; i++) {
		var divProducto = document.createElement('div');
		divProducto.setAttribute('id','divProducto'+i);
		divProducto.setAttribute('class','quincePixeles divProducto');	

		var producto = document.createElement('div');
		producto.setAttribute('id','producto'+i);
		producto.setAttribute('class','quincePixeles producto');

		var figureProducto = document.createElement('figure');
		figureProducto.setAttribute('id','figureProducto'+i);
		figureProducto.setAttribute('class','quincePixeles figureProducto');

		var imgProducto = document.createElement('img');
		imgProducto.setAttribute('id','imgProducto');
		imgProducto.setAttribute('class','quincePixeles imgProducto');
		imgProducto.setAttribute('src',"objetos/alitas.png");

		var textoNombreProducto = document.createElement('p');
		var t = document.createTextNode('Alitas de pollo');
		textoNombreProducto.setAttribute('class','quincePixeles textoNombreProducto');
		textoNombreProducto.appendChild(t);

		var textoPrecioProducto = document.createElement('p');
		var t = document.createTextNode('$110.00');
		textoPrecioProducto.setAttribute('class','quincePixeles textoPrecioProducto');
		textoPrecioProducto.appendChild(t);

		figureProducto.appendChild(imgProducto);
		producto.appendChild(textoNombreProducto);
		producto.appendChild(textoPrecioProducto);
		producto.appendChild(figureProducto);
		divProducto.appendChild(producto);
		divProductos.appendChild(divProducto);
	}
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
	sombra.setAttribute('id','sombra');
	sombra.setAttribute('class','quincePixeles sombra');
	producto.appendChild(sombra);
	cargado();
	$(".sombra").animate({opacity:"0.6"},300,function(){
	});
}	
function quitarMenuCompra(idProducto) {
	$(".sombra").animate({opacity:"0"},500,function(){
		$("#sombra").remove();
	});
}