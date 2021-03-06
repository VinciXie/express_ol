"use strict";
// route 文件
const fs = require('fs')
// import { readFileSync } from 'fs';

function sendHtml(path, res) {
  var file = 'slide_images/CMU-1_files/' + path;
  // var options = {
  //   encoding: 'UTF-8',
  // }
  let data = fs.readFileSync(file)

  res.send(data)
  // res.send(new Buffer(data));
}

var image = {
  path: "/image/:sid",
  method: "get",
  func: function(req, res) {
    let sid = req.params.sid
    console.log('sid', sid);
    // {filename, height, id, level, mpp, power, user_id, user_name, width}
    let o = {
      name: "123.tiff",
      info: {
        level: 17,
        mpp: 0.45,
        power: 20,
        width: 40960,
        height: 40960,
      },
      id: sid,
      tags: ['a', 'b', 'c'],
      "user": {
        "id": "597047c8aac439639a74cb6a",
        "name": "xiaoqi"
      },
    }
    res.json(o)
  }
}

var jpegs = {
  path: "/image/:sid/:z/:x_y",
  method: "get",
  func: function(req, res) {
    const sid = req.params.sid
    const z = req.params.z
    if ( isNaN( parseInt(z) ) ) {
      return console.log('z', z);
    }

    const x_y = req.params.x_y
    // console.log('sid', sid);
    // console.log('z', z);
    // console.log('x_y', x_y);
    // {filename, height, id, level, mpp, power, user_id, user_name, width}
    const path = z + '/' + x_y
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
