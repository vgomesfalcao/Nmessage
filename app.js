const express = require('express')
const app = express()
const load = require('express-load')
// const error = require('./middleware/error')
const path = require('path')
const methodOverride = require('method-override')
const session = require('express-session')
const server  = require('http').createServer(app)
const io = require('socket.io')(server, {
  cors: {
    origin: "https://nmessage.herokuapp.com/",
    methods: ["GET", "POST"],
    allowedHeaders: ["vini-header"],
    credentials: true
  }
})


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

// app.use(error.notFound)
// app.use(error.serverError)

load('models').then('controllers').then('routes').into(app)

io.sockets.on('connection', client => {
  client.on('send-server', data => {
    const msg = '<b>' + data.nome + '</b>' + data.msg + '<br>'
    client.emit('send-client', msg)
    client.broadcast.emit('send-client',msg)
  })
})

server.listen(process.env.PORT || 3000, () => {
  console.log('Nmessage no ar.')
})
