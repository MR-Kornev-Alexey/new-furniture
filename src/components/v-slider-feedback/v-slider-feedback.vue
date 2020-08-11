<template>
  <div class="v-slider-feedback text-center">
    <h2>Отзывы </h2>
    <agile class="v-slider-feedback-slider" :options="myOptions">
      <div class="slide">
        <div class="my-slide-item d-flex text-left">
          <div class="div-avatar justify-sm-center" >
            <img  src="../../assets/img/avatar.png" alt="avatar">
          </div>
          <div class="description">
            Правило альтернанса непосредственно оправдывает потребительский цикл,
            первым образцом которого принято считать книгу А.Бертрана "Гаспар из тьмы".
            Слово синфазно. Эволюция мерчандайзинга, если уловить хореический ритм или аллитерацию.
            <h3>Анна Иванченко</h3>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="my-slide-item d-flex text-left">
          <div>
            <img src="../../assets/img/avatar.png" alt="avatar">
          </div>
          <div class="description">
            Правило альтернанса непосредственно оправдывает потребительский цикл,
            первым образцом которого принято считать книгу А.Бертрана "Гаспар из тьмы".
            Слово синфазно. Эволюция мерчандайзинга, если уловить хореический ритм или аллитерацию.
            <h3>Анна Иванченко</h3>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="my-slide-item d-flex text-left">
          <div>
            <img src="../../assets/img/avatar.png" alt="avatar">
          </div>
          <div class="description">
            Правило альтернанса непосредственно оправдывает потребительский цикл,
            первым образцом которого принято считать книгу А.Бертрана "Гаспар из тьмы".
            Слово синфазно. Эволюция мерчандайзинга, если уловить хореический ритм или аллитерацию.
            <h3>Анна Иванченко</h3>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="my-slide-item d-flex text-left">
          <div>
            <img src="../../assets/img/avatar.png" alt="avatar">
          </div>
          <div class="description">
            Правило альтернанса непосредственно оправдывает потребительский цикл,
            первым образцом которого принято считать книгу А.Бертрана "Гаспар из тьмы".
            Слово синфазно. Эволюция мерчандайзинга, если уловить хореический ритм или аллитерацию.
            <h3>Анна Иванченко</h3>
          </div>
        </div>
      </div>
    </agile>

  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
  name: 'v-slider-feedback',
  components: {
    agile: VueAgile
  },
  data () {
    return {
      myOptions: {
        navButtons: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 319,
            settings: {
              navButtons: false,
              dots: false
            }
          },

          {
            breakpoint: 900,
            settings: {
              navButtons: false,
              dots: true,
              infinite: true
            }
          },
          {
            breakpoint: 1279,
            settings: {
              navButtons: false,
              dots: true,
              infinite: true
            }
          },
          {
            breakpoint: 1365,
            settings: {
              navButtons: false,
              dots: true,
              infinite: true
            }
          },
          {
            breakpoint: 1399,
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
  .my-slide-item{
    padding: 56px 0 0 210px;
  }
  .description{
    width: 564px;
    height: 150px;
    margin-left: 34px;
    padding-top: 11px;
    line-height: 141%;
    h3 {
      margin-top: 20px;
      text-transform: uppercase;
      font-size: 14px;
      line-height: 149%;
    }
  }
  .v-slider-feedback {
    margin: 70px auto 0 auto;
    max-width: 1146px;
    min-height: 332px;
    background: #F3F2F2;
    padding: 39px 0 0 0;

    h2 {
      font-size: 30px;
      line-height: 113.5%;
    }
  }
  @media only screen and (max-width: 1366px) {
    .v-slider-feedback-slider .agile__actions .my-next {
               right: -69px!important;
       }
  }

  @media only screen and (max-width: 1280px) {
    .agile {
      width: 800px;
    }
  }
  @media only screen and (max-width: 1140px) {
    .my-slide-item {
      padding: 56px 0 0 69px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .v-slider-feedback {
      margin: 16px auto 0 auto;
       }
    .my-slide-item {
      padding: 56px 0 0 73px;
    }
  }

  @media only screen and (max-width: 768px) {
    .agile {
      width: 730px;
    }
    .description {
      width: 474px;
      height: 190px;}
  }
  @media only screen and (max-width: 660px) {
    .my-slide-item {
      padding: 56px 0 0 43px;
    }
    .agile {
      width: 580px;
    }
    .description {
      width: 382px;
      height: 205px;
    }
  }
  @media only screen and (max-width: 540px) {
    .my-slide-item {
      padding: 56px 0 0 0;
    }
    .agile {
      width: 520px;
    }
    .description {
      width: 382px;
      height: 205px;
    }
  }
  @media only screen and (max-width: 414px) {
    .my-slide-item{
      flex-direction: column;
      text-align: center;
      .div-avatar {
        display: flex;
      }
     img{
          margin: auto;
      }
       }
    .agile {
      width: 400px;
       }
    .description {
      width: 325px;
      height: 215px;
    }
  }
  @media only screen and (max-width: 360px) {
    .my-slide-item{
      flex-direction: column;
      text-align: center;
      .div-avatar {
        display: flex;
      }
      img{
        margin: auto;
      }
    }
    .agile {
      width: 300px;
    }
    .description {
      width: 280px;
      height: 220px;
      margin-left: 18px;
    }
  }
 </style>
