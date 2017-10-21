const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()

// Set env flag
if (process.argv[2] === "DEBUG") app.env = "DEBUG"

// Debug things…
if (app.env === "DEBUG") {
  app.use(morgan('dev'))
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Load controllers
require('./controllers')(app)

app.listen(3000, function () {
  console.log(`Express server started in ${app.env} mode.`)
})
