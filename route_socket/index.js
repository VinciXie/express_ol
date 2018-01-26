const fs = require('fs');

const marks_filename = './db/marks.json';


function auth(data) {
  // console.log('auth', data);
}

function patchs_get() {
  console.log('patchs_get', this);
  this.emit({patchs:{}})
}


function onConnection(socket) {

  socket.emit('connect', 'aaaa')
  socket.emit('event', 'aaaa')

  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });


  socket.on('auth', auth);

  // patch 部分
  socket.on('patchs_get', function (data) {
    console.log('patchs_get', data);
    socket.emit('patchs', 'aa');
  });

  //  视野部分
  socket.on('image_regions_get', function () {
    // console.log('image_regions_get, data');
  });


  socket.on('image_region_post', function (data) {
    console.log('image_region_post, data', data);
    let form = data.form
    let thumbnail = data.thumbnail
  });



  // mark 部分
  socket.on('marks_get', function () {
    console.log('marks_get data');
    let marks = fs.readFileSync(marks_filename, 'utf8')
    if (marks == '') {
      marks = {}
    }
    this.emit('marks_get', { marks })
  });

}


module.exports = onConnection;
