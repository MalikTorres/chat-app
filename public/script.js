// public/script.js
// Socket instance created
// const { io } = require('socket.io-client');
const socket = io();

// Requiring DOM elements
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messages = document.getElementById('messages');

function displayMessage(role, message) {
  const div = document.createElement('div');
  div.innerHTML = `<p><b> ${role === 'user' ? 'You' : 'Assistant'
  }: </b> ${message} </p>`;
  messages.appendChild(div);
  messages.scropTop = messages.scrollHeight;
}

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const message = messageInput.value;
  // Display's user message in chat
  displayMessage('user', message);

  socket.emit('sendMessage', message, (error) => {
    if(error) {
      return alert(error);
    }

    messageInput.value = '';
    messageInput.focus();
  });
});

socket.on('message', (message) => {
  displayMessage('assitant', message);
});
