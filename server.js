
let express = require('express');

let app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
// var port = process.env.PORT || 8080;

let server = app.listen(3000);

// to include my little game
app.use(express.static('public'));

console.log("My socket server is a go.");

let socket = require('socket.io');

let io = socket(server);


io.sockets.on('connection', newConnection);

function newConnection(socket) {
  console.log("new connection " + socket.id);
  socket.on('player', playerMessage);

  function playerMessage(data) {
    data.id = socket.id;
    socket.broadcast.emit('player', data);

    // this emits to every other socket and itself
    // io.sockets.emit('player' data)
  }


}
