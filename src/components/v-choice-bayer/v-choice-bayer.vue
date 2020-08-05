<template>
  <div class="v-choice-bayer">
    <h2>Выбор покупателей</h2><br>
    <v-flex class="d-flex v-choice-bayer__top-bar ">
      <div :class="[
              { 'slide-select': item.selected },
              { 'slide-no-select': !item.selected },
              ]"
           :key="i"
           v-for="(item, i) in furniture">
        <div class="v-choice-bayer__tittle">{{item.name}} <span>{{item.number}}</span></div>
      </div>
    </v-flex>

    <agile :options="myOptions">
      <div class="slide text-center">
        <img alt="furniture" src="../../assets/img/carousel/carousel-0.png">
        <div class="d-flex slide-item__name">
          <div>Aprilia</div>
          <div><img alt="heart" src="../../assets/img/svg/heart.svg"></div>
        </div>
        <div class="d-flex slide-item__price">
          <div><span>90 000 Р</span><br>
            от 60 000 Р
          </div>
          <div><img alt="material" src="../../assets/img/svg/basket.svg"></div>
        </div>
      </div>
      <div class="slide text-center">
        <img alt="furniture" src="../../assets/img/carousel/carousel-1.png">
        <div class="d-flex">
          <div>Aprilia</div>
          <div><img alt="heart" src="../../assets/img/svg/heart.svg"></div>
        </div>
        <div class="d-flex">
          <div><span>90 000 Р</span><br>
            от 60 000 Р
          </div>
          <div><img alt="material" src="../../assets/img/svg/basket.svg"></div>
        </div>
      </div>
      <div class="slide">
        <h3>slide 2</h3>
      </div>
      <div class="slide">
        <h3>slide 3</h3>
      </div>
      <div class="slide">
        <h3>slide 4</h3>
      </div>
      <div class="slide">
        <h3>slide 5</h3>
      </div>
      <div class="slide">
        <h3>slide 6</h3>
      </div>

      <div class="slide">
        <h3>slide 7</h3>
      </div>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
  name: 'v-choice-bayer',
  components: {
    agile: VueAgile
  },
  data () {
    return {
      furniture: [
        {
          name: 'Диваны',
          selected: true,
          number: 20
        },
        {
          name: 'Кровати',
          selected: false,
          number: 16
        },
        {
          name: 'Кресла',
          selected: false,
          number: 5
        },
        {
          name: 'Стулья',
          selected: false,
          number: 8
        },
        {
          name: 'Пуфы',
          selected: false,
          number: 6
        },
        {
          name: 'Консоли',
          selected: false,
          number: 4
        },
        {
          name: 'Кресла',
          selected: false,
          number: 5
        }
      ],
      myOptions: {
        navButtons: true,
        slidesToShow: 5,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: false
            }
          },

          {
            breakpoint: 900,
            settings: {
              navButtons: true,
              dots: true,
              infinite: false
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-choice-bayer {
    margin: 57px auto 0 auto;
    width: 1288px;
    height: 510px;
    background-color: aliceblue;

    .slide {
      padding-top: 0;
      background-color: bisque;
      border: 1px solid red;
      width: 200px;
      height: 394px;
    }
    .slide-select{
      font-size: 14px;
      line-height: 14px;
      text-align: center;
      color: #000000;
    }
    .slide-no-select{
      font-size: 14px;
      line-height: 14px;
      text-align: center;
      color: #8E8E8E;
      margin-left: 24px;
    }
    h2 {
      font-size: 30px;
      line-height: 30px;
      margin-left: 84px;
    }
    .v-choice-bayer__tittle{
      margin: 0 0 0 0;
      padding: 0 0 0 0;
      span{
        margin-left: 10px;
      }
    }
    .v-choice-bayer__top-bar{
      margin: 28px 0 30px 0;
      padding: 0 0 0 84px;
    }
    .slide-item__name, .slide-item__price{
      padding: 14px 0 0 35px;
    }
  }

</style>
