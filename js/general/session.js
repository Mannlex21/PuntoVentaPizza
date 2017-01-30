var keyPizzeria1= "mFZZOOkT0EdExK5ld2HnzPAoIOm1";
$(document).ready(function() {
	if(localStorage.getItem("sessionKey")==null){
		pedidoKey = firebase.database().ref('administrador/'+keyPizzeria1+'/pizzeria1').child('pedidos').push().key;
		localStorage.setItem("sessionKey", pedidoKey);
		console.log("Se creo sesion: "+localStorage.getItem("sessionKey"));	
	}else{
		console.log("Sesion: "+localStorage.getItem("sessionKey"));
	}
});
