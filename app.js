const express = require('express');
const app = express()

app.use(express.static('static'))

var bodyParser = require('body-parser');

app.use(bodyParser.json());


// app.use(bodyParser.urlencoded({ extended: true }));
// 这个是用来解析 form 表单的



const registerRoutes = function(app, routes) {
    for (var i = 0; i < routes.length; i++) {
        var route = routes[i]
        // 下面这段是重点
        app[route.method](route.path, route.func)
    }
}

// var method = 'get'
// app[method]('/', function(req, res) {
//
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


var server = app.listen(9001, function() {
    var host = server.address().address;
    var port = server.address().port;

   console.log('Example app listening at http://%s:%s', host, port);
})