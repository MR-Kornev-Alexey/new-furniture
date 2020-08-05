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
          <div class="slide-item__name__tittle">Aprilia</div>
          <img alt="heart" src="../../assets/img/svg/heart.svg">
        </div>
        <div class="d-flex slide-item__price">
          <div class="slide-item__price__tittle"><span>90 000 Р</span><br>
            от 60 000 Р
          </div>
          <div><img alt="material" src="../../assets/img/svg/basket.svg"></div>
        </div>
      </div>
      <div class="slide text-center">
        <img alt="furniture" src="../../assets/img/carousel/carousel-1.png">
        <div class="d-flex slide-item__name">
          <div class="slide-item__name__tittle">Andrria miss </div>
          <div><img alt="heart" src="../../assets/img/svg/heart.svg"></div>
        </div>
        <div class="d-flex slide-item__price">
          <div class="slide-item__price__tittle"><br>
            от 60 000 Р
          </div>
          <div><img alt="material" src="../../assets/img/svg/basket.svg"></div>
        </div>
      </div>
      <div class="slide text-center">
        <img alt="furniture" src="../../assets/img/carousel/carousel-2.png">
        <div class="d-flex slide-item__name">
          <div class="slide-item__name__tittle">Florence ruggine</div>
          <div><img alt="heart" src="../../assets/img/svg/heart.svg"></div>
        </div>
        <div class="d-flex slide-item__price">
          <div class="slide-item__price__tittle"><br>
            от 50 000 Р
          </div>
          <div><img alt="material" src="../../assets/img/svg/basket.svg"></div>
        </div>
      </div>
      <div class="slide text-center">
        <img alt="furniture" src="../../assets/img/carousel/carousel-3.png">
        <div class="d-flex slide-item__name">
          <div class="slide-item__name__tittle">Parma idol</div>
          <div><img alt="heart" src="../../assets/img/svg/heart.svg"></div>
        </div>
        <div class="d-flex slide-item__price">
          <div class="slide-item__price__tittle"><br>
            от 120 000 Р
          </div>
          <div><img alt="material" src="../../assets/img/svg/basket.svg"></div>
        </div>
      </div>
      <div class="slide text-center">
        <img alt="furniture" src="../../assets/img/carousel/carousel-4.png">
        <div class="d-flex slide-item__name">
          <div class="slide-item__name__tittle">Aprilia</div>
          <div><img alt="heart" src="../../assets/img/svg/heart.svg"></div>
        </div>
        <div class="d-flex slide-item__price">
          <div class="slide-item__price__tittle"><br>
            от 60 000 Р
          </div>
          <div><img alt="material" src="../../assets/img/svg/basket.svg"></div>
        </div>
      </div>
      <div class="slide text-center">
        <img alt="furniture" src="../../assets/img/carousel/carousel-0.png">
        <div class="d-flex slide-item__name">
          <div class="slide-item__name__tittle">Aprilia</div>
          <img alt="heart" src="../../assets/img/svg/heart.svg">
        </div>
        <div class="d-flex slide-item__price">
          <div class="slide-item__price__tittle"><span>90 000 Р</span><br>
            от 60 000 Р
          </div>
          <div><img alt="material" src="../../assets/img/svg/basket.svg"></div>
        </div>
      </div>
      <div class="slide text-center">
        <img alt="furniture" src="../../assets/img/carousel/carousel-1.png">
        <div class="d-flex slide-item__name">
          <div class="slide-item__name__tittle">Andrria miss </div>
          <div><img alt="heart" src="../../assets/img/svg/heart.svg"></div>
        </div>
        <div class="d-flex slide-item__price">
          <div class="slide-item__price__tittle"><br>
            от 60 000 Р
          </div>
          <div><img alt="material" src="../../assets/img/svg/basket.svg"></div>
        </div>
      </div>
      <div class="slide text-center">
        <img alt="furniture" src="../../assets/img/carousel/carousel-2.png">
        <div class="d-flex slide-item__name">
          <div class="slide-item__name__tittle">Florence ruggine</div>
          <div><img alt="heart" src="../../assets/img/svg/heart.svg"></div>
        </div>
        <div class="d-flex slide-item__price">
          <div class="slide-item__price__tittle"><br>
            от 50 000 Р
          </div>
          <div><img alt="material" src="../../assets/img/svg/basket.svg"></div>
        </div>
      </div>
      <div class="slide text-center">
        <img alt="furniture" src="../../assets/img/carousel/carousel-3.png">
        <div class="d-flex slide-item__name">
          <div class="slide-item__name__tittle">Parma idol</div>
          <div><img alt="heart" src="../../assets/img/svg/heart.svg"></div>
        </div>
        <div class="d-flex slide-item__price">
          <div class="slide-item__price__tittle"><br>
            от 120 000 Р
          </div>
          <div><img alt="material" src="../../assets/img/svg/basket.svg"></div>
        </div>
      </div>
      <div class="slide text-center">
        <img alt="furniture" src="../../assets/img/carousel/carousel-4.png">
        <div class="d-flex slide-item__name">
          <div class="slide-item__name__tittle">Aprilia</div>
          <div><img alt="heart" src="../../assets/img/svg/heart.svg"></div>
        </div>
        <div class="d-flex slide-item__price">
          <div class="slide-item__price__tittle"><br>
            от 60 000 Р
          </div>
          <div><img alt="material" src="../../assets/img/svg/basket.svg"></div>
        </div>
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
              infinite: true
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
    margin: 57px auto 60px auto;
    width: 1288px;
    height: 510px;
      .slide {
      padding-top: 0;
      width: 200px;
      height: 297px;
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
     padding: 14px 0 0 40px;
    }
    .slide-item__name{
      position: relative;

        img{
          position: absolute;
          bottom:0;
          right: 22px;
        }

    }

    .slide-item__price{
      position: relative;
      img{
        position: absolute;
        right: 27px;
        bottom: 0;
      }
      .slide-item__price__tittle{
        span{
          text-decoration: line-through;
          color: #CDCDCD;
        }
        margin-right: 68px;
      }

    }
  }

</style>
