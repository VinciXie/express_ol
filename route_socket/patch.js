const fs = require('fs');
const nanoid = require('nanoid');
const patches_filename = './db/patches.json';

function readJSONFile(file) {
  var data = fs.readFileSync(file, 'utf8')
  data = JSON.parse(data)
  if (data == '') {
    data = {}
  }
  console.log('type data', typeof data);
  return data
}

var getGroups = {
  eventName: 'patchgroups_get',
  callback: function (data) {
    return { patchgroups: readJSONFile(patches_filename) }
  }
}

var addGroup = {
  eventName: 'patchgroup_post',
  callback: function (data) {
    const pgid = nanoid()
    const form = data.form
    var pgs = readJSONFile(patches_filename)
    pgs[pgid] = form
    fs.writeFile(patches_filename, JSON.stringify(pgs), (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
    return { patchgroup: { [pgid]: form }}
  }
}

var deleteGroup = {
  eventName: 'patchgroup_delete',
  callback: function (data) {
    const id = data.id
    var pgs = readJSONFile(patches_filename)
    delete pgs[id]
    fs.writeFile(patches_filename, JSON.stringify(pgs), (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
    return { id, code: 200 }
  }
}

var patchRoute = [
  getGroups,
  addGroup,
  deleteGroup,
]


module.exports.routes = patchRoute
