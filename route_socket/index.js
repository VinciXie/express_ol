function auth(data) {
  // console.log(data);
}

function patchs_get() {
  console.log('patchs_get', this);
  this.emit({patchs:{}})
}


function onConnection(socket) {

  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });


  socket.on('auth', auth);

  socket.on('patchs_get', function () {
    console.log('patchs_get');
    socket.emit('patchs', 'aa');
  });
  //
  // socket.on('patchs_get', patchs_get);
  //
  // socket.on('patchs_get', patchs_get);

}


module.exports = onConnection;
