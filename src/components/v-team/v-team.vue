<template>
  <div class="v-team wrapper">
    <div class="v-team__first">
      <h2>Мы создаем <span>уникальную </span>мебель</h2>
      <div class="v-team__first_description">
        Мы изготавливаем диваны по индивидуальным размерам и в индивидуальных комплектациях,
        для расчета стоимости напишите, пожалуйста, в директ или оставьте заявку в комментариях.
      </div>
      <v-transit :address='addressOut'
                 :color='colorBlack'
                 :text='textOut'
      />
      <div class="down-row">
        Северное полушарие восстанавливает неопровержимый широколиственный лес,
        при этом к шесту прикрепляют ярко раскрашенных бумажных или матерчатых карпов,
        по одному на каждого мальчика в семье.
        <img src="../../assets/img/svg/arrow-down.svg" alt="arrow">
      </div>
    </div>
    <div class="v-team__second">
      <div>
        <h3>Креативный директор</h3>
        <span>Элена</span>
      </div>

    </div>
    <div class="v-team__third">
      <div>
        <h3>Конструктор</h3>
        <span>Григорий</span>
      </div>
    </div>
    <div class="v-team__fourth">
      <div>
        <h3>Конструктор</h3>
        <span> Алексей </span>
      </div>
    </div>
  </div>
</template>

<script>
import vTransit from '../v-common/v-transit'

export default {
  name: 'v-team',
  components: {
    vTransit
  },
  data () {
    return {
      textOut: 'Подробнее об этом',
      colorBlack: true,
      addressOut: '#'
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    display: grid;
    grid-template-columns: repeat(30, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-template-areas:
     "b1 b1 b1 b1 b1 b1 b1 b1 b1 b1  b2 b2 b2 b2 b2 b2 b2 b2  b3 b3 b3 b3 b3 b3  b4 b4 b4 b4 b4 b4 ";
  }

  .v-team {
    max-width: 1172px;
    margin: 28px auto 0 auto;
    h3{
      font-size: 16px;
      line-height: 106.5%;
      color: #FFFFFF;
    }
    span{
      color: #FFFFFF;
    }
  }

  .v-team__first {
    padding: 44px 0 0 18px;
    grid-area: b1;

    h2 {
      margin: 0 0 81px 0;
      width: 313.63px;
      height: 60.38px;
      font-size: 30px;
      line-height: 113.5%;

      span {
        color: #D7B256;
      }

    }
    .down-row{
      margin: 65px 0 0 42px;
      position: relative;
      width: 246.99px;
      height: 92.01px;
      font-size: 13px;
      line-height: 149%;
      img{
        position: absolute;
        right: -56px;
        top: 62px;
      }
    }
    .v-team__first_description {
      margin: 0 0 62px 0;
      font-size: 15px;
      line-height: 149%;
      width: 304.94px;
      height: 84.1px;
    }
  }

  .v-team__second {
    margin: 44px 0 0 -14px;
    display: grid;
    align-items: end;
    grid-area: b2;
    background-image: linear-gradient(0.48deg, #201F25 1.58%, rgba(61, 59, 59, 0) 36.25%),url("../../assets/img/team-1.png") ;
    width: 293.35px;
    height: 426.97px;
  }

  .v-team__third {
    margin: 82px 0 0 -35px;
    display: grid;
    align-items: end;
    grid-area: b3;
    background-image: linear-gradient(0.48deg, #201F25 1.58%, rgba(61, 59, 59, 0) 36.25%),url("../../assets/img/team-2.png") ;
    width: 243px;
    height: 352px;
  }

  .v-team__fourth {
    margin: 82px 0 0 -26px;
    display: grid;
    align-items: end;
    grid-area: b4;
    background-image: linear-gradient(0.48deg, #201F25 1.58%, rgba(61, 59, 59, 0) 36.25%), url("../../assets/img/team-3.png") ;
    width: 243px;
    height: 352px;
  }

  .v-team__fourth,
  .v-team__third,
  .v-team__second {
    background-repeat: no-repeat;
    background-size: cover;
    div{
      margin: 0 0 30px 17px;
    }
  }
  @media only screen and (max-width: 1024px) {
    .wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: minmax(100px, auto);
      grid-template-areas:
     "b1    b2 "
     "b3  b4  ";
    }
    .v-team__second{
      margin: 0 0 0 12px;
      width: 473px;
      height: 547px;
    }
    .v-team__third,.v-team__fourth {
      margin: 25px 0 0 12px;
      width: 473px;
      height: 547px;
    }
    .v-team__first .down-row {
          width: 380.99px;
       }
  }
  @media only screen and (max-width: 960px) {
    .v-team__second{
      margin: 0 0 0 12px;
      width: 412px;
      height: 547px;
    }
    .v-team__third,.v-team__fourth {
      margin: 25px 0 0 12px;
      width: 412px;
      height: 547px;
    }
    .v-team__first .down-row {
        width: 355px;
    }
  }
  @media only screen and (max-width: 900px) {
   .v-team__first .down-row{
      margin: 97px 0 0 18px;
    }
  }
  @media only screen and (max-width: 860px) {
    .v-team__first .down-row {
      margin: 97px 0 0 2px;
    }
  }
  @media only screen and (max-width: 660px) {
    .wrapper {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: minmax(100px, auto);
      grid-template-areas:
     "b1    b1 "
     "b2    b2 "
     "b3    b3 "
     "b4    b4 ";
    }
    .v-team__second{
      margin: 28px 0 0 12px;
      align-self: center;
      justify-self: center;
        }
    .v-team__second,.v-team__third,.v-team__fourth{
      width: 412px;
      height: 547px;
      align-self: center;
      justify-self: center;
    }
    .v-team__third,.v-team__fourth {
      margin: 28px 0 0 12px;
     }
    .v-team__first .down-row {
      display: none;
    }
  }
</style>
