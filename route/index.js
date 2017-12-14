"use strict";
// route 文件
const fs = require('fs')
// import { readFileSync } from 'fs';
var baseUrl = '/hgg'

function sendHtml(path, res) {
  var file = 'static/slide_images/CMU-1_files/' + path

  // var options = {
  //   encoding: 'UTF-8',
  // }
  let data = fs.readFileSync(file)

  res.send(data)
  // res.send(new Buffer(data));
}

var image = {
  path: baseUrl + "/image/:sid",
  method: "get",
  func: function(req, res) {
    let sid = req.params.sid
    // console.log('sid', sid);
    // {filename, height, id, level, mpp, power, user_id, user_name, width}
    let o = {
      name: "123.tiff",
      height: 46000,
      id: sid,
      level: 17,
      mpp: 0.5,
      power: 20,
      tags: ['a', 'b', 'c'],
      "user": {
        "id": "597047c8aac439639a74cb6a",
        "name": "xiaoqi"
      },
      width: 32914
    }
    res.send({info: o})
  }
}


var jpegs = {
  path: baseUrl + "/image/:sid/:z/:x_y",
  method: "get",
  func: function(req, res) {
    let sid = req.params.sid
    let z = req.params.z
    let x_y = req.params.x_y
    // console.log('sid', sid);
    // console.log('z', z);
    // console.log('x_y', x_y);
    // {filename, height, id, level, mpp, power, user_id, user_name, width}
    let path = z + '/' + x_y
    // let path = req.params.path
    // console.log('path', path);
    sendHtml(path, res)
    // res.send('')
  }
}




var routes = [
  image,
  jpegs,
]

module.exports.routes = routes
