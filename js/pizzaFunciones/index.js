function cargarPaginaAlimentosPizza() {
	var contenedorPrincipal = document.getElementById('contenedorPrincipal');
	var contenidoPagina = document.getElementById('contenidoPagina');
	var centrado = document.getElementById('centrado');

	var contenidoSuperior = document.createElement('div');
	contenidoSuperior.setAttribute('id','contenidoSuperior');
	contenidoSuperior.setAttribute('class','quincePixeles');

	var figureLogo = document.createElement('figure');
	figureLogo.setAttribute('id','logo');
	figureLogo.setAttribute('class','quincePixeles');

	var imgLogo = document.createElement('img');
	imgLogo.setAttribute('id','imgLogo');
	imgLogo.setAttribute('src',"objetos/logo-07.png");

	figureLogo.appendChild(imgLogo);
	contenidoSuperior.appendChild(figureLogo);

	var figurePizzaImg = document.createElement('figure');
	figurePizzaImg.setAttribute('id','pizzaimg');
	figurePizzaImg.setAttribute('src','objetos/pizza-08.png');
	figurePizzaImg.setAttribute('class','quincePixeles pizzaimgMax');

	var imgPizza = document.createElement('img');
	imgPizza.setAttribute('id','imgPizza');
	imgPizza.setAttribute('src','objetos/pizza-08.png');
	imgPizza.setAttribute('class','quincePixeles imgPizzaMax');
//-----------------------------------------------------------------------------
	var linea = document.createElement('div');
	linea.setAttribute('id','linea');
	linea.setAttribute('class','quincePixeles');

	var lineaDesplazamiento = document.createElement('hr');
	lineaDesplazamiento.setAttribute('id','lineaDesplazamiento');
	lineaDesplazamiento.setAttribute('class','quincePixeles');

	var circleLeft = document.createElement('div');
	circleLeft.setAttribute('id','circleLeft');
	circleLeft.setAttribute('class','quincePixeles circleLeft');

	var tamMasa = document.createElement('p');
	var textMasa = document.createTextNode('Tamaño y masa');
	tamMasa.setAttribute('id','tamMasa');
	tamMasa.setAttribute('class','quincePixeles tamMasa');
	tamMasa.appendChild(textMasa);

	var circleRight = document.createElement('div');
	circleRight.setAttribute('id','circleRight');
	circleRight.setAttribute('class','quincePixeles circleRight');

	var salQueso = document.createElement('p');
	var textSalsa = document.createTextNode('Salsa y queso');
	salQueso.setAttribute('id','salQueso');
	salQueso.setAttribute('class','quincePixeles salQueso');
	salQueso.appendChild(textSalsa);

	var circleCenter = document.createElement('div');
	circleCenter.setAttribute('id','circleCenter');
	circleCenter.setAttribute('class','quincePixeles circleCenter');

	var ingre = document.createElement('p');
	var textIngre = document.createTextNode('Ingredientes');
	ingre.setAttribute('id','ingre');
	ingre.setAttribute('class','quincePixeles ingre');
	ingre.appendChild(textIngre);

	linea.appendChild(lineaDesplazamiento);
	linea.appendChild(circleLeft);
	linea.appendChild(tamMasa);
	linea.appendChild(circleRight);
	linea.appendChild(ingre);
	linea.appendChild(circleCenter);
	linea.appendChild(salQueso);
	
//-----------------------------------------------------------------------------

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

	var divBoton1 = document.createElement('div');
	divBoton1.setAttribute('id','divBoton1');
	divBoton1.setAttribute('class','quincePixeles');

	var texto1 = document.createElement('p');
	var t = document.createTextNode('Tamaño:');
	texto1.setAttribute('id','texto1');
	texto1.setAttribute('class','quincePixeles textoTamano');
	texto1.appendChild(t);

	var boton1 = document.createElement('div');
	boton1.setAttribute('id','botonTam');
	boton1.setAttribute('class','quincePixeles selectTamano');

	var pboton1 = document.createElement('p');
	var tBoton1 =document.createTextNode('Seleccionar');
	pboton1.setAttribute("id",'pboton1');
	pboton1.setAttribute('class','textoBoton');
	pboton1.appendChild(tBoton1);
	boton1.appendChild(pboton1);
	divBoton1.appendChild(boton1);
	divBoton1.appendChild(texto1);

	var divBoton2 = document.createElement('div');
	divBoton2.setAttribute('id','divBoton2');
	divBoton2.setAttribute('class','quincePixeles');

	var texto2 = document.createElement('p');
	var t2 = document.createTextNode('Masa:');
	texto2.setAttribute('id','texto2');
	texto2.setAttribute('class','quincePixeles textoMasa');
	texto2.appendChild(t2);

	var boton2 = document.createElement('div');
	boton2.setAttribute('id','botonMasa');
	boton2.setAttribute('class','quincePixeles selectMasa');
	
	var pboton2 = document.createElement('p');
	var tBoton2 =document.createTextNode('Seleccionar');
	pboton2.setAttribute("id",'pboton2');
	pboton2.setAttribute('class','textoBoton');
	pboton2.appendChild(tBoton2);

	boton2.appendChild(pboton2);
	divBoton2.appendChild(boton2);
	divBoton2.appendChild(texto2);
//-----------------------------------------------------------------------------
	figurePizzaImg.appendChild(imgPizza);
	
	centrado.appendChild(divBoton1);
	centrado.appendChild(divBoton2);
	centrado.appendChild(divContinuar);
	centrado.appendChild(linea);
	centrado.appendChild(figurePizzaImg);
	centrado.appendChild(contenidoSuperior);
	contenidoPagina.appendChild(centrado);
	contenedorPrincipal.appendChild(contenidoPagina);
	cargado();
}
function cargarBarraLateral(){
	$('#sidebar').remove();	
	var contenedorPrincipal = document.getElementById('contenedorPrincipal');
	
	var centrado = document.getElementById('centrado');
	centrado.setAttribute('class','quincePixeles centradoMin');

	var contenidoPagina = document.getElementById('contenidoPagina');
	contenidoPagina.setAttribute('class','quincePixeles contenidoPaginaMin');
	
	var sidebarMax = document.createElement('div');
	sidebarMax.setAttribute('id', 'sidebar');
	sidebarMax.setAttribute('class','quincePixeles sidebarMax');

	var inferiorSidebar = document.createElement('div');
	inferiorSidebar.setAttribute('id','inferiorSidebar');
	inferiorSidebar.setAttribute('class','quincePixeles inferiorSidebar');	

	var contraer = document.createElement('a');
	var textoContraer =  document.createTextNode('Contraer');
	contraer.setAttribute("href","#");
	contraer.setAttribute("id","contraer");
	contraer.setAttribute("class","quincePixeles");
	contraer.appendChild(textoContraer);

	var figContraer = document.createElement('figure');
	figContraer.setAttribute("id","imagenContraer");
	figContraer.setAttribute("class","quincePixeles");

	var imgContraer = document.createElement("img"); 
	imgContraer.setAttribute("src","objetos/5-06.png");
//-------------------------------------------------------------
	var configuracion = document.createElement('a');
	var textoConfig =  document.createTextNode('Configuración');
	configuracion.setAttribute("href","#");
	configuracion.setAttribute("id","configuracion");
	configuracion.setAttribute("class","quincePixeles");
	configuracion.appendChild(textoConfig);

	var figConfig = document.createElement('figure');	
	figConfig.setAttribute("class","quincePixeles");

	var imgConfig = document.createElement("img"); 
	imgConfig.setAttribute("id","imagenConfig");
	imgConfig.setAttribute("src","objetos/7-06.png");
//-------------------------------------------------------------

	var menu = document.createElement("div");
	menu.setAttribute("id","menu");
	menu.setAttribute("class","quincePixeles");

	var promociones = document.createElement("a");
	var textoPromociones =  document.createTextNode('Promociones');
	promociones.setAttribute("href","#");
	promociones.setAttribute("id","promociones");
	promociones.setAttribute("class","quincePixeles selec");
	promociones.appendChild(textoPromociones);

	var figPromociones = document.createElement("figure");
	figPromociones.setAttribute("id","imagenPromociones");
	figPromociones.setAttribute("class","quincePixeles");

	var imgPromociones = document.createElement("img");
	imgPromociones.setAttribute('id','imgPromocionesBarra');
	imgPromociones.setAttribute("src","objetos/9-06.png");

	var alimentos = document.createElement("a");
	var textoAlimentos =  document.createTextNode('Alimentos y bebidas');
	alimentos.setAttribute("href","#");
	alimentos.setAttribute("id","alimentos");
	alimentos.setAttribute("class","quincePixeles");
	alimentos.appendChild(textoAlimentos);

	var figAlimentos = document.createElement("figure");
	figAlimentos.setAttribute("id","imagenAlimentos");
	figAlimentos.setAttribute("class","quincePixeles");

	var imgAlimentos = document.createElement("img");
	imgAlimentos.setAttribute('id','imgAlimentosBarra');
	imgAlimentos.setAttribute("src","objetos/4-06.png")

	var pizza  = document.createElement("a");
	var textoPizza =  document.createTextNode('Pizza');
	pizza.setAttribute("href","#");
	pizza.setAttribute("id","pizza");
	pizza.setAttribute("class","quincePixeles");
	pizza.appendChild(textoPizza);

	var figPizza = document.createElement("figure");
	figPizza.setAttribute("id","imagenPizza");
	figPizza.setAttribute("class","quincePixeles");

	var imgPizza = document.createElement("img");
	imgPizza.setAttribute('id','imgPizzaBarra');
	imgPizza.setAttribute("src","objetos/6-06.png");

	var otros  = document.createElement("a");
	var textoOtros =  document.createTextNode('Otros alimentos');
	otros.setAttribute("href","#");
	otros.setAttribute("id","otros");
	otros.setAttribute("class","quincePixeles");
	otros.appendChild(textoOtros);

	var figOtros = document.createElement("figure");
	figOtros.setAttribute("id","imagenOtros");
	figOtros.setAttribute("class","quincePixeles");

	var imgOtros = document.createElement("img");
	imgOtros.setAttribute('id','imgOtrosBarra');
	imgOtros.setAttribute("src","objetos/4-06.png")

	var bebidas  = document.createElement("a");
	var textoBebidas =  document.createTextNode('Bebidas');
	bebidas.setAttribute("href","#");
	bebidas.setAttribute("id","bebidas");
	bebidas.setAttribute("class","quincePixeles");
	bebidas.appendChild(textoBebidas);

	var figBebidas = document.createElement("figure");
	figBebidas.setAttribute("id","imagenBebidas");
	figBebidas.setAttribute("class","quincePixeles");

	var imgBebidas = document.createElement("img");
	imgBebidas.setAttribute('id','imgBebidasBarra');
	imgBebidas.setAttribute("src","objetos/3-06.png");

	var miCarrito  = document.createElement("a");
	var textoCarrito =  document.createTextNode('Mi carrito');
	miCarrito.setAttribute("href","#");
	miCarrito.setAttribute("id","miCarrito");
	miCarrito.setAttribute("class","quincePixeles");
	miCarrito.appendChild(textoCarrito);

	var figCarrito = document.createElement("figure");
	figCarrito.setAttribute("id","imagenCarrito");
	figCarrito.setAttribute("class","quincePixeles");

	var imgCarrito = document.createElement("img");
	imgCarrito.setAttribute('id','imgCarritoBarra');
	imgCarrito.setAttribute("src","objetos/2-06.png");
//-------------------------------------------------------------
//Sidebar inferior
	figConfig.appendChild(imgConfig);
	figContraer.appendChild(imgContraer);
	contraer.appendChild(figContraer);
	configuracion.appendChild(figConfig);
	inferiorSidebar.appendChild(contraer);
	inferiorSidebar.appendChild(configuracion);
//-------------------------------------------------------------
//Sidebar Menu
	figPromociones.appendChild(imgPromociones);
	figAlimentos.appendChild(imgAlimentos);
	figPizza.appendChild(imgPizza);
	figOtros.appendChild(imgOtros);
	figBebidas.appendChild(imgBebidas);
	figCarrito.appendChild(imgCarrito);

	promociones.appendChild(figPromociones);
	alimentos.appendChild(figAlimentos);
	pizza.appendChild(figPizza);
	otros.appendChild(figOtros);
	bebidas.appendChild(figBebidas);
	miCarrito.appendChild(figCarrito);

	menu.appendChild(promociones);
	menu.appendChild(alimentos);
	menu.appendChild(pizza);
	menu.appendChild(otros);
	menu.appendChild(bebidas);
	menu.appendChild(miCarrito);
//-------------------------------------------------------------	
//Sidebar Contenedor
	sidebarMax.appendChild(menu);
	sidebarMax.appendChild(inferiorSidebar);
	contenedorPrincipal.appendChild(sidebarMax);
	cargado();
}



