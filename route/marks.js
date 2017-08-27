"use strict";
// route 文件
const fs = require('fs');
const getId = require('../utils/getid');

const filename = './db/marks.json';



var get = {
  path: "/api/image/:sid/marks",
  method: "get",
  func: function(req, res) {
    let sid = req.params.sid
    // console.log('sid', sid);
    // {filename, height, id, level, mpp, power, user_id, user_name, width}
    let data = fs.readFileSync(filename, 'utf8')
    if (data == '') {
        data = JSON.stringify({marks:{}})
    }
    res.send(data)
  }
}


var post = {
  path: "/api/image/:sid/mark",
  method: "post",
  func: function(req, res) {
    // let sid = req.params.sid
    // console.log('sid', sid);
    // console.log('req.body', req.body);
    // console.log('body type', typeof req.body);
    // {filename, height, id, level, mpp, power, user_id, user_name, width}
    let id = getId()
    let marksdb = fs.readFileSync('./db/marks.json', 'utf8')
    // console.log('marksdb', marksdb);
    // console.log('marksdb', typeof marksdb);
    if (marksdb == '') {
        marksdb = {marks:{}}
    } else {
        marksdb = JSON.parse(marksdb)
    }
    marksdb.marks[id] = req.body.form
    // console.log('marksdb', marksdb);
    fs.writeFile(filename, JSON.stringify(marksdb), function() {
        console.log('存入成功');
    })
    res.json({id})
  }
}





var marks = [
    get,
    post
]

module.exports.routes = marks
