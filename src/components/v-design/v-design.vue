<template>
  <v-row class="v-design">
    <v-col md="7" sm="12" >
      <div class="v-design__left ">
        <h2>Уникальный дизайн мебели </h2>
        <h3>Апартаменты 63 кв. м. на Мичуринском проспекте</h3>
        <span><a href="#">Подробнее</a></span>
        <img alt="angle" src="../../assets/img/svg/angle-right.svg">
      </div>
    </v-col>
    <v-col md="5" sm="12">
      <div class="v-design__right justify-sm-center">
        <h2>Детская мебель</h2>
        <h3>
          Теоретический коллапс Советского Союза в XXI веке в три строки
        </h3>
        <h4>
          Кризис легитимности, как правило, предсказуем. Как уже отмечалось,
          капиталистическое мировое общество отталкивает пейзажный парк.
          Болгары очень дружелюбны, приветливы, гостеприимны, кроме того побережье
          притягивает различный коммунизм, при этом его стоимость значительно ниже,
          чем в бутылках. Население, несмотря на внешние воздействия, стабильно.
        </h4>
        <v-transit :address='addressOut'
                   :color='colorBlack'
                   :text='textOut1'
        />
      </div>

    </v-col>

  </v-row>
</template>

<script>
import vTransit from '../v-common/v-transit'

export default {
  name: 'v-design',
  components: {
    vTransit
  },
  data () {
    return {
      textOut1: 'Отправить каталог',
      textOut2: 'Подробнее',
      colorBlack: '#454343',
      addressOut: '#'
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-design {
    margin: 52px auto 0 auto;
    max-width: 1142px;

    .v-design__left {
      background-image: url("../../assets/img/bg-design.png");
      background-repeat: no-repeat;
      background-size: cover;
      max-width: 652px;
      min-height: 500px;
      color: #fff;
      padding: 26px 53px 40px 57px;

      h2 {
        font-size: 20px;
        line-height: 20px;
        color: #FFFFFF;
        width: 208px;
        height: 43px;
      }

      h3 {
        margin-top: 10px;
        width: 231px;
        height: 60px;
        font-size: 14px;
        line-height: 136.5%;
        /* or 19px */
        color: #FFFFFF;
      }

      span a {
        margin-top: 10px;
        width: 119px;
        height: 19px;
        font-size: 16px;
        line-height: 16px;
        color: #FFFFFF;
        text-transform: uppercase;
        margin-right: 8px;
      }
    }

    .v-design__right {
      padding: 65px 86px 40px 57px;
      max-width: 488px;
      min-height: 500px;
      background: #F3F2F2;

      h2 {
        font-size: 18px;
        line-height: 149%;
        /* or 27px */
        text-transform: uppercase;
        color: #D7B256;
      }

      h3 {
        margin-top: 8px;
        font-size: 29px;
        line-height: 118%;
        /* or 35px */
        color: #201F25;
      }

      h4 {
        margin-top: 33px;
        font-size: 14px;
        line-height: 152%;
      }

      div {
        margin-top: 40px;
        font-size: 14px;
        line-height: 149%;
        text-transform: uppercase;

        a {
          color: #000000;
          margin-right: 20px;
        }
      }
    }
  }

  @media only screen and (max-width: 960px) {
    .v-design {
      margin: 7px auto 0 auto;
      max-width: 1142px;
    }
    .v-design .v-design__left, .v-design .v-design__right {
    justify-content: center;
      margin: auto;
    }
  }
</style>
