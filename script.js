// script.js
const socket = new WebSocket('ws://localhost:3000/chat');
const messages = document.getElementById('messages');
const input = document.getElementById('input');
const sendButton = document.getElementById('send');
let messageCount = 0;

socket.addEventListener('message', (event) => {
  const message = document.createElement('li');
  message.textContent = event.data;
  
  // Check if the message count is even or odd and assign a class accordingly
  if (messageCount % 2 === 0) {
    message.classList.add('even-message');
  } else {
    message.classList.add('odd-message');
  }

  messageCount++;

  messages.appendChild(message);
});

sendButton.addEventListener('click', () => {
  const message = input.value;
  socket.send(message);
  input.value = '';
});
document.getElementById('input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent Enter key from submitting the form
    }
  });
