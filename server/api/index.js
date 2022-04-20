const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/teas', require('./teas'))
router.use('/cart', require('./cart'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
