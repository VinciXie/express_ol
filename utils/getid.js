const nanoid = require('nanoid');

function getId() {
    let date = (new Date()).getTime()  / 1000
    let time = parseInt(date)
    let time16 = time.toString(16)
    // console.log('date', parseInt(date));
    // console.log('time16', time16);
    let id = time16 + nanoid()
    console.log('id', id);
    return id

};
module.exports = getId;
