<template>
  <v-layout column>
    <div>
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
        <input
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
          <v-btn
            @click="onUpload">upload
          </v-btn>
          <br>
          <br>
        <v-btn
            class="cyan" dark
            @click="add">
          Add
        </v-btn>
    </div>
  </v-layout>
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
</style>
