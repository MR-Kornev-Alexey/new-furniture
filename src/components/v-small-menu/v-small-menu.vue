<template>
  <v-row class="v-small-menu">
    <v-col class="v-small-menu__card">
      <a href="/">Главная</a>
      <v-icon class="v-icon-small">mdi-chevron-right</v-icon>
      <a href="/sofas">Диваны</a>
      <v-icon class="v-icon-small">mdi-chevron-right</v-icon>
      <span>{{nameOfSofa}}</span>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'v-small-menu',
  props: ['nameOfSofa']
}
</script>

<style lang="scss">
  .v-small-menu {
    margin:57px 0 0 0;
    .v-small-menu__card {
      a {
        text-decoration: none;
      }
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
