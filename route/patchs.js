"use strict";
// route 文件
const fs = require('fs');
const getId = require('../utils/getid');

const filename = './db/patchs.json';



var getPatchGroups = {
  method: "get",
  path: "/patchs",
  func: function(req, res) {

    let data = fs.readFileSync(filename, 'utf8')
    if (data == '') {
      res.json({patchs:{}})
    } else {
      res.send(data)
    }
  }
}


var post = {
  path: "/patch",
  method: "post",
  func: function(req, res) {
    // let sid = req.params.sid
    // console.log('sid', sid);
    // console.log('req.body', req.body);
    // console.log('body type', typeof req.body);
    // {filename, height, id, level, mpp, power, user_id, user_name, width}
    let id = getId()
    let patchsdb = fs.readFileSync('./db/patchs.json', 'utf8')
    // console.log('patchsdb', patchsdb);
    // console.log('patchsdb', typeof patchsdb);
    if (patchsdb == '') {
        patchsdb = {patchs:{}}
    } else {
        patchsdb = JSON.parse(patchsdb)
    }
    patchsdb.patchs[id] = req.body.form
    // console.log('patchsdb', patchsdb);
    fs.writeFile(filename, JSON.stringify(patchsdb), function() {
        console.log('存入成功');
    })
    res.json({id})
  }
}


const region_get = {
  path: "/api/patch/:gpid/image/:sid/regions",
  method: 'get',
  func: function (req, res) {
    let pgid = req.params.pgid
    let sid = req.params.sid
    console.log('pgid', pgid);
    console.log('sid', sid);
    console.log('还要继续往下写呢');
    let data = fs.readFileSync(filename, 'utf8')
    let regions = data.regions

    res.send({})
  }
}




var patchs = [
    getPatchGroups,
    post
]

module.exports.routes = patchs
