<template>
<v-row >
  <v-col md="12"  class="v-main-screen">
    <div class="v-main-screen__tittle justify-center">
      <h1>Мы производим корпусную и мягкую мебель</h1>
      <v-transit :address='addressOut'
                 :color='colorWhite'
                 :text='textOut'
                 class="v-main-screen__transit"
      />
     </div>
    <img  class="screen-pontoon"  src="../../assets/img/svg/pontoon.svg" alt="Логотип товарный знак">
  </v-col>
</v-row>
</template>

<script>
import vTransit from '../v-common/v-transit'

export default {
  name: 'v-main-screen',

  components: {
    vTransit
  },
  data () {
    return {
      textOut: 'Перейти в каталог',
      colorWhite: false,
      addressOut: '#'
    }
  }
}
</script>

<style scoped lang="scss">
  .v-transit img{
    margin-left: 19px !important;
  }
  .v-main-screen{
    position: relative;
    .v-main-screen__transit{
      padding: 0 0 0 0;
    }
    .v-main-screen__tittle{
      margin-left: 380px;
      h1{
        font-size: 30px;
        line-height: 148.5%;
        text-transform: uppercase;
        max-width: 509px;
        height: 109px;
        margin: 129px 0 2px 0;
        color: #FFFFFF;
      }

      a{
        color:#fff;
        text-transform: uppercase;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 132%;
      }
      span{
        margin-right: 12px;
      }
    }
    background-image: url("../../assets/img/bg-screen-first.png");
    background-repeat: no-repeat;
    height: 358px;
    color: #fff;
  }

  .screen-pontoon{
    position: absolute;
    bottom: 10px;
    right: 385px;
  }

  @media only screen and (max-width: 1680px) {
    .screen-pontoon{
        right: 147px;
    }
    @media only screen and (max-width: 1600px) {
      .screen-pontoon{
        right: 68px;
      }}
    @media only screen and (max-width: 1280px) {
      .v-main-screen__tittle{
        margin-left: 240px!important;
        h1{
          font-size: 30px;
          line-height: 148.5%;
          text-transform: uppercase;
          max-width: 509px;
          height: 109px;
          margin: 129px 0 2px 0;
          color: #FFFFFF;
        }
      }
      .screen-pontoon{
        right: 68px;
      }
    }
    @media only screen and (max-width: 1024px) {
      .v-main-screen__tittle{
        margin-left: 180px!important;

    }
    }
    @media only screen and (max-width: 768px) {
      .v-main-screen__tittle{
        margin-left: 100px!important;

      }
    }
    @media only screen and (max-width: 660px) {
      .v-main-screen__tittle{
        margin-left: 60px!important;

      }
    }
    @media only screen and (max-width: 540px) {
      .v-main-screen__tittle{
        margin-left: 40px!important;
        h1{
          font-size: 28px!important;
          margin: 104px 0 2px 0 !important;
          max-width: 462px!important;
        }
      }

    }
    @media only screen and (max-width: 411px) {
      .v-main-screen__tittle{
        margin-left: 40px!important;
        h1{
          font-size: 24px !important;
          margin: 57px 0 2px 0 !important;
          max-width: 462px !important;
        }
      }
      .screen-pontoon{
        right: 10px;
      }
    }
  }
</style>
