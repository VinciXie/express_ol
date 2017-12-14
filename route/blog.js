"use strict";
// const fs = require('fs')
// const blog = require('../model/blog')
// import { blog } from '../model/blog.js';

// console.log('blog', blog);

var add = {
  path: "/add",
  method: "post",
  func: function(req, res) {
    var form = req.body
    var b = blog.new(form)
    res.json(b)
  }
}

var routes = [
  add,
]

module.exports.routes = routes
