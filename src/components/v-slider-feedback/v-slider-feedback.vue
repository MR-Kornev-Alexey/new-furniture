<template>
  <div class="v-slider-feedback text-center">
    <h2>Отзывы </h2>
    <agile :options="myOptions">
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
    width: 1146px;
    height: 332px;
    background: #F3F2F2;
    padding: 39px 0 0 0;

    h2 {
      font-size: 30px;
      line-height: 113.5%;
    }
  }

</style>
