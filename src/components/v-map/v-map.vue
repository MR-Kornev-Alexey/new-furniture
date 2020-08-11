<template>
  <v-row class="v-map justify-center">
    <v-col class="v-map__first" md="4" cols="12">

    </v-col>
    <v-col class="v-map__second" md="4"  cols="12">

    </v-col>
    <v-col class="v-map__address" md="4" cols="12">
      <h2>
        Мы рады видеть вас в <span>нашем офисе</span>
      </h2>
      <div class="v-map__address_num">
        Адрес: Москва Тульская 123
      <div>
        +7 (495) 792-0668
      </div>
      </div>
      <h4> Расписание работы</h4>
      <h5 class="d-flex text-justify">Понедельник - Пятница..........10:00 - 20:00</h5>
      <h5>Суббота........................10:00 - 18:00</h5>
      <h5>Воскресенье....................10:00 - 18:00</h5>
      <v-transit :address='addressOut'
                 :color='colorBlack'
                 :text='textOut'
                 class="v-map-transit"
      />
    </v-col>
  </v-row>
</template>

<script>
import vTransit from '../v-common/v-transit'

export default {
  name: 'v-map',
  components: {
    vTransit
  },
  data () {
    return {
      textOut: 'Открыть карту',
      colorBlack: true,
      addressOut: '#'
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-map {
    margin: 100px auto 0 auto;
    max-width: 1144px;

    .v-map__first {
      background-image: url("../../assets/img/furniture/for-map.png");
      background-repeat: no-repeat;
      background-size: cover;
      width: 383px;
      height: 468px;
    }

    .v-map__second {
      background-image: url("../../assets/img/map.png");
      background-repeat: no-repeat;
      background-size: cover;
      width: 383px;
      height: 468px;
    }

    .v-map__address {
      padding: 15px 0 0 67px;

      h2 {
        width: 313px;
        height: 61px;
        margin: 0 0 47px 0;
        font-size: 30px;
        line-height: 113.5%;

        span {
          color: #D7B256;
        }
      }

      .v-map__address_num {
        font-size: 15px;
        line-height: 101.5%;
        margin: 0 0 47px 0;
        width: 305px;
        height: 45px;

        div {
          margin: 14px 0 0 0;
        }
      }

      h4 {
        font-weight: 500;
        font-size: 17px;
        line-height: 149%;
        margin: 0 0 21px 0;
      }

      h5 {
        margin: 0 0 25px 0;
        text-align: justify;
      }
      .v-map-transit {
        padding: 24px 0 0 0;
      }
    }
  }

  @media only screen and (max-width: 1204px) {
    .v-map {
      margin: 30px auto 0 auto;
         }
    .v-map__first {
      display: none;
    }
    .v-map .v-map__address {
      padding: 15px 0 0 25px;
    }
  }
  </style>
