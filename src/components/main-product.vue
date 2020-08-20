<template>
    <div class="main-product">
      <v-nav-bar/>
      <v-small-menu/>
      <v-main-product-card/>
    </div>
</template>

<script>
import vNavBar from './v-nav-bar/v-nav-bar'
import vSmallMenu from './v-small-menu/v-small-menu'
import vMainProductCard from './v-main-product-card/v-main-product-card'

export default {
  name: 'main-product',
  components: {
    vNavBar,
    vSmallMenu,
    vMainProductCard
  }
}
</script>

<style lang="scss">

</style>
