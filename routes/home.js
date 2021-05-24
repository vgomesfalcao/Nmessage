module.exports = (app)=>{
  const home = app.controllers.home
  app.get('/', home.index)
  app.post('/login',hode.login)
  app.get('/sair', home.logout)
}