<template>
  <v-container class="text-xs-center">
    <v-layout row wrap>
      <v-flex xs12>
        <h1>Add your cute companion to be adopted</h1>
        <input
            type = "name"
            name = "name"
            v-model="animal.name"
            placeholder= "name"/>
          <br>
          <br>
        <input
            type = "breed"
            name = "breed"
            v-model="animal.breed"
            placeholder= "breed"/>
          <br>
          <br>
        <input
            type = "age"
            name = "age"
            v-model="animal.age"
            placeholder= "age"/>
          <br>
          <br>
        <input
            type = "location"
            name = "location"
            v-model="animal.location"
            placeholder= "location (enter city)"/>
          <br>
          <br>
        <textarea
            rows="5"
            type = "description"
            name = "description"
            v-model="animal.description"
            placeholder= "description"/>
          <br>
          <br>
        <input
            type = "imageURL"
            name = "imageURL"
            v-model="animal.imageURL"
            placeholder= "imageURL"/>
          <br>
          <br>
          <input type="file" @change="onFileSelected"/>
          <button class="secondary-button"
            @click="onUpload">upload
          </button>
          <br>
          <br>
        <button
            @click="add">
          Add
        </button>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import AnimalsService from '@/services/AnimalsService'

export default {
  data () {
    return {
      animal: {
        name: null,
        breed: null,
        age: null,
        location: null,
        description: null,
        imageURL: null,
        selectedFile: null
      }
    }
  },
  methods: {
    async add () {
      try {
        await AnimalsService.post(this.animal)
      } catch (err) {
        console.log('System error when uploading your animal profile')
      }
    },
    onFileSelected (event) {
      this.selectedFile = event.target.file[0]
    },
    onUpload (event) {
      this.selectedFile = event.target.file[0]
    }
  }
}
</script>

<style scoped>
.secondary-button {
  background: white;
  border: 1px solid black;
  border-radius: 3px;
  text-transform: uppercase;
  transition: all 0.25s ease 0s;
}
</style>
