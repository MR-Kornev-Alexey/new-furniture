<template>
  <div class="v-contacts">
    <v-row class="d-flex justify-end">
      <v-col class="v-contacts__address" cols="12" md="3">
        <div>
          <h2>
            Мы рады видеть вас в <span>нашем офисе</span>
          </h2>
          <div class="v-map__address_num">
            Москва, ул.дубнинская, 75, стр.1
          </div>
          <div class="yandex-map">
            <a href="#">yandex.map</a>
          </div>
          <div class="v-phone">
            +7 (495) 792-0668
          </div>
        </div>
        <h4 class="v-contacts-work"> Работаем пн-пт <br>
          10:00 - 10:00</h4>
        <div class="v-contacts-write">Пишите нам</div>
        <div class="v-contacts-mail"><a href="mailto:info@woodfans.ru">info@woodfans.ru</a></div>
        <div class="v-contacts-icons d-flex ">
          <div class="v-contacts-icons-ellipse text-center ">
            <v-icon class="ic ">mdi-instagram</v-icon>
          </div>
          <div class="v-contacts-icons-ellipse text-center ">
            <v-icon class="ic ">mdi-facebook</v-icon>
          </div>
        </div>
      </v-col>
      <v-col class="v-contacts__second" cols="12" md="3">

      </v-col>
      <v-col class="v-contacts__first" cols="12" md="4">

      </v-col>

    </v-row>

  </div>
</template>

<script>
export default {
  name: 'v-contacts'
}
</script>

<style lang="scss">
  .v-contacts {
    margin: 30px auto 0 auto;
    /*max-width: 1144px;*/

    .v-contacts__first {
      background-image: url("../../assets/img/place-contacts.png");
      background-repeat: no-repeat;
      background-size: cover;
      width: 957px;
      height: 561px;
      margin: 0 13px 0 0;
    }

    .v-contacts__second {
      background-image: url("../../assets/img/map.png");
      background-repeat: no-repeat;
      background-size: cover;
      width: 453px;
      height: 561px;
      margin: 0 -26px 0 0;
    }

    .v-contacts__address {
      padding: 37px 0 0 63px;

      h2 {
        max-width: 313px;
        min-height: 61px;
        margin: 0 0 53px 0;
        font-size: 30px;
        line-height: 113.5%;

        span {
          color: #D7B256;
        }
      }

      .yandex-map a, .v-contacts-mail a {
        font-size: 17px;
        line-height: 113.5%;
        /* or 19px */
        color: #A3A3A3;
      }

      .v-phone {
        margin: 29px 0 0 0;
        font-size: 17px;
        line-height: 113.5%;
      }

      .v-map__address_num {
        margin: 0 0 -27px 0;
        width: 305px;
        height: 45px;
        font-size: 17px;
        line-height: 113.5%;
      }

      .v-contacts-work {
        font-size: 17px;
        line-height: 113.5%;
        margin: 30px 0 0 0;
      }

      .v-contacts-write {
        font-size: 17px;
        line-height: 113.5%;
        margin: 30px 0 0 0;
      }

      .v-contacts-icons {
        margin: 53px 0 0 3px;

        .v-contacts-icons-ellipse {
          margin: 0 2px;
          width: 53px;
          height: 53px;
          background: #FFFFFF;
          border: 1px solid #CF9E23;
          box-sizing: border-box;
          border-radius: 50%;

          .ic {
            color: #CF9E23;
            font-size: 27px;
            line-height: 54px;
          }
        }
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

  @media only screen and (max-width: 900px) {
    .v-map__address {
      display: flex;
      justify-content: space-around;
    }
  }

  @media only screen and (max-width: 540px) {
    .v-map__address {
      display: block;
      justify-content: center;
    }
  }

</style>
