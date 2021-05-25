module.exports = (app) => {
  const chat = app.controllers.chat
  app.get('/chat/:email', chat.index)
}
