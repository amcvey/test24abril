
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

Chat.mostrar();