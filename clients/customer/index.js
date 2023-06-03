'use strict';

const { io } = require('socket.io-client');

let socket = io('http://localhost:3001');

const message = 'Test message';

setInterval(() => {
  socket.emit('sendMessage', message, (error) => {
    if(error) {
      return console.error(error.message);
    }
  });
  console.log(`Message sent: ${message}`);
}, 5000);

socket.on('message', (message) => {
  console.log(`assistant: ${message}`);
});


