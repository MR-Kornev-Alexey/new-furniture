<template>
    <div class="v-main-sofas">
      <v-nav-bar/>
      <v-small-menu-sofas/>
      <v-sofas-main-screen/>
      <v-sofas-submenu/>
      <v-sofas-gallery/>
      <v-social :showProduct = "showProduct" :socialSofas="socialSofas" />
      <v-map/>
      <v-footer/>
    </div>
</template>

<script>
import vNavBar from './v-nav-bar/v-nav-bar'
import vSmallMenuSofas from './v-main-sofas-componenets/v-small-menu-sofas/v-small-menu-sofas'
import vSofasMainScreen from './v-main-sofas-componenets/v-sofas-main-screen/v-sofas-main-screen'
import vSofasSubmenu from './v-main-sofas-componenets/v-sofas-submenu/v-sofas-submenu'
import vSofasGallery from './v-main-sofas-componenets/v-sofas-gallery/v-sofas-gallery'
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
    vSofasGallery,
    vSocial,
    vMap,
    vFooter
  },
  data: () => ({
    showProduct: true,
    socialSofas: true
  })
}
</script>

<style lang="scss">
.social-sofas{
  margin-top: -103px;
}
</style>
