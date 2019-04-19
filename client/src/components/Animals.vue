<template>
  <v-container class="container-body" grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-toolbar flat class="filter">
          <v-toolbar-title>Filter</v-toolbar-title>
          <v-spacer></v-spacer>

         <v-toolbar-items class='toolbarItems'>
        </v-toolbar-items>
        
        </v-toolbar>
      </v-flex>
      <v-flex v-for="animal in animals"
         :key="animal.id" fluid xs12 sm6 md6 lg4>
      <div>
        <v-card class="clickable"
        flat
        @click="naviguateTo({
              name: 'animal',
              params: {
                 animalId: animal.id
              }
        })">
        <v-img class="animal-image" :src="animal.imageURL" aspect-ratio="1"/>
      </v-card>
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
  width: 100%;
}
.animal-name {
  font-size: 150%;
  padding-top: 3%;
}
.animal-age {
  font-style: italic;
  font-size: 100%;
  padding-bottom: 8%;
}
.filter {
  background-color: white;
  font-style: italic;
  padding-top: 3%;
  padding-bottom: 3%;
}
</style>
