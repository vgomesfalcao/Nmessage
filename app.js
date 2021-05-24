const express = require('express')
const load = require('express-load')
const path = require('path')
const methodOverride = require('method-override')
const app = express()
const session = require('express-session')

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride())
app.use(express.static(path.join(__dirname, '/public')))

load('models').then('controllers').then('routes').into(app)

app.listen(3000, () => {
  console.log('Nmessage no ar.')
})
