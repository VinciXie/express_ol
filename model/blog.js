import {appendFileSync} from 'fs'

var basePath = 'db/'


const blogTemplate = function(form) {
  this.title = form.title || ''
  this.author = form.author || ''
  this.content = form.content || ''
}



var b = {
  data: '',
}

b.new = function(form) {
  let b = new blogTemplate(form)

  return b
}

console.log('b', b);

export { b as blog};
