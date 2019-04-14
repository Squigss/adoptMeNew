<template>

  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
    <v-flex v-for="animal in animals"
         :key="animal.id" xs12>
      <div>
        <v-img class="animal-image" :src="animal.imageURL"/>
      </div>
      <div class="animal-name">
        {{animal.name}}
      </div>
      <div class="animal-age">
        {{animal.age}} years old
      </div>
      </v-flex>
    </v-layout>
  </v-container>
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
.animal-image {
  width: 100%;
}
.animal-name {
  font-weight: bold;
  font-size: 150%;
  }
.animal-age {
  font-style: italic;
  font-size: 100%;
  }
.filter {
  color: orange;
  }
</style>
