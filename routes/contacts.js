module.exports = function (app) {
  const authenticator = require('../middleware/authenticator')
  const { contacts } = app.controllers;
  app.get('/contacts', authenticator, contacts.index)
  app.get('/contact/:id', authenticator, contacts.show)
  app.post('/contact', authenticator, contacts.create)
  app.get('contact/:id/edit', authenticator, contacts.edit)
  app.put('/contact/:id', authenticator, contacts.update)
  app.delete('/contact/:id', authenticator, contacts.destroy)
}
