 var socket = io();

 socket.on('connect', function() {
     console.log('conectado');
 });


 socket.on('disconnect', function() {
     console.log('Perdimos conexion');
 });

 //Enviar informacion
 socket.emit('enviarMensaje', {
     usuario: 'Jony',
     mensaje: 'Hola mundo'
 }, function(resp) {
     console.log('Respuesta server', resp);
 });

 //Escuchar informacion
 socket.on('enviarMensaje', function(mensaje) {
     console.log('servidor', mensaje);
 })