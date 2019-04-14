import Api from '@/services/Api'

export default {
  index () {
    return Api().get('animals')
  },
  post (animal) {
    return Api().post('animals', animal)
  },
  show (animalId) {
    return Api().get(`animals/${animalId}`)
  }
}
