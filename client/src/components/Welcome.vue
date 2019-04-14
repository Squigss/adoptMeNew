<template>
  <v-layout column>
      <h1>Welcome Back!</h1>
        <br>
          <v-btn
            class="cyan" dark
            :to="{
              name: 'animals'
            }">
            Browse Animals for adoption
          </v-btn>
          <br>
          <v-btn
            class="cyan" dark
            @click="register"
            :to="{
              name: 'add-animal'
            }">
            Add an Animal to adopt
          </v-btn>
  </v-layout>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
