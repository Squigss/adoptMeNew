<template>
      <v-flex xs12>
        <v-toolbar flat class="filter">
          <v-toolbar-title>Filter</v-toolbar-title>
          <v-spacer></v-spacer>
         <v-toolbar-items class='filterItems'>
          <!--text entry search-->
          <input
            type = "search"
            name = "search"
            v-model="search"
            placeholder= "enter search term"/>
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
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search (value) {
      const route = {
        name: 'animals'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    },
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style scoped>
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
