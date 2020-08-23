<template>
    <div class="v-main-contacts">
      <v-nav-bar/>
      <v-small-menu-contacts/>
      <v-contacts/>
      <v-social :showProduct = "showProduct" />
      <v-footer/>
    </div>
</template>

<script>
import vNavBar from './v-nav-bar/v-nav-bar'
import vFooter from './v-footer/v-footer'
import vSocial from './v-social/v-social'
import vContacts from './v-contacts/v-contacts'
import vSmallMenuContacts from './v-small-menu-contacts/v-small-menu-contacts'

export default {
  name: 'v-main-contacts',
  components: {
    vNavBar,
    vSmallMenuContacts,
    vFooter,
    vSocial,
    vContacts
  },
  data: () => ({
    showProduct: true
  })
}
</script>

<style scoped>

</style>
