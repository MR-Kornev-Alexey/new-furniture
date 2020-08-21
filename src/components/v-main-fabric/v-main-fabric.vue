<template>
    <div class="v-main-fabric" id="v-main-fabric">
      <div class="v-review-tittle d-flex justify-center text-center">
        Ткани
      </div>
      <div class="row d-flex justify-center row-fabric">
        <div class="d-block text-center justify-center item-fabric"

          :key="i"
          v-for="(item, i) in mainFabric"

        >
          <div v-if="item.active" class="ellipse-active">
            <img src="../../assets/img/svg/ellipse.svg" alt="Ellipse">
          </div>
          <div>
            <img :src="item.image" alt="Fabric">
          </div>
         <div>
           {{item.name}}
         </div>
          <v-icon v-if="item.active" class="v-icon-small " >mdi-chevron-down</v-icon>
        </div>
      </div>
      <div class="row d-flex justify-end">
        <div class="col-md-3 col-left">
         <div class="v-main-fabric-tittle">
           ВЕЛЮР
         </div>
          <div class="v-main-fabric-description">
            <p>
              Густой бархатистый ворс, мягкий и приятный на ощупь.
            </p>
            <p>
              Плотность варьируется от 240 до 375 г/м².
              Эта цифра указывает вес нитей в граммах на квадратный метр материала.
              Чем плотнее ткань, тем больше значение. Для сравнения: средняя плотность имеет
              показатель 200 г/м².
            </p>
            <p>
              Устойчивость к истиранию по тесту Мартиндейла от 20 000 до 40 000 циклов.
            </p>
          </div>
          <v-transit  :text = 'textOut2'
                      :address = 'addressOut'
                      :color= 'colorBlack'
                      class="corp-transit"
          />
        </div>
        <div class="col-md-7 v-main-fabric-pic">
          <img src="../../assets/img/main-product/vabric-velur-new.png" alt="velur">
        </div>

      </div>
    </div>
</template>

<script>
import vTransit from '../v-common/v-transit'

export default {
  name: 'v-main-fabric',
  components: {
    vTransit
  },
  data: () => ({
    textOut2: 'Выбрать цвет',
    colorBlack: true,
    addressOut: '#',
    mainFabric: [
      {
        name: 'Шенил',
        active: false,
        image: require('@/assets/img/ellipse-fabric/ellipse-1.png')
      },
      {
        name: 'Велюр',
        active: true,
        image: require('@/assets/img/ellipse-fabric/ellipse-2.png')
      },
      {
        name: 'Рогожка',
        active: false,
        image: require('@/assets/img/ellipse-fabric/ellipse-3.png')
      },
      {
        name: 'Замша',
        active: false,
        image: require('@/assets/img/ellipse-fabric/ellipse-4.png')
      },
      {
        name: 'Микрофибра',
        active: false,
        image: require('@/assets/img/ellipse-fabric/ellipse-5.png')
      },
      {
        name: 'Кожа',
        active: false,
        image: require('@/assets/img/ellipse-fabric/ellipse-6.png')
      }
    ]
  })
}
</script>

<style lang="scss">
  .v-main-fabric{
    margin: 80px auto 0 auto ;
    .col-left{
      margin: 115px -79px 0 0;
      .corp-transit{
        margin-top: 19px;
      }
    }
    .v-main-fabric-tittle{
      font-size: 30px;
      line-height: 30px;
      color: #000000;
    }
    .v-main-fabric-description{
      margin: 25px 0 0 0;
      font-size: 14px;
      line-height: 136.5%;
      /* or 19px */
      color: #000000;
      max-width: 320px;
      min-height: 220px;
    }
   .v-main-fabric-pic{
     position: relative;
      margin: 66px 13px 0 0;
      background: url("../../assets/img/main-product/sofa-velur.png") no-repeat;
      background-size: cover;
      width: 1133px;
      height: 502px;
     img{
       position: absolute;
       top: -66px;
       left: 60px;
     }
    }
    .row-fabric{
      margin: 41px 0 0 0;
      .item-fabric{
        position: relative;
        margin: 0 47px 0 47px;
        font-size: 14px;
        line-height: 159%;
        text-transform: uppercase;
        cursor: pointer;
        .ellipse-active{
          position: absolute;
          top: -5px;
          left: -5px;
        }
      }
    }

  }

</style>
