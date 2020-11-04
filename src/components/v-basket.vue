<template>
  <div class="v-basket">
    <v-nav-bar/>
    <v-small-menu-contacts/>
    <v-basket-items v-if="haveItems"/>
    <v-basket-empty v-if="!haveItems"/>
    <v-form-input v-if="haveItems"/>
     <v-footer/>
  </div>
</template>

<script>
import vNavBar from './v-nav-bar/v-nav-bar'
import vFooter from './v-footer/v-footer'
import vSmallMenuContacts from './v-small-menu-contacts/v-small-menu-basket'
import vFormInput from './v-basket/v-form-input'
import vBasketItems from './v-basket/v-basket-items'
import vBasketEmpty from './v-basket/v-basket-empty'
import { mapGetters } from 'vuex'
export default {
  name: 'v-basket',
  components: {
    vNavBar,
    vSmallMenuContacts,
    vFooter,
    vFormInput,
    vBasketEmpty,
    vBasketItems
  },
  data: () => ({
    haveItems: false
  }
  ),
  computed: {
    ...mapGetters([
      'GET_ITEMS_TO_BASKET'
    ])
  },
  mounted () {
    this.haveItems = false
    if (this.GET_ITEMS_TO_BASKET.length > 0) {
      this.haveItems = true
    }
  }
}
</script>

<style scoped>

</style>
