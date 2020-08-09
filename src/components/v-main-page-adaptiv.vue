<template>
  <v-container class="v-main-page">
<!--    <v-nav-bar/>-->
    <v-main-screen/>
    <v-cabinet-furniture/>
    <v-proposal/>
   <!--    <v-footer/>-->
    </v-container>
</template>

<script>
// import vNavBar from '../components/v-nav-bar/v-nav-bar'
import vMainScreen from '../components/v-main-screen/v-main-screen'
import vCabinetFurniture from '../components/v-cabinet-furniture/v-cabinet-furniture-new'
import vProposal from './v-proposal/v-proposal'
// import vFooter from '../components/v-footer/v-footer'
export default {
  name: 'v-main-page',
  components: {
    // vNavBar,
    vMainScreen,
    vCabinetFurniture,
    vProposal
    // vFooter
  },
  data: () => ({

  })
}
</script>
