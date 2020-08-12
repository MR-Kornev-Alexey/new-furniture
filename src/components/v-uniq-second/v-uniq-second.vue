<template>
    <div class="v-uniq-second second-wrapper">
      <div class="second-header">
        <div class="second-header__left">
          <h2>Уникальный дизайн мебели </h2>
          <h3>Апартаменты 63 кв. м. на Мичуринском проспекте</h3>
          <span><a href="#">Подробнее</a></span>
          <img alt="angle" src="../../assets/img/svg/angle-right.svg">
        </div>
        <div class="second-header__bottom">
          <img src="../../assets/img/svg/around-arrow-white.svg" alt="around-arrow-white">
          Северное полушарие восстанавливает неопровержимый широколиственный лес,
          при этом к шесту прикрепляют ярко раскрашенных
        </div>
      </div>
      <div class="second-one second-item-footer">
        <img class="container--fluid"  src="../../assets/img/uniq-second/vurniture-all-1.jpg" alt="material">
        <h2>
          Andrria miss
        </h2>
        <div>
          детская кровать для маленькой принцессы
        </div>
        <v-transit :address='addressOut'
                   :color='colorBlack'
                   :text='textOut'
        />
      </div>
      <div class="second-two second-item-footer">
        <img class="container--fluid" src="../../assets/img/uniq-second/vurniture-all-2.jpg" alt="material">
        <h2>
          Andrria miss
        </h2>
        <div>
          детская кровать для маленькой принцессы
        </div>
        <v-transit :address='addressOut'
                   :color='colorBlack'
                   :text='textOut'
        />
      </div>
      <div class="second-three second-item-footer">
        <img class="container--fluid"  src="../../assets/img/uniq-second/vurniture-all-3.jpg" alt="material">
        <h2>
          Andrria miss
        </h2>
        <div>
          детская кровать для маленькой принцессы
        </div>
        <v-transit :address='addressOut'
                   :color='colorBlack'
                   :text='textOut'
        />
      </div>

    </div>
</template>

<script>
import vTransit from '../v-common/v-transit'

export default {
  name: 'v-uniq-second',
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

<style scoped lang="scss">
  .second-item-footer{
    h2{
      margin: 0 0 11px 0;
    }
    div {
      margin: 0 0 18px 0;
      width: 216px;
    }
  }

  .v-uniq-second {
    max-width: 1140px;
    margin: 37px  auto 0 auto;

  }
  .second-header {
    .second-header__left {
      padding: 55px 0 0 47px;
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
    grid-area: hd;
    background-image: linear-gradient(89.5deg, rgba(27, 27, 27, 0.4) 0.19%, rgba(27, 27, 27, 0.4) 137.91%),url("../../assets/img/uniq-second/uniq-second-header.png");
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 1140px;
    height: 476px;
    margin-bottom: 38px;
    position: relative;

    .second-header__bottom{
      position: absolute;
      width: 267px;
      height: 52px;
      font-size: 12px;
      line-height: 149%;
      color: #FFFFFF;
      bottom: 113px;
      right: 69px;
    }
  }
  .second-one{
    grid-area: so;
    align-self: center;
    justify-self: center;

  }
  .second-two{
    align-self: center;
    justify-self: center;
    grid-area: st;

  }
  .second-three{
    grid-area: sh;
    align-self: center;
    justify-self: center;

  }
  .second-wrapper {
    display: grid;
    grid-template-columns: repeat(21, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-template-areas:
      "hd hd hd hd hd hd hd  hd hd hd hd hd hd hd  hd hd hd hd hd hd hd"
      "so so so so so so so  st st st st st st st  sh sh sh sh sh sh sh"
      "so so so so so so so  st st st st st st st  sh sh sh sh sh sh sh";
  }

  @media only screen and (max-width: 660px) {
    .second-item-footer div {
       width: 201px;
    }
    .second-wrapper {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
      "hd hd"
      "so so "
      "st st "
      "sh sh";
    }
  }
  @media only screen and (max-width: 360px) {
    .second-header .second-header__bottom {
      right: 46px;
    }
  }
  @media only screen and (max-width: 320px) {
    .second-header .second-header__bottom {
        right: 4px;
    }
  }

</style>
