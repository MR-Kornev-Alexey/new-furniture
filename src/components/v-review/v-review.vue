<template>
  <div class="">
    <v-row class="d-flex v-review justify-center">
          <div
          class="v-review-menu-item"
          :key="i"
          v-for="(item, i) in smallMenu">

          {{item.name}}
        </div>
     </v-row>
    <div class="v-review-tittle d-flex justify-center">
      Обзор
    </div>
    <div class="v-review-big-sofa d-flex justify-center">
      <div class="align-self-center">
        <img src="../../assets/img/svg/big-video.png" alt="stream">
      </div>
    </div>
    <div class="v-review-text">
      Cоркость наблюдателя откровенна. Двойное лучепреломление отчетливо и полно обедняет деструктивный рифт.
      Радиант выслеживает диссонансный
      поперечник. Водопонижение и обезвоживание грунтов вызывают эоловое засоление опущено. Плюмаж изменяет близкий стих.
    </div>
    <div class="row stream-item-all d-flex justify-center">
      <div class="col-md-4">
        <div class="stream-item-1 d-flex justify-center">
          <div class="align-self-center">
            <img src="../../assets/img/svg/big-video.png" alt="stream">
          </div>
        </div>
        <div class="stream-item-title" >
          Наполнитель
        </div>
        <div class="stream-item-description" >
          Однако пауза вызывает хроматический субъект
          политического процесса. Ретро имеет
          самодостаточный винил.
        </div>
      </div>
      <div class="col-md-4">
        <div class="stream-item-2 d-flex justify-center">
          <div class="align-self-center">
            <img src="../../assets/img/svg/big-video.png" alt="stream">
          </div>
        </div>
        <div class="stream-item-title" >
         Фурнитура
        </div>
        <div class="stream-item-description" >
          Однако пауза вызывает хроматический субъект
          политического процесса. Ретро имеет
          самодостаточный винил.
        </div>
      </div>
      <div class="col-md-4">
        <div class="stream-item-3 d-flex justify-center">
          <div class="align-self-center">
            <img src="../../assets/img/svg/big-video.png" alt="stream">
          </div>
        </div>
        <div class="stream-item-title" >
          Функциональность
        </div>
        <div class="stream-item-description" >
          Однако пауза вызывает хроматический субъект
          политического процесса. Ретро имеет
          самодостаточный винил.
        </div>
      </div>

    </div>
  </div>
  </template>

<script>
export default {
  name: 'v-review',
  data: () => ({
    smallMenu: [
      {
        name: 'Обзор'
      },
      {
        name: 'Детали и размеры'
      },
      {
        name: 'Ткани'
      },
      {
        name: 'Наполнитель'
      },
      {
        name: 'Вопросы и ответы'
      }
    ]
  })
}
</script>

<style lang="scss">
  .v-review{
    margin: 134px auto 0 auto;
    max-width: 1144px;
    border-bottom: 1px solid #C0C0C0;
    height: 40px;

    .v-review-menu-item{
      margin: 0 31px 0 45px;
      font-weight: 500;
      font-size: 14px;
      line-height: 14px;
      text-transform: uppercase;
      color: #4A4642;
    }
  }
  .v-review-tittle{
    margin: 36px 0 0 0;
    font-size: 25px;
    line-height: 113.5%;
    /* or 28px */
    text-align: center;
    color: #0C0C0C;
    text-transform: uppercase;
  }
  .v-review-big-sofa{
    margin: 27px auto 0  auto;
    background: url("../../assets/img/main-product/big-sofa.png") no-repeat;
    background-size: cover;
    width: 808px;
    height: 470px;
  }
  .v-review-text{
    margin: 33px auto 0 auto;
    max-width: 631px;
    height: 132px;
    font-size: 16px;
    line-height: 175.5%;
    /* or 28px */

    text-align: center;

    color: #454343;
  }
  .stream-item-all{
    margin: 56px auto 0 auto;
    max-width: 1144px;

    .stream-item-title{
      margin: 23px 0 0 0;
      font-size: 20px;
      line-height: 20px;
      color: #000000;
    }
   .stream-item-description{
     margin: 7px 0 0 0;
     max-width: 294px;
     min-height: 60px;
     font-size: 14px;
     line-height: 136.5%;
     /* or 19px */
     color: #595959;
   }
    .stream-item-1,.stream-item-2,.stream-item-3{
      width: 362px;
      height: 184px;
      background-size: cover;
    }
    .stream-item-1{
      background: url("../../assets/img/main-product/stream-1.png") no-repeat;
    }
    .stream-item-2{
      background: url("../../assets/img/main-product/stream-2.png") no-repeat;
    }
    .stream-item-3{
      background: url("../../assets/img/main-product/stream-3.png") no-repeat;
    }
  }

</style>
