module.exports = function (app) {
  const ContatoController = {
    index: function (req, res) {
      const usuario = req.session.usuario
      const params = { usuario }
      res.render('contacts/index', params)
    },
  }
  return ContatoController
}
