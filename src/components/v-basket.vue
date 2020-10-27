<template>
  <div class="v-basket">
    <v-nav-bar/>
    <v-small-menu-contacts/>
    <v-form-input/>
     <v-footer/>
  </div>
</template>

<script>
import vNavBar from './v-nav-bar/v-nav-bar'
import vFooter from './v-footer/v-footer'
import vSmallMenuContacts from './v-small-menu-contacts/v-small-menu-basket'
import vFormInput from './v-basket/v-form-input'
export default {
  name: 'v-basket',
  components: {
    vNavBar,
    vSmallMenuContacts,
    vFooter,
    vFormInput
  }
}
</script>

<style scoped>

</style>
