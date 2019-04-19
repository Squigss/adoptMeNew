<template>
  <v-container class="text-xs-center">
    <v-layout row wrap>
      <v-flex xs12>
          <h1>Login</h1>
          <input
            type = "email"
            name = "email"
            v-model="email"
            placeholder= "email"/>
          <br>
          <br>
          <input
            type = "password"
            name = "password"
            v-model="password"
            placeholder= "password"/>
          <br>
          <br>
          <div class="error" v-html="error"/>
          <br>
          <button
            @click="login">
            Login
          </button>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>
