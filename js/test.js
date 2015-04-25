
function Chat(mensaje) {
	this.mensaje = mensaje;
}

Chat.chat = [];

Chat.enviar = function(event) {
	event.preventDefault();
	var mensaje = document.getElementById('mensaje').value;
	var chat = new Chat(mensaje);
	Chat.chat.push(chat);
	Chat.mostrar();
	console.log(Chat.chat);
}

Chat.mostrar = function () { //estamos haciendo una plantilla iterando los arreglo con .map
	var comentarios = '';
	Chat.chat.map(function(elemento,indice) {
		comentarios = comentarios + '<section>'
		+ elemento.mensaje +'</section>';

	});
document.getElementById('comentarios').innerHTML = comentarios;
}

Chat.guardar = function() {
	var chat = Chat.chat;
	var chatEncode = JSON.stringify(chat); // lo transforma en un string por que si no no lo soporta
	localStorage.setItem('chat', chatEncode); // guardando base de datos local
}

Chat.obtenerChat = function() {
	var chatEncode = localStorage.getItem('chat'); //chat encode hace ref a los que estan codificados en string
	if (chatEncode != null) {
		var chat = JSON.parse(chatEncode);
		Chat.chat = chat;
	}
	else {
		var chat = JSON.parse(chatEncode);
		Chat.chat = [];
	}

}
Chat.obtenerChat();
Chat.mostrar();