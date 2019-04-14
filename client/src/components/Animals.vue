<template>
  <v-layout column>
      <div
         v-for="animal in animals"
         :key="animal.id">
          <img class="animal-image" :src="animal.imageURL"/>
          <div class="animal-info">
            {{animal.id}} -
            {{animal.name}} -
            {{animal.age}} -
            {{animal.breed}} -
            {{animal.location}}
          <v-btn
            dark
            class="cyan"
            @click="naviguateTo({
              name: 'animal',
              params: {
                 animalId: animal.id
              }
            })">
              More info
          </v-btn>
        </div>
      </div>
  </v-layout>
</template>

<script>
import AnimalsService from '@/services/AnimalsService'
export default {
  data () {
    return {
      animals: []
    }
  },
  async mounted () {
    this.animals = (await AnimalsService.index()).data
  },
  methods: {
    naviguateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.animal-image {
  width: 50%
}
</style>
