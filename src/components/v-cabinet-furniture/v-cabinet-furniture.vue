<template>
  <v-row class="v-cabinet-furniture">
    <v-col md="5">
      <div class="furniture-left d-block justify-center ">
        <div class="furniture-left__header ">
          Корпусная мебель
        </div>
        <div class="furniture-left__tittle">
          <h2>Каталог наших изделий </h2>
          <div>
          Вы найдете мебель под ваш интерьер раскрашенных бумажных или матерчатых карпов, по одному на каждого мальчика в семье.
        </div>
        </div>

      </div>
      <div class="furniture-block ">
        <div class="furniture-block__item">
          <div>
            <img alt="furniture" src="../../assets/img/furniture/furniture-0.png">
          </div>
          <div class="arrow">
              <a href="#">кресла</a>
         </div>
        </div>
        <div class="furniture-block__item left-10">
          <div>
            <img alt="furniture" src="../../assets/img/furniture/furniture-1.png">
          </div>
          <div class="arrow">
            <a href="#">Кровати</a>
          </div>
        </div>
        <div class="furniture-block__item ">
          <div>
            <img alt="furniture" src="../../assets/img/furniture/furniture-2.png">
          </div>
          <div class="arrow">
            <a href="#">тумбы</a>
          </div>
        </div>
        <div class="furniture-block__item left-10">
          <div>
            <img alt="furniture" src="../../assets/img/furniture/furniture-3.png">
          </div>
          <div class="arrow">
            <a href="#">пуфы</a>
          </div>
        </div>
      </div>
    </v-col>
    <v-col md="7">
      <div class="v-furniture-right">
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
    </v-col>
  </v-row>
</template>

<script>
import vTransit from '../v-common/v-transit'

export default {
  name: 'v-cabinet-furniture',
  components: {
    vTransit
  },
  data () {
    return {
      textOut1: 'Отправить каталог',
      textOut2: 'Подробнее',
      colorBlack: '#454343',
      addressOut: '#'
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-cabinet-furniture{
    padding-top: 60px;
    .v-furniture-right{
      position: relative;
      .v-furniture-right__bottom{
        position: absolute;
        width: 215.17px;
        height: 92.01px;
        font-family: "MullerW00-Regular", sans-serif ;
        font-size: 12px;
        line-height: 149%;
        color: #090909;
        bottom: 68px;
        right: 41px;
      }
      .v-furniture-right__tittle{
        img{
          margin-left: 10px;
        }
        .corp-transit {
          margin-left: 48px;
        }
        .v-furniture-right__tittle_h2{
          padding-left: 49px;
          padding-top: 20px;
        }
        h2{
          font-family: "MullerW00-Regular", sans-serif ;
          font-size: 40px;
          line-height: 169.5%;
          color: #090909;
          margin-bottom: 6px;

        }
      }
      background-image: url("../../assets/img/furniture/sofa-0.png");
      background-repeat: no-repeat;
      background-size: cover;
      height: 748px;
      width: 655px;
      color: #fff;
      margin-left: 87px;
    }
    .furniture-left{
      margin-left: 388px;
     .furniture-left__tittle {
        h2 {
          font-family: "MullerW00-Regular", sans-serif ;
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
  .furniture-left__header {
    font-size: 14px;
    line-height: 149%;
    text-transform: uppercase;
    color: #D7B256;
  }

  }
  .furniture-block {
    width: 600px;
    margin-left: 374px;
    .left-10{
      margin-left: 10px;
    }
    .furniture-block__item {
      display: inline-block;
      padding: 13px;

    div a {
        font-family: Muller;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 113.5%;
        color: #090909;
        opacity: 0.5;
        text-decoration: none;
      }
      .arrow {
        position: relative;
      }

      .arrow::after {
        content: "";
        background-image: url("../../assets/img/svg/arrow.svg");
        width: 14px;
        height: 11px;
        bottom: 0;
        right: 134px;
        background-repeat: no-repeat;
        position: absolute;

      }
   }
  }
</style>
