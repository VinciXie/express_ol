"use strict";
// route 文件
const fs = require('fs')
// import { readFileSync } from 'fs';

function sendHtml(path, res) {
  var file = 'static/slide_images/CMU-1_files/' + path

  // var options = {
  //   encoding: 'UTF-8',
  // }
  let data = fs.readFileSync(file)

  res.send(data)
  // res.send(new Buffer(data));
}


var patient = {
  path: "/api/patient/:pid",
  method: "get",
  func: function(req, res) {
    let pid = req.params.pid
    // console.log('pid', pid);
    // {filename, height, id, level, mpp, power, user_id, user_name, width}
    var ob = {
        "id": "59705143aac439648f625a28",
        "images": [
            {
                "filename": "2017-06-10_12.54.03.ndpi",
                "id": "59705177aac439648f625a29",
                "patient": {
                    "id": "59705143aac439648f625a28",
                    "number": "234235234"
                },
                "user": {
                    "id": "597047c8aac439639a74cb6a",
                    "name": "\u5f6d\u7389\u6797"
                },
                tag: 'H&E'
            },
            {
                "filename": "2017-06-10_12.54.05.ndpi",
                "id": "59705177aac439648f625a79",
                "patient": {
                    "id": "59705143aac449648f625a28",
                    "number": "234205234"
                },
                "user": {
                    "id": "59704728aac439639a74cb6a",
                    "name": "\u5f6d\u7389\u6797"
                },
                tag: 'Ki-67'

            },
        ],
      "info": {
        "acceptDate": "2017-07-27T16:00:00.000Z",
        "age": 34,
        "brief": "\u9b42\u7275\u68a6\u8426\u683d4",
        "detail": "\u775b",
        "diagnose": "diagnose2",
        "gender": "male",
        "hospital": "shanghai",
        "id": "234235234",
        "imageInfo": "\u4e00\u4e8c\u4e09",
        "married": "1",
        "name": "\u8303\u5fb7\u8428",
        "part": "liver",
        "sendDate": "2017-07-19T16:00:00.000Z"
      },
      "number": "234235234",
      "tag": "gastric carcinoma"
    }
    res.send(ob)
  }
}

var image = {
  path: "/api/image/:sid",
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
      "patient": {
        "id": "59705143aac439648f625a28",
        "number": "234235234"
      },

      "user": {
        "id": "597047c8aac439639a74cb6a",
        "name": "\u5f6d\u7389\u6797"
      },
      width: 32914
    }
    res.send(o)
  }
}


var jpegs = {
  path: "/api/image/:sid/:z/:x_y",
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


var patchs = {
  path: "/api/image/:sid/patchs",
  method: "get",
  func: function(req, res) {

    var ob = {}
    ob.patchs = {
      "adfad2453456": "aaa",
      "adfadfa53456": "bb",
      "adf467da3456": "bbb",
      "ad2345ddrthe": "ccc",
    }

    res.send(ob)
  }
}



var routes = [
  patient,
  image,
  jpegs,
  patchs
]

module.exports.routes = routes
