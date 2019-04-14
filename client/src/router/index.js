import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Animals from '@/components/Animals'
import AddAnimal from '@/components/AddAnimal'
import ViewAnimal from '@/components/ViewAnimal'
import Welcome from '@/components/Welcome'
import RegisterConfirmation from '@/components/RegisterConfirmation'
import AnimalUploaded from '@/components/AnimalUploaded'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/register/confirmation',
      name: 'register-confirmation',
      component: RegisterConfirmation
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/animals',
      name: 'animals',
      component: Animals
    },
    {
      path: '/animal/add',
      name: 'add-animal',
      component: AddAnimal
    },
    {
      path: '/animal/uploaded',
      name: 'animal-uploaded',
      component: AnimalUploaded
    },
    {
      path: '/animals/:animalId',
      name: 'animal',
      component: ViewAnimal
    }
  ]
})
