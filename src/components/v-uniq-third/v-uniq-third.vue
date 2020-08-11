<template>
    <v-row class="v-uniq-third">
      <v-col  class="v-uniq-third__left" md="8" cols="11">
          <h2>Уникальный дизайн мебели </h2>
          <h3>Апартаменты 63 кв. м. на Мичуринском проспекте</h3>
          <v-transit :address='addressOut'
                   :color='colorWhite'
                   :text='textOut'
        />
      </v-col>
      <v-col class="v-uniq-third__right" md="4" cols="11">
        <h2>Уникальный дизайн мебели </h2>
        <h3>Апартаменты 63 кв. м. на Мичуринском проспекте</h3>
        <v-transit :address='addressOut'
                   :color='colorBlack'
                   :text='textOut'
        />
      </v-col>
    </v-row>
</template>

<script>
import vTransit from '../v-common/v-transit'

export default {
  name: 'v-uniq-third',
  components: {
    vTransit
  },
  data () {
    return {
      textOut: 'Подробнее',
      textRight: 'Подобрать',
      colorBlack: true,
      colorWhite: false,
      addressOut: '#'
    }
  }
}
</script>

<style lang="scss" scoped>

  .v-uniq-third{
    margin: 81px auto 0 auto;
    max-width: 1144px;

    h2{
      margin: 0 0 11px 0 ;
      font-size: 20px;
      line-height: 20px;
      width: 208.27px;
      height: 43.13px;
    }
    h3{
      margin: 0 0 -3px 0 ;
      width: 230.77px;
      height: 60.38px;
      font-size: 14px;
      line-height: 136.5%;
    }
    .v-uniq-third__right{
      padding: 15px 0 0 32px;
      background-image: url("../../assets/img/furniture/v-uniq-third-2.png");
      background-repeat: no-repeat;
      background-size: cover;
      width: 360px;
      height: 402px;
    }
    .v-uniq-third__left{
      padding: 15px 0 0 32px;
      color: #FFFFFF;
      background-image: url("../../assets/img/furniture/v-uniq-third-1.png");
      background-repeat: no-repeat;
      background-size: cover;
      width: 754px;
      height: 402px;
    }
  }

  @media only screen and (max-width: 1140px){
    .v-uniq-third .v-uniq-third__right {
      padding: 0;
      }
  }

</style>
