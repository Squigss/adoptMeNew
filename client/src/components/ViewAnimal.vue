<template>
    <v-layout>
      <div
        v-for="animal in animals"
        :key="animal.id">
          <div class="animal-info">
            {{animal.id}} -
            {{animal.name}} -
            {{animal.age}} -
            {{animal.breed}} -
            {{animal.location}}
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
    const animalId = this.$store.state.route.params.animalId
    this.animals = (await AnimalsService.show(animalId)).data
  }
}
</script>

<style scoped>
</style>
