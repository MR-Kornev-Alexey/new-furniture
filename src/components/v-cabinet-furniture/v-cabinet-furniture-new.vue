<template>
  <div class="v-cabinet-furniture furniture-wrapper">
    <div class="left-header">
      <div class="left-header__tittle">
        Корпусная мебель
      </div>
      <h2>Каталог наших изделий </h2>
      <div class="left-header__description">
        Вы найдете мебель под ваш интерьер раскрашенных бумажных или матерчатых карпов, по одному на каждого мальчика в
        семье.
      </div>
    </div>
    <div class="first-side-one"><img alt="furniture" src="../../assets/img/furniture/furniture-0.png">
      <div class="arrow">
        <a href="#">кресла <img src="../../assets/img/svg/arrow.svg" alt="Arrow"></a>
      </div>
    </div>
    <div class="first-side-two"><img alt="furniture" src="../../assets/img/furniture/furniture-1.png">
      <div class="arrow">
        <a href="#">кровати <img src="../../assets/img/svg/arrow.svg" alt="Arrow"></a>
      </div>
    </div>
    <div class="second-side-one"><img alt="furniture" src="../../assets/img/furniture/furniture-2.png">
      <div class="arrow">
        <a href="#">тумбы <img src="../../assets/img/svg/arrow.svg" alt="Arrow"></a>
      </div>
    </div>
    <div class="second-side-two"><img alt="furniture" src="../../assets/img/furniture/furniture-3.png">
      <div class="arrow">
        <a href="#">пуфы <img src="../../assets/img/svg/arrow.svg" alt="Arrow"></a>
      </div>
    </div>

    <div class="right v-furniture-right">
      <div class="v-furniture-right__tittle">
        <div class="v-furniture-right__tittle_h2">
          <h2>Диваны</h2>
        </div>

        <v-transit  :text = 'textOut2'
                    :address = 'addressOut'
                    :color= 'colorBlack'
                    class="corp-transit"
        />

      </div>
      <div class="v-furniture-right__bottom">
        <img src="../../assets/img/svg/around-arrow.svg" alt="around-arrow">
        Северное полушарие восстанавливает неопровержимый широколиственный лес,
        при этом к шесту прикрепляют ярко раскрашенных
      </div>
    </div>
  </div>
</template>

<script>
import vTransit from '../v-common/v-transit'

export default {
  name: 'v-cabinet-furniture-new',
  components: {
    vTransit
  },
  data () {
    return {
      textOut2: 'Подробнее',
      colorBlack: true,
      addressOut: '#'
    }
  }
}
</script>

<style lang="scss" scoped>
  .furniture-wrapper {
    .arrow {
      position: relative;
      padding: 7px 0 0 0;
      .icon-arrow{
        width: 20px;
        height: 10px;
      }
      a{
        font-size: 15px;
        line-height: 113.5%;
        color: #090909;
        opacity: 0.5;
        text-decoration: none;
      }
    }

    max-width: 1142px;
    margin: 0 auto 0 auto;
    display: grid;
    grid-template-columns: repeat(15, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-template-areas:
      "lfh lfh lfh lfh lfh lfh  rgt rgt rgt rgt rgt rgt rgt rgt rgt"
      "fso fso fso fst fst fst  rgt rgt rgt rgt rgt rgt rgt rgt rgt"
      "sso sso sso sst sst sst  rgt rgt rgt rgt rgt rgt rgt rgt rgt"
  }

  .left-header {
    grid-area: lfh;
    .left-header__tittle {
      font-size: 14px;
      line-height: 149%;
      text-transform: uppercase;
      color: #D7B256;
    }

    h2 {
      margin: 6px 0 13px 0;
      font-size: 30px;
      line-height: 113.5%;
      /* or 34px */
      color: #090909;
    }

    .left-header__description{
      width: 330.75px;
      height: 42.41px;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 141%;
      /* or 20px */
      color: #0D0C0C;
  }
  }

  .first-side-one {
    padding: 30px 0 0 0 ;
    grid-area: fso;
  }

  .first-side-two {
    padding: 30px 0 0 23px;
    grid-area: fst;
  }

  .second-side-one {
    padding: 22px 0 0 0 ;
    grid-area: sso;
  }

  .second-side-two {
    padding: 22px 0 0 23px ;
    grid-area: sst;
  }

  .right {
    grid-area: rgt;
    background-image: url("../../assets/img/furniture/sofa-0.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 748px;
    color: #fff;
    margin-left: 33px;
  }

  .v-cabinet-furniture {
    padding-top: 60px;

    .v-furniture-right {
      position: relative;

      .v-furniture-right__bottom {
        position: absolute;
        width: 215.17px;
        height: 92.01px;
        font-size: 12px;
        line-height: 149%;
        color: #090909;
        bottom: 64px;
        right: 32px;
      }

      .v-furniture-right__tittle {
        img {
          margin-left: 10px;
        }

        .corp-transit {
          margin-left: 48px;
        }

        .v-furniture-right__tittle_h2 {
          padding-left: 49px;
          padding-top: 20px;
        }

        h2 {

          font-size: 40px;
          line-height: 169.5%;
          color: #090909;
          margin-bottom: 6px;

        }
      }
    }

    .furniture-left {
      margin-left: 388px;

      .furniture-left__tittle {
        h2 {
          font-size: 30px;
          line-height: 113.5%;
          color: #090909;
          padding-top: 6px;
          padding-bottom: 8px;
        }

        div {
          font-size: 14px;
          line-height: 22px;
          color: #0D0C0C;
          width: 330px;
        }

      }

    }

  }

  .furniture-block {
    width: 600px;
    margin-left: 374px;

    .left-10 {
      margin-left: 10px;
    }

    .furniture-block__item {
      display: inline-block;
      padding: 13px;
    }
  }

</style>
