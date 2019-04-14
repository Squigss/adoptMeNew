<template>
  <v-layout column>
      <h1>Good Job! Upload successful</h1>
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
