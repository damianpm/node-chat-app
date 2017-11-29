var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function() {
  console.log('Disconneted from server');
});

socket.on('newMessage', function(message) {
  console.log('createMessage', message);
});
