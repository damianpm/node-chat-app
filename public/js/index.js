var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Damian',
    text: 'Hi bro, sup!!'
  });
});

socket.on('disconnect', function() {
  console.log('Disconneted from server');
});

socket.on('newMessage', function(message) {
  console.log('createMessage', message);
});
