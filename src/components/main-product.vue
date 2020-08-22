<template>
    <div class="main-product">
      <v-nav-bar/>
      <v-small-menu/>
      <v-main-product-card/>
      <v-review/>
      <v-details/>
      <v-main-fabric/>
      <v-filler/>
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

export default {
  name: 'main-product',
  components: {
    vNavBar,
    vSmallMenu,
    vMainProductCard,
    vReview,
    vDetails,
    vMainFabric,
    vFiller
  }
}
</script>

<style lang="scss">

</style>
