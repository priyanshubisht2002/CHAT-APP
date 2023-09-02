const express = require('express');
const expressWs = require('express-ws');
const app = express();
const wsInstance = expressWs(app);

app.ws('/chat', (ws, req) => {
  ws.on('message', (msg) => {
    // Broadcast the message to all connected clients
    wsInstance.getWss().clients.forEach((client) => {
      client.send(msg);
    });
  });
});

app.use(express.static('public')); // Serve your HTML, CSS, and JavaScript files

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
