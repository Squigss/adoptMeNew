<template>
  <div id="app">
    <v-app>
      <page-header/>
      <main>
        <router-view> </router-view>
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
