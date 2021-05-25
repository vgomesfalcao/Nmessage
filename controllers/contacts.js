module.exports = function (app) {
  const ContatosController = {
    index: function (req, res) {
      const usuario = req.session.usuario
      const params = { usuario }

      res.render('contacts/index', params)
    },
    create: function (req, res) {
      const {nome,email} = req.body
      const contato = {nome,email}
      const usuario = req.session.usuario
      usuario.contatos.push(contato)
      res.redirect('/contacts')
    },
    show: function (req,res){
      const id = req.params.id
      const contato = req.session.usuario.contatos[id]
      const params = {contato,id}
      res.render('contatos/show', params)
    },
    edit: function(req,res){
      const id = req.params.id
      const usuario = req.session.usuario
      const contato = usuario.contatos[id]
      const params = {usuario,contato,id}
      res.render('contatos/edit',params)
    },
    update: function(req,res){
      const contato = req.body.contato
      const usuario = req.session.usuario
      usuario.contatos[req.params.id] = contato
      res.redirect('/contatos')
    },
    destroy: function(req,res){
      const usuario = req.session.usuario
      const id = req.params.id
      usuario.contatos.splice(id,1)
      res.redirect('/contatos')
    }
  }
  return ContatosController
}
