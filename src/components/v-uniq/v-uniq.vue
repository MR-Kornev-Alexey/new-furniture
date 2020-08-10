<template>
  <v-row class="v-uniq">
    <v-col class="main-uniq ">
      <div class="v-uniq__text">
        <h2>Уникальный дизайн мебели </h2>
        <h3>Текст в две три строки лучше даже три. Так будет лучше выглядеть.
          Не обязательно заканчивать предложение</h3>
        <span><v-transit :address='addressOut'
                         :color='colorBlack'
                         :text='textOut'
        /></span>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import vTransit from '../../components/v-common/v-transit'

export default {
  name: 'v-uniq',
  components: {
    vTransit
  },
  data () {
    return {
      textOut: 'Подробнее',
      colorBlack: true,
      addressOut: '#'
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-uniq {
    position: relative;
    background-image: url("../../assets/img/unic-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 457px;

    .v-uniq__text {
      position: absolute;
      top: 73px;
      left: 1177px;

      h2 {
        width: 208px;
        height: 43px;
        font-weight: normal;
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 13px;
      }

      h3 {
        width: 265px;
        height: 60px;
        font-size: 14px;
        line-height: 136.5%;
        margin-bottom: 17px;
      }

      span a {
        font-size: 14px;
        line-height: 14px;
        text-transform: uppercase;
        color: #090909;
      }

      img {
        margin-left: 10px;
      }
    }
  }

  @media only screen and (max-width: 1366px) {
    .main-uniq .v-uniq__text {
      position: absolute;
      top: 73px;
      left: 1054px;
    }

  }

  @media only screen and (max-width: 1280px) {
    .main-uniq .v-uniq__text {
      position: absolute;
      top: 73px;
      left: 58px;
    }
  }

  @media only screen and (max-width: 414px) {
    .main-uniq {
      background-position: -446px 0;
    }
    .main-uniq .v-uniq__text {
      position: absolute;
      top: 73px;
      left: 32px;
    }
  }
</style>
