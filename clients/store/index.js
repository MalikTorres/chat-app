'use strict';

const { io } = require('socket.io-client');

let socket = io('http://localhost:3001');

// socket.emit('getHistory')

socket.on('message', (payload) => {
  console.log(`User messsage: ${payload}`);
});
