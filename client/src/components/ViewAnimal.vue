<template>
    <v-container class="container-body">
        <v-layout row wrap>
          <v-flex v-for="animal in animals"
            :key="animal.id" xs12 md3>
              <div class="animal-name">
                {{animal.name}}
              </div>
              <div class="animal-info">
                {{animal.age}} years,
                {{animal.breed}} ,
                {{animal.location}}
              </div>
              <br>
              <div class="animal-description">
                {{animal.description}}
              </div>
              <br>
              <v-btn class="black" dark>Contact Shelter</v-btn>
          </v-flex>
          <v-flex xs12 md1>
          </v-flex>
          <v-flex v-for="animal in animals"
             :key="animal.id" xs12 md8>
            <v-img class="animal-image" :src="animal.imageURL"/>
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
.container-body {
  margin-top: 150px;
  margin-bottom: 100px;
}
.animal-image {
  width: 100%;
}
.animal-name {
  font-weight: bold;
  font-size: 150%;
  }
.animal-info {
  font-style: italic;
  font-size: 100%;
  }
</style>
