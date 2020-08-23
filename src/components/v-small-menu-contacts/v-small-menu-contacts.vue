<template>
  <v-row class="v-small-menu-contacts">
    <v-col class="v-small-menu__card">
      Главная
      <v-icon class="v-icon-small">mdi-chevron-right</v-icon>
      Контакты
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'v-small-menu-contacts'
}
</script>

<style lang="scss">
  .v-small-menu-contacts{
    margin:38px 0 0 0;
    .v-small-menu__card {
      padding: 0 0 0 388px;
      font-size: 15px;
      line-height: 15px;
      /* identical to box height */
      color: #959595;
      .v-icon-small{
        margin: 0 14px 0 6px;
      }
      span {
        color: #000000;
      }
    }
  }
</style>
