<template>
  <div id="app">
    <v-app>
      <page-header/>
      <main>
        <v-container fluid>
           <router-view> </router-view>
        </v-container>
      </main>
      <page-footer/>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
import PageFooter from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style src='./assets/stylesheets/generalstyles.css'>
</style>

