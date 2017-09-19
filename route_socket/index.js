

function onConnection(socket) {

  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('ferret', function(name, fn) {
    console.log('name', name);
    console.log('fn', fn);

    setTimeout(function () {

      fn(' woot!!! ');

    }, 1000);

  });

}


module.exports = onConnection;
