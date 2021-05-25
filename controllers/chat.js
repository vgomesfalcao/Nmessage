module.exports = (app) => {

  const ChatController = {
    index: (req, res) => {
        const resultado = {
          email: req.params.email,
          usuario: req.session.usuario
        }
        console.log(resultado)
        res.render('chat/index', resultado)
    },
  }
  return ChatController
}
