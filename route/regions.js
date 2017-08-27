const fs = require('fs');
const getId = require('../utils/getid');

const filename = './db/regions.json';


var get = {
  path: "/api/image/:sid/regions",
  method: "get",
  func: function(req, res) {
    let sid = req.params.sid
    // console.log('sid', sid);
    // {filename, height, id, level, mpp, power, user_id, user_name, width}
    let data = fs.readFileSync(filename, 'utf8')
    if (data == '') {
        data = JSON.stringify({regions:{}})
    }

    res.send(data)
  }
}



var post = {
  path: "/api/image/:sid/region",
  method: "post",
  func: function(req, res) {
    // let sid = req.params.sid
    // console.log('sid', sid);
    // console.log('req.body', req.body);
    // console.log('body type', typeof req.body);
    // {filename, height, id, level, mpp, power, user_id, user_name, width}
    let id = getId()
    let regionsdb = fs.readFileSync(filename, 'utf8')
    // console.log('regionsdb', regionsdb);
    // console.log('regionsdb', typeof regionsdb);
    if (regionsdb == '') {
        regionsdb = {regions:{}}
    } else {
        regionsdb = JSON.parse(regionsdb)
    }
    regionsdb.regions[id] = req.body.form
    // console.log('regionsdb', regionsdb);
    fs.writeFile(filename, JSON.stringify(regionsdb), function() {
        console.log('存入成功');
    })
    res.json({id})
  }
}





var put = {
  path: "/api/region/:rid",
  method: "put",
  func: function(req, res) {
    let id = req.params.rid
    // console.log('sid', sid);
    // console.log('req.body', req.body);
    // console.log('body type', typeof req.body);
    // {filename, height, id, level, mpp, power, user_id, user_name, width}
    let regionsdb = fs.readFileSync(filename, 'utf8')
    // console.log('regionsdb', regionsdb);
    // console.log('regionsdb', typeof regionsdb);
    regionsdb = JSON.parse(regionsdb)
    regionsdb.regions[id] = req.body.form
    // console.log('regionsdb', regionsdb);
    fs.writeFile(filename, JSON.stringify(regionsdb), function() {
        console.log('存入成功');
    })
    res.json({})
  }
}






var routes = [
    get,
    post,
    put
]

module.exports.routes = routes
