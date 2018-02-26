const fs = require('fs');

const marks_filename = './db/marks.json';
const patches_filename = './db/patches.json';

function readJSONFile(file) {
  var data = fs.readFileSync(file, 'utf8')
  data = JSON.parse(data)
  if (data == '') {
    data = {}
  }
  return data
}


const routePatches = require('./patch');
// console.log('routePatches', routePatches);

function auth(data) {
  // console.log('auth', data);
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
  for (let route of routePatches.routes) {
    let { eventName, callback } = route
    socket.on(eventName, function (data) {
      socket.emit(eventName, callback(data) );
    })

  }

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
    // console.log('marks_get data');
    this.emit('marks_get', { marks: readJSONFile(marks_filename) })
  });

}


module.exports = onConnection;
