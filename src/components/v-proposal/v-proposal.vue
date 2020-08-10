<template>
  <v-row class="v-proposal d-flex justify-center">
    <v-col md="3" sm="6" xs="10" class=" d-flex align-content-center v-upload__items span-0 justify-sm-center justify-xs-center">
      <img alt="proposal-0" src="../../assets/img/svg/proposal-0.svg">
      <span class=" d-flex align-self-center v-upload__items__tittle">Уникальный дизайн мебели </span>
    </v-col>
    <v-col md="3" sm="6" xs="10" class=" d-flex align-content-center v-upload__items span-1 justify-sm-center">
      <img alt="proposal-1" src="../../assets/img/svg/proposal-1.svg">
      <span class=" d-flex align-self-center v-upload__items__tittle">Быстрые сроки изготовления </span>
    </v-col>
    <v-col md="3" sm="6" xs="10" class=" d-flex align-content-center v-upload__items span-2 justify-sm-center">
      <img alt="proposal-2" src="../../assets/img/svg/proposal-2.svg">
      <span class=" d-flex align-self-center v-upload__items__tittle ">Большой выбор материалов</span>
    </v-col>
    <v-col md="3" sm="6" xs="10" class=" d-flex align-content-center v-upload__items span-3 justify-sm-center">
      <img alt="proposal-3" src="../../assets/img/svg/proposal-3.svg">
      <span class=" d-flex align-self-center v-upload__items__tittle ">Возможность создать “под себя”</span>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'v-proposal'
}
</script>

<style lang="scss" scoped>
  .v-proposal{
    margin: 64px auto 0 auto;
    max-width: 1142px;
    min-height: 96px;
    background: #f8f8f8;
    .span-0{
      padding-left: 100px;
      span{
        width: 120px;
      }
    }
    .span-1{
      padding-left: 68px;
      span{
        width: 120px;
      }

    }
    .span-2{
      padding-left: 22px;
      span{
        width: 120px;
      }
    }
    .span-3{
      span{
        width: 150px;
      }
    }
    .v-upload__items{
      .v-upload__items__tittle{
        width: 150px;
      }
      img{
        margin-right: 20px;
      }

    }
  }
  @media only screen and (max-width: 1024px) {
    .v-proposal {
      .span-0 {
        padding-left: 55px;
      }
      .span-1 {
        padding-left: 35px;
      }

    }
  }
  @media only screen and (max-width: 960px) {
    .v-proposal {
      .span-0 {
        padding-left: 43px;
      }
      .span-1 {
        padding-left: 38px;
      }
      }
  }
  @media only screen and (max-width: 900px) {
    .v-proposal {
      .span-0,.span-1 ,.span-2,.span-3   {
        padding-left: 15px;
      }
    }
    }
    @media only screen and (max-width: 860px) {
      .v-proposal {
        .span-0,.span-1 ,.span-2,.span-3   {
          padding-left: 0;
        }
        .v-upload__items img {
          height: 40px;
        }
      }
    }
  @media only screen and (max-width: 411px) {
    .v-proposal {
      height: 217px;
      margin: 14px auto 0 auto;
    }
    .v-proposal {
      .span-0,.span-1 ,.span-2,.span-3   {
        padding-left: 90px;
        padding-bottom: 10px;
      }
     }
  }
  @media only screen and (max-width: 360px) {
    .v-proposal {
      .span-0,.span-1 ,.span-2,.span-3   {
        padding-left: 58px;
        }
      }
  }

</style>
