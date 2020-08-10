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
          <img alt="heart" class="heart-icon" src="../../assets/img/svg/heart.svg">
        </div>
        <div class="d-flex slide-item__price">
          <div class="slide-item__price__tittle"><span>90 000 Р</span><br>
            от 60 000 Р
          </div>
          <div><img class="bag-icon" alt="material" src="../../assets/img/svg/basket.svg"></div>
        </div>
      </div>
      <div class="slide text-center">
        <img alt="furniture" src="../../assets/img/carousel/carousel-1.png">
        <div class="d-flex slide-item__name">
          <div class="slide-item__name__tittle">Andrria miss </div>
          <div><img alt="heart" class="heart-icon"  src="../../assets/img/svg/heart.svg"></div>
        </div>
        <div class="d-flex slide-item__price">
          <div class="slide-item__price__tittle"><br>
            от 60 000 Р
          </div>
          <div><img alt="material" class="bag-icon"  src="../../assets/img/svg/basket.svg"></div>
        </div>
      </div>
      <div class="slide text-center">
        <img alt="furniture" src="../../assets/img/carousel/carousel-2.png">
        <div class="d-flex slide-item__name">
          <div class="slide-item__name__tittle">Florence ruggine</div>
          <div><img alt="heart" class="heart-icon"  src="../../assets/img/svg/heart.svg"></div>
        </div>
        <div class="d-flex slide-item__price">
          <div class="slide-item__price__tittle"><br>
            от 50 000 Р
          </div>
          <div><img alt="material" class="bag-icon"  src="../../assets/img/svg/basket.svg"></div>
        </div>
      </div>
      <div class="slide text-center">
        <img alt="furniture" src="../../assets/img/carousel/carousel-3.png">
        <div class="d-flex slide-item__name">
          <div class="slide-item__name__tittle">Parma idol</div>
          <div><img alt="heart"  class="heart-icon"  src="../../assets/img/svg/heart.svg"></div>
        </div>
        <div class="d-flex slide-item__price">
          <div class="slide-item__price__tittle"><br>
            от 120 000 Р
          </div>
          <div><img alt="material" class="bag-icon"  src="../../assets/img/svg/basket.svg"></div>
        </div>
      </div>
      <div class="slide text-center">
        <img alt="furniture" src="../../assets/img/carousel/carousel-4.png">
        <div class="d-flex slide-item__name">
          <div class="slide-item__name__tittle">Aprilia</div>
          <div><img alt="heart" class="heart-icon"  src="../../assets/img/svg/heart.svg"></div>
        </div>
        <div class="d-flex slide-item__price">
          <div class="slide-item__price__tittle"><br>
            от 60 000 Р
          </div>
          <div><img alt="material" class="bag-icon"  src="../../assets/img/svg/basket.svg"></div>
        </div>
      </div>
      <div class="slide text-center">
        <img alt="furniture" src="../../assets/img/carousel/carousel-0.png">
        <div class="d-flex slide-item__name">
          <div class="slide-item__name__tittle">Aprilia</div>
          <img alt="heart" class="heart-icon"  src="../../assets/img/svg/heart.svg">
        </div>
        <div class="d-flex slide-item__price">
          <div class="slide-item__price__tittle"><span>90 000 Р</span><br>
            от 60 000 Р
          </div>
          <div><img alt="material" class="bag-icon"  src="../../assets/img/svg/basket.svg"></div>
        </div>
      </div>
      <div class="slide text-center">
        <img alt="furniture" src="../../assets/img/carousel/carousel-1.png">
        <div class="d-flex slide-item__name">
          <div class="slide-item__name__tittle">Andrria miss </div>
          <div><img alt="heart" class="heart-icon"  src="../../assets/img/svg/heart.svg"></div>
        </div>
        <div class="d-flex slide-item__price">
          <div class="slide-item__price__tittle"><br>
            от 60 000 Р
          </div>
          <div><img alt="material" class="bag-icon"  src="../../assets/img/svg/basket.svg"></div>
        </div>
      </div>
      <div class="slide text-center">
        <img alt="furniture" src="../../assets/img/carousel/carousel-2.png">
        <div class="d-flex slide-item__name">
          <div class="slide-item__name__tittle">Florence ruggine</div>
          <div><img alt="heart" class="heart-icon"  src="../../assets/img/svg/heart.svg"></div>
        </div>
        <div class="d-flex slide-item__price">
          <div class="slide-item__price__tittle"><br>
            от 50 000 Р
          </div>
          <div><img alt="material" class="bag-icon"  src="../../assets/img/svg/basket.svg"></div>
        </div>
      </div>
      <div class="slide text-center">
        <img alt="furniture" src="../../assets/img/carousel/carousel-3.png">
        <div class="d-flex slide-item__name">
          <div class="slide-item__name__tittle">Parma idol</div>
          <div><img alt="heart" class="heart-icon"  src="../../assets/img/svg/heart.svg"></div>
        </div>
        <div class="d-flex slide-item__price">
          <div class="slide-item__price__tittle"><br>
            от 120 000 Р
          </div>
          <div><img alt="material" class="bag-icon"  src="../../assets/img/svg/basket.svg"></div>
        </div>
      </div>
      <div class="slide text-center">
        <img alt="furniture" src="../../assets/img/carousel/carousel-4.png">
        <div class="d-flex slide-item__name">
          <div class="slide-item__name__tittle">Aprilia</div>
          <div><img alt="heart" class="heart-icon"  src="../../assets/img/svg/heart.svg"></div>
        </div>
        <div class="d-flex slide-item__price">
          <div class="slide-item__price__tittle"><br>
            от 60 000 Р
          </div>
          <div><img alt="material" class="bag-icon"  src="../../assets/img/svg/basket.svg"></div>
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
            breakpoint: 320,
            settings: {
              dots: false,
              navButtons: false,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 602,
            settings: {
              dots: false,
              navButtons: false,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 661,
            settings: {
              navButtons: false,
              dots: false,
              infinite: true,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 861,
            settings: {
              navButtons: false,
              dots: false,
              infinite: true,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 959,
            settings: {
              navButtons: false,
              dots: false,
              infinite: true,
              slidesToShow: 4
            }
          },
          {
            breakpoint: 1023,
            settings: {
              navButtons: false,
              dots: false,
              infinite: true,
              slidesToShow: 4
            }
          },
          {
            breakpoint: 1250,
            settings: {
              navButtons: true,
              dots: false,
              infinite: true,
              slidesToShow: 4
            }
          },
          {
            breakpoint: 1365,
            settings: {
              navButtons: true,
              dots: false,
              infinite: true,
              slidesToShow: 5
            }
          },
          {
            breakpoint: 1919,
            settings: {
              navButtons: true,
              dots: false,
              infinite: true,
              slidesToShow: 5
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" >
 .v-choice-bayer {
    margin: 57px auto 60px auto;
    max-width: 1288px;
    min-height: 510px;
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
  @media only screen and (max-width: 1366px) {
    .agile{
      width: 1200px;
      margin: auto;
    }
    .my-next {
        right: -59px !important;
      }
    .my-prev {
         left: -59px !important;
      }
  }

  @media only screen and (max-width: 1280px) {
    .heart-icon, .bag-icon{
      margin: 0 20px 0 0;
    }
    .v-choice-bayer .slide-item__name, .v-choice-bayer .slide-item__price {
      padding: 14px 0 0 45px;
    }
    .my-next {
         right: -20px !important;
       }
    .my-prev {
      left: -26px !important;
    }
  }
 @media only screen and (max-width: 1024px) {
   .agile{
     width: 960px;
     margin: auto;
   }
   .heart-icon, .bag-icon{
     margin: 0 20px 0 0;
   }
   .v-choice-bayer .slide-item__name, .v-choice-bayer .slide-item__price {
     padding: 14px 0 0 45px;
   }
   .my-next {
     right: -20px !important;
   }
   .my-prev {
     left: -26px !important;
   }
 }
 @media only screen and (max-width: 900px) {
   .agile{
     width: 860px;
   }

 }
 @media only screen and (max-width: 768px) {
   .v-choice-bayer h2 {
     margin-left: 38px;
   }
   .agile{
     width: 568px;
   }
   .v-choice-bayer .v-choice-bayer__top-bar {
     margin: 28px 0 30px 0;
     padding: 0 0 0 42px;
   }
 }
 @media only screen and (max-width: 660px) {
   .agile{
     width: 640px;
   }
   .heart-icon, .bag-icon {
     margin: 0 30px 0 0;
   }
   .v-choice-bayer h2 {
     margin-left: 5px;
   }
   .v-choice-bayer .v-choice-bayer__top-bar {
      padding: 0 ;
   }
   .v-choice-bayer .slide-item__name, .v-choice-bayer .slide-item__price {
     padding: 14px 0 0 55px;
   }

 }
 @media only screen and (max-width: 600px) {
   .agile{
     width: 400px;
   }
   .heart-icon, .bag-icon {
     margin: 0 67px 0 0;
   }
   .v-choice-bayer h2 {
     margin-left: 5px;
   }
   .v-choice-bayer .v-choice-bayer__top-bar {
     padding: 0 ;
   }
   .v-choice-bayer .slide-item__name, .v-choice-bayer .slide-item__price {
     padding: 14px 0 0 92px;
   }
 }
 @media only screen and (max-width: 540px) {
   .agile{
     width: 400px;
   }
   .v-choice-bayer__top-bar{
     flex-direction: column;
   }
   .v-choice-bayer .v-choice-bayer__tittle {
     margin: 0;
     padding: 5px 0 5px 0;
   }
   .v-choice-bayer .slide-no-select,.v-choice-bayer .slide-select {
     font-size: 24px;
     line-height: 26px;
     margin-left: 0;
   }
   .v-choice-bayer h2 {
      margin-left: 0;
     text-align: center;
   }
   }
 @media only screen and (max-width: 411px) {
   .agile{
     width: 300px;
   }}
</style>
