<template>
    <div class="v-main-sofas">
      <v-nav-bar/>
      <v-small-menu-sofas/>
      <v-sofas-main-screen/>
      <v-sofas-submenu/>
      <v-social :showProduct = "showProduct" />
      <v-map/>
      <v-footer/>
    </div>
</template>

<script>
import vNavBar from './v-nav-bar/v-nav-bar'
import vSmallMenuSofas from './v-main-sofas-componenets/v-small-menu-sofas/v-small-menu-sofas'
import vSofasMainScreen from './v-main-sofas-componenets/v-sofas-main-screen/v-sofas-main-screen'
import vSofasSubmenu from './v-main-sofas-componenets/v-sofas-submenu/v-sofas-submenu'
import vFooter from './v-footer/v-footer'
import vSocial from './v-social/v-social'
import vMap from './v-map/v-map'

export default {
  name: 'v-main-sofas',
  components: {
    vNavBar,
    vSmallMenuSofas,
    vSofasMainScreen,
    vSofasSubmenu,
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
