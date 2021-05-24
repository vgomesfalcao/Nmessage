module.exports = function (app) {
  const contacts = app.controllers.contacts
  app.get('/contacts', contacts.index)
}
