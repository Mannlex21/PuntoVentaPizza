function ocultarSliderbar() {
	$('#sidebar').remove();
	console.log("entro ocultarSliderbar");
	var contenedorPrincipal = document.getElementById('contenedorPrincipal');
	
	var inferiorSidebar = document.createElement('div');
	inferiorSidebar.setAttribute('id','inferiorSidebar');
	inferiorSidebar.setAttribute('class','quincePixeles inferiorSidebar');

//-------------------------------
	var figExpandir = document.createElement('figure');
	figExpandir.setAttribute("id","expandir");
	figExpandir.setAttribute("class","quincePixeles");	

	var imgExpandir = document.createElement('img');
	imgExpandir.setAttribute("id","imagenExpandir");
	imgExpandir.setAttribute("src","objetos/10-06.png");

	var figConfig = document.createElement('figure');
	figConfig.setAttribute("id","configuracion");
	figConfig.setAttribute("class","quincePixeles");

	var imgConfig = document.createElement('img');
	imgConfig.setAttribute("id","imagenConfigMin");
	imgConfig.setAttribute("src","objetos/7-06.png");
//-------------------------------
	var menu = document.createElement("div");
	menu.setAttribute("id","menu");
	menu.setAttribute("class","quincePixeles");

	var figPromociones = document.createElement('figure');
	figPromociones.setAttribute("id","promociones");
	figPromociones.setAttribute("class","quincePixeles");

	var imgPromociones = document.createElement("img");
	imgPromociones.setAttribute("id","imagenPromociones");
	imgPromociones.setAttribute("src","objetos/1-06.png");

	var figAlimentos = document.createElement("figure");
	figAlimentos.setAttribute("id","alimentos");
	figAlimentos.setAttribute("class","quincePixeles");

	var imgAlimentos = document.createElement("img");
	imgAlimentos.setAttribute("id","imagenAlimentos");
	imgAlimentos.setAttribute("src","objetos/4-06.png");

	var figCarrito = document.createElement("figure");
	figCarrito.setAttribute("id","carrito");
	figCarrito.setAttribute("class","quincePixeles");

	var imgCarrito = document.createElement("img");
	imgCarrito.setAttribute("id","imagenCarrito");
	imgCarrito.setAttribute("src","objetos/2-06.png");
//-------------------------------
	var sidebarMin = document.createElement('div');
	sidebarMin.setAttribute('id', 'sidebar');
	sidebarMin.setAttribute('class','quincePixeles sidebarMin');
	
	var contenidoPagina = document.getElementById('contenidoPagina');
	contenidoPagina.setAttribute('class','quincePixeles');
	$("#contenidoPagina").addClass("contenidoPaginaMax");
	
	var centrado = document.getElementById('centrado');
	centrado.setAttribute('class','quincePixeles');
	$("#centrado").addClass("centradoMax");

	figExpandir.appendChild(imgExpandir);
	figConfig.appendChild(imgConfig);
	figPromociones.appendChild(imgPromociones);
	figAlimentos.appendChild(imgAlimentos);
	figCarrito.appendChild(imgCarrito);

	inferiorSidebar.appendChild(figExpandir);
	inferiorSidebar.appendChild(figConfig);

	menu.appendChild(figPromociones);
	menu.appendChild(figAlimentos);
	menu.appendChild(figCarrito);

	sidebarMin.appendChild(menu);
	sidebarMin.appendChild(inferiorSidebar);
	contenedorPrincipal.appendChild(sidebarMin);
	cargado();
}
function mostrarSliderbar(){
	$('#sidebar').remove();	
	var contenedorPrincipal = document.getElementById('contenedorPrincipal');
	
	var centrado = document.getElementById('centrado');
	centrado.setAttribute('class','quincePixeles');
	$("#centrado").addClass("centradoMin");

	var contenidoPagina = document.getElementById('contenidoPagina');
	contenidoPagina.setAttribute('class','quincePixeles');
	$("#contenidoPagina").addClass("contenidoPaginaMin");
	
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
	promociones.setAttribute("class","quincePixeles");
	promociones.appendChild(textoPromociones);

	var figPromociones = document.createElement("figure");
	figPromociones.setAttribute("id","imagenPromociones");
	figPromociones.setAttribute("class","quincePixeles");

	var imgPromociones = document.createElement("img");
	imgPromociones.setAttribute("src","objetos/1-06.png");

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