const router = require('express').Router()

router.get('/', (req, res, next) => {
  const r = {
    test: "no tak"
  }
  res.json(r)
})

module.exports = router
