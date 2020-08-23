<template>
    <v-row class="v-sofas-main-screen">
      <v-col cols="12" class="v-sofas-main-screen-bg d-flex justify-center">
          <div class="v-sofas-main-screen-item d-flex align-self-center">Диваны</div>
      </v-col>
    </v-row>
</template>

<script>
export default {
  name: 'v-sofas-main-screen'
}
</script>

<style lang="scss">
  .v-sofas-main-screen{
    margin: 39px auto 0 auto;
    max-width: 1148px;
    .v-sofas-main-screen-bg{
      background: url("../../../assets/img/sofas/sofas-bg.png") no-repeat;
      background-size: cover;
      width: 1148px;
      height: 226px;
    }
    .v-sofas-main-screen-item{
      font-size: 30px;
      line-height: 30px;
      /* identical to box height */
      text-align: center;
      letter-spacing: 0.055em;
      color: #FFFFFF;
      text-transform: uppercase;
    }
  }
</style>
