<template>
  <v-app>
     <v-main>
      <v-main-page/>
    </v-main>
  </v-app>
</template>

<script>
import vMainPage from './components/v-main-page-adaptiv'

export default {
  name: 'App',

  components: {
    vMainPage
  },

  data: () => ({
    //
  })
}
</script>
