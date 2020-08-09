<template>
  <v-container class="v-main-page">
<!--    <v-nav-bar/>-->
    <v-main-screen/>
<!--    <v-footer/>-->
    </v-container>
</template>

<script>
// import vNavBar from '../components/v-nav-bar/v-nav-bar'
import vMainScreen from '../components/v-main-screen/v-main-screen'
// import vFooter from '../components/v-footer/v-footer'
export default {
  name: 'v-main-page',
  components: {
    // vNavBar,
    vMainScreen
    // vFooter
  },
  data: () => ({

  })
}
</script>
