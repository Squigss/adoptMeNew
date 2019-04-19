<template>
  <v-container class="container-body" grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-toolbar flat class="filter">
          <v-toolbar-title>Filter</v-toolbar-title>
          <v-spacer></v-spacer>
         <v-toolbar-items class='filterItems'>
           <!--type search-->
          <ul>
            <li class="filter-menu">
              <a class="filter-main"
              href="#">Type</a>
                <ul class="filter-options">
                  <li>
                    <a class="filter-links" href="#">Dogs</a>
                  </li>
                  <li>
                    <a class="filter-links" href="#">Cats</a>
                  </li>
                </ul>
            </li>
          </ul>
          <!--location search-->
          <ul>
            <li class="filter-menu">
              <a class="filter-main"
              href="#">Location</a>
                <ul class="filter-options">
                  <li>
                    <a class="filter-links" href="#">London</a>
                  </li>
                  <li>
                    <a class="filter-links" href="#">Bristol</a>
                  </li>
                </ul>
            </li>
          </ul>
          <!--age search-->
          <ul>
            <li class="filter-menu">
              <a class="filter-main"
              href="#">Age</a>
                <ul class="filter-options">
                  <li>
                    <a class="filter-links" href="#">Under 5</a>
                  </li>
                  <li>
                    <a class="filter-links" href="#">All</a>
                  </li>
                </ul>
            </li>
          </ul>
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

a {
  font-size: 14px;
  text-decoration: none;
  color: darkgrey;
  transition: all .2s ease-in;
  position: relative;
  display: block;
  padding: 30px 15px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin: 0;
}
</style>
