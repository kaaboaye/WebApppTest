
module.exports = (app) => {
  // Add controllers
  app.use('/users', require('./users'))
  app.use('/items', require('./items'))
}
