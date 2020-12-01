<template>
    <section class="v-basket-items">
      <v-row class="d-flex my-4" v-for="(item,i) in GET_ITEMS_TO_BASKET" :key="item.slug">
        <div class="main-cards d-flex " >
          <div class="basket-item-image"
               :style="{ backgroundImage: 'url(' + GET_ITEMS_TO_BASKET[i].image + ')' }">

          </div>
          <div class="d-block">
            <div class="d-flex">
            <div class="main-cards__tittle">{{GET_ITEMS_TO_BASKET[i].name }} <span class="main-cards__price">{{GET_ITEMS_TO_BASKET[i].price}}</span> &#8381;</div>
            <div class="d-flex basket-discount"><div><img src="../../assets/img/svg/basket-discount.svg" alt="discount"> </div><div style="height: 17px; margin-left: 6px"></div>Купить в рассрочку </div>
             </div>
            <div class="d-flex main-cards__row "><div class="main-cards__config">Конфигурация</div><div>{{GET_CONFIG(GET_ITEMS_TO_BASKET[i])}} </div> </div>
            <div class="d-flex main-cards__row "><div class="main-cards__config">Размеры</div><div>{{GET_SIZE(GET_ITEMS_TO_BASKET[i])}} </div> </div>
            <div class="d-flex main-cards__row "><div class="main-cards__config">Механизм</div><div>{{GET_MECHANISM(GET_ITEMS_TO_BASKET[i])}} </div> </div>
            <div class="d-flex main-cards__row "><div class="main-cards__config">Мягкость дивана</div><div>{{GET_SOFTNESS(GET_ITEMS_TO_BASKET[i])}} </div> </div>
            <div  v-if="SHOW_PILLOW(GET_ITEMS_TO_BASKET[i])" class="d-flex main-cards__row "><div class="main-cards__config">Декоративные подушки</div><div>{{GET_PILLOW(GET_ITEMS_TO_BASKET[i])}} </div> </div>
            <div class="d-flex main-cards__row "><div class="main-cards__config">Материал</div><div>{{GET_FABRIC}} </div> </div>

          <div>
            <div class="d-flex ml-5 justify-start text-center basket-switch alles-switch">
              <div v-for="item in  choiceSwitch" :key="`conf_` + item.id">
                <v-switch
                  v-model="item.selected"
                  :label="item.name"
                  color="accent"
                  @change="choiceConfig(item.id)"
                  class="mr-2"
                ></v-switch>
              </div>
            </div>
            <div class="basket-trash"><img src="../../assets/img/svg/basket_trach.svg" alt="remove"></div>
          </div>
          </div>

        </div>
        <div class="info-card d-block">
        <div class="info-card__tittle">
          Информация о заказе
        </div>
          <div class="d-flex info-card__one">
            <div class="info-card__name">Товар</div>
            <div class="info-card__price">{{GET_ITEMS_TO_BASKET[i].price}}  &#8381;</div>
          </div>
          <div class="d-flex info-card__one">
            <div class="info-card__name">Услуга сборки </div>
            <div class="info-card__price">{{GET_PRICE_MONTAGE}}  &#8381;</div>
          </div>
          <div class="d-flex info-card__one">
            <div class="info-card__name">Доставка</div>
            <div class="info-card__price">{{GET_PRICE_DELIVERY}}  &#8381;</div>
          </div>
          <div class="total-tittle ">
            Итого
          </div>
          <div class="total-price">
            {{TOTAL_PRICE(GET_ITEMS_TO_BASKET[i])}} &#8381;
          </div>

      </div>
      </v-row>

    </section>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'v-basket-items',
  data: () => ({
    choiceSwitch: [
      {
        id: 1,
        name: 'Добавить услугу сборки',
        selected: false
      },
      {
        id: 2,
        name: 'Добавить услугу сборки',
        selected: false
      }
    ]
  }),
  methods: {
    SHOW_PILLOW (data) {
      return data.pillowPrice > 0
    },
    GET_PILLOW (data) {
      return 'размер ' + data.pillowName + ' см'
    },
    TOTAL_PRICE (data) {
      return data.price
    },
    GET_MECHANISM (data) {
      if (!data.mechanism) {
        return 'Без механизма'
      } else {
        return 'С механизмом'
      }
    },
    GET_SIZE (data) {
      let str2 = data.width + ' X '
      str2 = str2 + data.length
      return str2
    },
    GET_SOFTNESS (data) {
      if (data.softness === 'ultra') {
        return 'UltraSoft '
      } else if (data.softness === 'middle') {
        return 'Средняя мягкость'
      } else {
        return 'Нормальная мягкость'
      }
    },
    GET_CONFIG (data) {
      if (data.config === 'ottoman') {
        let str = 'Диван с оттоманкой '
        if (data.position === 'left') {
          str = str + 'левосторонний'
        } else {
          str = str + 'правосторонний'
        }
        return str
      } else if (data.config === 'straight') {
        return 'Прямой диван'
      } else {
        let str1 = 'Угловой диван '
        if (data.position === 'left') {
          str1 = str1 + 'левосторонний'
        } else {
          str1 = str1 + 'правосторонний'
        }
        return str1
      }
    }
  },
  computed: {
    ...mapGetters([
      'GET_ITEMS_TO_BASKET'
    ]),
    GET_FABRIC () {
      return 'Шинил'
    },
    GET_PRICE_DELIVERY () {
      return 1000
    },
    GET_PRICE_MONTAGE () {
      return 500
    }
  }
}
</script>

<style lang="scss">
  .v-basket-items{
    margin: 40px 0 0 0 ;
    padding: 0 0 0 390px;
    .main-cards{

      position: relative;
      width: 832px !important;
      border: 1px solid #EFEFEF;
      box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.1);
      background-color: rgba(238, 238, 238, 0.2);
      box-sizing: border-box;
      padding: 22px 0 20px 25px;
      .basket-trash{
        position: absolute;
        right: 30px;
        bottom: 20px;
        cursor: pointer;
      }
      .basket-switch{
        position: absolute;
        bottom: 10px;

      }
      .basket-discount{
        position: absolute;
        top: 8px;
        right: 14px;
      }
      .main-cards__row{
        margin: 12px 0 0 0;
        line-height: 136.5%;
      }
      .main-cards__config{
        font-weight: 300;
        font-size: 13px;
        width: 110px;
        /* identical to box height, or 18px */
        color: #8E8E8E;
        margin: 0 18px 0 20px;
      }
      .main-cards__tittle{
        margin: 0 0 0 20px;
        font-family: "Muller-Thin", sans-serif;
        font-weight: 300;
        font-size: 20px;
        line-height: 113.5%;
      }
      .main-cards__price{
        margin: 0 0 0 12px;
        font-family: "Muller", sans-serif;
        font-weight: 300;
        font-size: 20px;
        line-height: 113.5%;
      }
    }
    .info-card{
      margin-left: 20px;
      padding: 29px 0 20px 0;
      width: 264px;
      box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.1);
      background: #FBFBFD;
      border: 1px solid #DADADA;
      box-sizing: border-box;
      &__tittle{
        font-family: Muller,sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 136.5%;
        /* or 20px */
        text-align: center;
        text-transform: uppercase;
        margin: 0 0 32px 0;
      }
      &__one{
        margin: 21px 0 0 0;
        padding: 0 0 0 12px;
      }
       &__name{
        margin: 0 0 0 0;
         width: 140px;
         font-size: 15px;
         line-height: 96%;
         color: #6B6B6B;
      }
      &__price{
        text-align: right;
        width: 96px;
      }
      .total-price{
        font-size: 25px;
        line-height: 136.5%;
        /* or 34px */
        text-align: right;
        text-transform: uppercase;
        color: #D7B256;
        margin: 8px 21px 0 0;
      }
      .total-tittle {
      font-size: 13px;
      line-height: 96%;
      /* or 12px */
      text-align: right;
      text-transform: uppercase;
      color: #848484;
        margin: 62px 18px 0 0;
    }
    }
    .basket-item-image{
      width: 193px;
      height: 236px;
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover;
    }
  }

</style>
