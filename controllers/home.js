module.exports = function (app) {
  const Usuario = app.models.usuario

  const HomeController = {
    index: function (req, res, next) {
        res.render('home/index')
    },
    login: function (req, res) {
      const nome = req.body.nome
      const email = req.body.email
      if (email && nome) {
        req.session.usuario = {nome,email}
        res.redirect('/contacts')
      } else {
        res.redirect('/')
      }
    },
    logout: function (req, res) {
      req.session.destroy()
      res.redirect('/')
    },
  }
  return HomeController
}
