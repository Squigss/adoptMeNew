const {Animal} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const animal = await Animal.findAll({
          where: {}
        })
      res.send(animal)
    } catch (err) {
      res.status(500).send({
        error: 'System Error when trying to get the animals'
      })
      }  
    },
  async post (req, res) {
    try {
      const animal = await Animal.create(req.body)
      res.send(animal)
    } catch (err) {
      res.status(500).send({
        error: 'System Error when trying to create the animal profile'
      })
    }  
  },
  async show (req, res) {
    console.log(req.params.animalId)
    try {
      console.log(req.params.animalId)
      const animal = await Animal.findAll({
        where: {"id": req.params.animalId}
      })
      //const animal = await Animal.findById(req.params.animalId)
      res.send(animal)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the animal'
      })
    }
  }
}