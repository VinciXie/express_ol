"use strict";
// route 文件
// const fs = require('fs')


var get = {
  path: "/mark/:mid/chat",
  method: "get",
  func: function(req, res) {
    // {filename, height, id, level, mpp, power, user_id, user_name, width}
    let o = {
      "marks": {
        "5971ba41aac439714f46eb63": {
          "from": {
              id: '13412341',
              name: 'fff'
          },
          to: {
              id: '555dddd',
              name: '1111'
          },
          "msg": "2123423 sdfgsdfg,sdfgsdfg,adfadf",

        },

      }
    }
    res.send(o)
  }
}




var chat = [
    get,

]

module.exports.routes = chat
