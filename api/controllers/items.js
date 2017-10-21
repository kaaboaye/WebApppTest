const router = require('express').Router()
const db = require('../db')

router.get('/', (req, res, next) => {
  db.Item.find({}, function(err, items) {
    res.json(items)
  })
})

router.post('/', (req, res, next) => {
  db.Item.create({ name: req.body.name }, function (err, item) {
    if (err) res.status(500).send(err)

    res.status(204).send()
  })
})

router.delete('/:id', (req, res, next) => {
  db.Item.remove({ _id: req.params.id }, function (err, item) {
    if (err) res.status(500).send(err)

    res.status(204).send()
  })
})

module.exports = router
