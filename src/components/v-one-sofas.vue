<template>
    <div class="one-sofas">
      <v-nav-bar/>
      <v-small-menu :nameOfSofa = "nameOfSofa"/>
      <v-main-product-card :nameOfSofa = "nameOfSofa" ref="childComponent"/>
      <v-review/>
      <v-details/>
      <v-main-fabric/>
      <v-filler/>
      <v-product-faq/>
      <v-tittle/>
      <v-furniture-gallery />
      <v-social :showProduct = "showProduct" />
      <v-map/>
      <v-footer/>
    </div>
</template>

<script>
import vNavBar from './v-nav-bar/v-nav-bar'
import vSmallMenu from './v-small-menu/v-small-menu'
import vMainProductCard from './v-main-product-card/v-main-product-card'
import vReview from './v-review/v-review'
import vDetails from './v-details/v-details'
import vMainFabric from './v-main-fabric/v-main-fabric'
import vFiller from './v-filler/v-filler'
import vProductFaq from './v-product-faq/v-product-faq'
import vTittle from './v-tiitle/v-tittle'
import vFurnitureGallery from './v-furniture-gallery/v-furniture-gallery'
import vSocial from './v-social/v-social'
import vMap from '../components/v-map/v-map'
import vFooter from '../components/v-footer/v-footer'
export default {
  name: 'one-sofas',
  components: {
    vNavBar,
    vSmallMenu,
    vMainProductCard,
    vReview,
    vDetails,
    vMainFabric,
    vFiller,
    vProductFaq,
    vTittle,
    vFurnitureGallery,
    vSocial,
    vMap,
    vFooter
  },
  data: () => ({
    showProduct: false,
    nameOfSofa: ''
  }),
  mounted () {
    this.nameOfSofa = this.$route.query.sofa
    this.$refs.childComponent.getDataOneSofa(this.nameOfSofa)
  }
}
</script>

<style lang="scss">

</style>
