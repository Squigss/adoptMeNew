<template>
  <v-container mb-5>
  <v-toolbar class="header" flat fixed>
    <v-toolbar-title class="Title"
      :to="{
        name: 'root'
      }">
        Please Adopt Me
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items class='toolbarItems'>
      <v-btn
        flat
        :to="{
          name: 'animals'
        }">
        Browse
      </v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        :to="{
          name: 'login'
        }">
        Login
      </v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        :to="{
          name: 'register'
        }">
        Sign Up
      </v-btn>
      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat
        @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  </v-container>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
.header {
  background-color: transparent!important;
  border-color: transparent!important;
  height: 20%;
}
</style>
