const db = {}

db.mongoose = require('mongoose')
db.mongoose.set('debug', true);
db.mongoose.connect('mongodb://localhost/WebAppTest', { useMongoClient: true })

// Add models
db.Item = require('./Item')

module.exports = db
