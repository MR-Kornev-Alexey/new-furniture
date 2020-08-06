<template>
  <div class="v-recommendation wrapper">
    <div class="left-side">
      <div class="left-description">
        <h2>
          Стили мебели в русском интерьере
        </h2>
        <div class="data">
          20 июня 2019
        </div>
      </div>

    </div>
    <div class="central-top">
      <h2>
        Топ 7 товаров для уютного интерьера
      </h2>
      <div class="data">
        10 июня 2019
      </div>
    </div>
    <div class="central-down">
      <h2>
        Предоставляем новые диваны для спален
      </h2>
      <div class="data">
        20 июня 2019
      </div>
    </div>
    <div class="right-side">
      <h2>
        Также рекомендуем
      </h2>

      <div>
        <a href="#">Как выбрать кровать в спальню</a>
      </div>
      <div>
        <a href="#">У нас животные или дети. Какую обивку посоветуете?</a>
      </div>
      <div>
        <a href="#"> Как найти диван своей мечты</a>
      </div>
      <div>
        <a href="#"> Уход за мебелью</a>
      </div>
      <div>
        <a href="#"> Разница между средней жесткости, мягкой и ультрасофт</a>
      </div>
      <v-transit :address='addressOut'
                 :color='colorBlack'
                 :text='textOut'
                 class="v-recommendation__transit"
      />
    </div>
  </div>
</template>

<script>
import vTransit from '../v-common/v-transit'

export default {
  name: 'v-recommendation',
  components: {
    vTransit
  },
  data () {
    return {
      textOut: 'Все статьи',
      colorBlack: true,
      addressOut: '#'
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-template-areas:
      "ls ls ls  ct ct ct  rs rs rs "
      "ls ls ls  ct ct ct  rs rs rs "
      "ls ls ls  cd cd cd  rs rs rs "
      "ls ls ls  cd cd cd  rs rs rs ";
  }

  .data {
    color: #979696;
  }

  h2 {
    font-size: 20px;
    line-height: 108%;
    color: #FFFFFF;
    width: 229.61px;
    height: 37.38px
  }
  .left-side {
    margin: 0 10px -7px 19px;
    padding: 0 0 17px 24px;
    grid-area: ls;
    background-image: url("../../assets/img/left-rec.png");
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    align-items: end;

    h2 {
      margin: 0 0 28px 0;
    }
  }

  .central-top,.central-down{
    padding:  28px 0 0 32px;
    background-repeat: no-repeat;
    background-size: cover;
    .data{
      margin-top: 80px ;
    }
  }
  .central-top {
    margin: 0 11px 14px 19px;
    grid-area: ct;
    background-image: url("../../assets/img/top-rec.png");
    }
  .central-down {
    margin: 19px 11px -6px 19px;
    grid-area: cd;
    background-image: url("../../assets/img/down-rec.png");
  }

  .right-side {
    padding: 41px 0 0 61px;
    grid-area: rs;

    .v-recommendation__transit {
      margin-top: 38px;
    }

    h2 {
      margin: 0 0 15px 0;
      font-size: 20px;
      line-height: 20px;
      width: 320px !important;
      letter-spacing: 0.105em;
      text-transform: uppercase;
      color: #090909;
    }

    div {
      margin: 0 0 21px 0;
      max-width: 260px;

      a {
        line-height: 144.5%;
        color: #090909;
        text-decoration: none;
      }
    }

  }

  .v-recommendation {
    max-width: 1172px;
    margin: 28px auto 0 auto;

  }

</style>
