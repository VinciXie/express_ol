const express = require('express');
const app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);

const fs = require('fs')

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static('fe'));
app.use(express.static('slide_images'));
// app.use(bodyParser.urlencoded({ extended: true }));
// 这个是用来解析 form 表单的


const baseurl = '/pi'


const registerRoutes = function(app, routes) {
    for (var i = 0; i < routes.length; i++) {
        var route = routes[i]
        // 下面这段是重点
        app[route.method](baseurl + route.path, route.func)
    }
}

// var method = 'get'
// app[method]('/', function(req, res) {
//
// })

app.get('/os', function (req, res) {
  console.log('req.path', req.path);
  // console.log('req.params', req.params);
  let data = fs.readFileSync('fe/index.html', 'utf8');

  res.send(data);
})

// app.get('/:id', function (req, res) {
//   console.log('req.path', req.path);
//   console.log('req.params', req.params);
//   console.log('是 /:id 接受到了');
//   res.send({})
// })

// app.get('/api/', function (req, res) {
//   console.log('是 /api 接受到了');
//   res.send('是 /api 接受到了')
// })


// 导入 route/index.js 的所有路由数据
const routeIndex = require('./route/index')
// routeIndex 是 route 文件夹 index.js 文件 exports 的一个 数组
registerRoutes(app, routeIndex.routes)

// 导入 route/marks.js 的所有路由数据
const routeMarks = require('./route/marks')
// routeMarks 是 route 文件夹 marks.js 文件 exports 的一个 数组
registerRoutes(app, routeMarks.routes)

// 导入 route/regions.js 的所有路由数据
const routeRegions = require('./route/regions')
// routeRegions 是 route 文件夹 regions.js 文件 exports 的一个 数组
registerRoutes(app, routeRegions.routes)

// 导入 route/patchs.js 的所有路由数据
const routePatchs = require('./route/patchs')
// routePatchs 是 route 文件夹 patchs.js 文件 exports 的一个 数组
registerRoutes(app, routePatchs.routes)

// 导入 route/chat.js 的所有路由数据
const routeChat = require('./route/chat')
// routeMarks 是 route 文件夹 marks.js 文件 exports 的一个 数组
registerRoutes(app, routeChat.routes)



const onConnection = require('./route_socket');
// console.log('onConnection', onConnection);
io.on('connection', onConnection);


const hostname = '127.0.0.1';
const port = 9001;

http.listen(port, hostname, function() {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
})
