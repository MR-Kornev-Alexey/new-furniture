<template>
  <div class="v-filler row justify-center" id="v-filler">
    <div class="col-md-5 v-filler-pic d-flex">
      <img class="v-filler-pic-icon" src="../../assets/img/main-product/filler.png" alt="filler">

      <div class="d-block fillerMenu-row align-self-end">
        <div class="gray-scale">
          <img src="../../assets/img/svg/gray-scale.png" alt="scale" style="height: 2px">
        </div>
        <div class="d-flex">
          <div        class="fillerMenu-item"
                      :class="[{'width82': item.width82},
                             {'width157': item.width157},
                             {'width157 add2': item.width157&&i===1},
                             {'width157 add3': item.width157&&i===2},
                             {'width157 add5': item.width157&&i===4},
                       ]"
                      :key="i"
                      v-for="(item, i) in fillerMenu">
            <div class="gray-dot"><img src="../../assets/img/svg/gray-ellipse.svg" alt="active"></div>
            <a :href="item.src">{{item.name}}</a>
          </div>
        </div>

      </div>
    </div>
    <div class="col-md-4 v-filler-right">
      <div class="tittle">Наполнитель</div>
      <div class="description">
        <div class="tittle-descr">ОРТОПЕДИЧЕСКИЙ </div>
        Поддерживает анатомически правильное положение тела,
        благодаря автономной работе каждой пружины,
        количество которых равняется 256 шт. на 1 кв. м.
        <div class="tittle-descr">ПОВЫШЕННАЯ КОМФОРТНОСТЬ </div>
        Обладает высокой эластичностью и средним,
        наиболее комфортным, показателем мягкости.
        <div class="tittle-descr"> НАДЕЖНЫЙ И ДОЛГОВЕЧНЫЙ </div>
        Легко выдерживает вес больше 100 кг и служит свыше 10 лет.
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'v-filler',
  data: () => ({
    fillerMenu: [
      {
        name: 'синтепон',
        src: '#',
        width82: true
      },
      {
        name: ' ЭЛАСТИЧНЫЙ ПЕНОПОЛИУРЕТАН',
        src: '#',
        width157: true
      },
      {
        name: 'Войлок',
        src: '#',
        width157: true
      },
      {
        name: 'БЛОК НЕЗАВИСИМЫХ ПРУЖИН',
        src: '#',
        width157: true
      },
      {
        name: 'ДЕРЕВЯННЫЕ ДУГИ',
        src: '#',
        width157: true
      }
    ]

  })
}
</script>

<style lang="scss">
  .gray-scale{
    position: absolute;
    top: -6px;
    left: 37px;
  }
  .gray-dot{
    margin: 0 0 0 0;
  }
  .width157{
    width: 157px;
  }
  .width82{
    width: 82px;
  }
  .add2{
    margin: 0 0 0 12px;
  }
  .add3{
   margin: 0 -11px 0 -27px;
  }
  .add5{
    margin: 0 0 0 9px;
  }
.v-filler{
  margin: 29px auto 0 auto;
  padding: 100px 0 160px 0;
  background: #FBFBFD;
  border: 1px solid #DADADA;
  box-sizing: border-box;
  .v-filler-pic{
    margin: 0 -59px 0 0;
 background: url("../../assets/img/main-product/green-sofa.png") no-repeat;
    background-size: cover;
    width: 798px;
    height: 408px;
    position: relative;
    .v-filler-pic-icon{
      position: absolute;
      bottom: 18px;
      right: 129px;
    }
    .fillerMenu-row{
      position: relative;
      padding: 0 0 0 0;
      margin: 0 0 -122px 108px;
      .fillerMenu-item{
        text-align: center;
      a{ font-size: 12px;
        line-height: 190%;
        color: #090909;
        text-transform: uppercase;
        text-decoration: none;
      }
    }
    }
  }
  .v-filler-right{
    margin: 56px 0 0 0;
    padding: 11px 0 0 169px;
    .tittle{
      font-size: 30px;
      line-height: 113.5%;
      /* or 34px */
      text-transform: uppercase;
      color: #0C0C0C;
      margin: 0 0 25px 0;
    }
    .description{
      font-size: 14px;
      line-height: 136.5%;
      max-width: 320px;
      height: 97.64px;
      .tittle-descr {
        text-transform: uppercase;
        margin: 23px 0 6px 0;
      }
    }
  }
}
</style>
