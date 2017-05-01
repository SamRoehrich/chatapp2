const app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile(__dirname +'/public/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

// io.on('connection', function (socket) {
//   console.log('A user connected');
//   socket.on('disconnect', function() {
//     console.log('User disconnected');
//   });
// });

http.listen(3000, function() {
  console.log('Server up on port 3000');
});
