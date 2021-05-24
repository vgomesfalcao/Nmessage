module.exports = function (app) {
  const Usuario = app.models.usuario;

  const HomeController = {
    index: function (req, res, next) {
      res.render("home/index");
    },
    login: function (req, res) {
      const email = req.body.usuario.email;
      const nome = req.body.usuario.nome;
      if (email && nome) {
        const usuario = req.body.usuario;
        req.session.usuario = usuario;
        res.redirect("/contatos");
      } else {
        res.redirect("/");
      }
    },
    logout: function (req, res) {
      req.session.destroy();
      res.redirect("/");
    },
  };
  return HomeController;
};
