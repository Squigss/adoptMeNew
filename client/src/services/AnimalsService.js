import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('animals', {
      params: {
        search: search
      }
    })
  },
  post (animal) {
    return Api().post('animals', animal)
  },
  show (animalId) {
    return Api().get(`animals/${animalId}`)
  }
}
