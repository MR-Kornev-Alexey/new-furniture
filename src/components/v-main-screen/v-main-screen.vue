<template>
<v-row class="v-main-screen">
  <v-col>
    <div class="v-main-screen__tittle">
      <h1>Мы производим корпусную и мягкую мебель</h1>
      <span><a href="#">Перейти в каталог</a></span>
      <img src="../../assets/img/svg/angle-right.svg" alt="angle">
  </div>
  </v-col>
  <v-col class="d-flex justify-center ">
    <div class="d-flex align-self-end screen-pontoon" >
    <img  src="../../assets/img/svg/pontoon.svg" alt="">
    </div>
  </v-col>
</v-row>
</template>

<script>
export default {
  name: 'v-main-screen'
}
</script>

<style scoped lang="scss">
  .v-main-screen{
    .v-main-screen__tittle{
      margin-left: 384px;
      h1{
        font-family: "MullerW00-Regular", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 148.5%;
        text-transform: uppercase;
        width: 509px;
        height: 109px;
        margin-top: 129px;
        margin-bottom: 4px;
      }
      a{
        color:#fff;
        text-transform: uppercase;
        font-family: "MullerW00-Regular", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 132%;
      }
      span{
        margin-right: 12px;
      }
    }
    background-image: url("../../assets/img/bg-screen-first.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 358px;
    color: #fff;
  }

  .screen-pontoon{
    padding-left: 57px;
    padding-bottom: 14px;
  }
</style>
