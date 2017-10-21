const db = require('mongoose')

const item = new db.Schema({
  name:  String
})

const Item = db.model('Item', item)
module.exports = Item
