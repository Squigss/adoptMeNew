<template>
<v-container class="container-body" text-xs-center>
  <v-layout row wrap>
    <v-flex xs12>
      <h1>Welcome Back!</h1>
        <br>
          <button
            :to="{
              name: 'animals'
            }">
            Browse Animals for adoption
          </button>
          <br>
          <button
            @click="register"
            :to="{
              name: 'add-animal'
            }">
            Add an Animal to adopt
          </button>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
}
</script>

<style scoped>
h1 {
  padding-bottom: 2%;
}
</style>
