<template>
  <v-layout column>
      <h1>Thank you for registering</h1>
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
              name: 'login'
            }">
            Login to upload an animal for adoption
          </v-btn>
  </v-layout>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
