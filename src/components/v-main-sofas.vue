<template>
    <div class="v-main-sofas">
      <v-nav-bar/>
      <v-small-menu-sofas/>
      <v-sofas-main-screen/>
      <v-social :showProduct = "showProduct" />
      <v-map/>
      <v-footer/>
    </div>
</template>

<script>
import vNavBar from './v-nav-bar/v-nav-bar'
import vSmallMenuSofas from './v-main-sofas-componenets/v-small-menu-sofas/v-small-menu-sofas'
import vSofasMainScreen from './v-main-sofas-componenets/v-sofas-main-screen/v-sofas-main-screen'
import vFooter from './v-footer/v-footer'
import vSocial from './v-social/v-social'
import vMap from './v-map/v-map'

export default {
  name: 'v-main-sofas',
  components: {
    vNavBar,
    vSmallMenuSofas,
    vSofasMainScreen,
    vSocial,
    vMap,
    vFooter
  },
  data: () => ({
    showProduct: true
  })
}
</script>

<style scoped>

</style>
