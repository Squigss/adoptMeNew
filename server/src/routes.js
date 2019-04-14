const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const AnimalsController = require('./controllers/AnimalsController')

module.exports = (app) => {
   app.post('/register', 
      AuthenticationControllerPolicy.register,
      AuthenticationController.register)
    
   app.post('/login', 
      AuthenticationController.login)
   
   app.get('/animals',
      AnimalsController.index)
   app.post('/animals', 
      AnimalsController.post)
   app.get('/animals/:animalId', 
      AnimalsController.show) 
}
