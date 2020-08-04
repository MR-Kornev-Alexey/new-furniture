<template>
  <v-row class="v-proposal d-flex justify-center">
    <v-col md="3" class=" d-flex align-content-center v-upload__items span-0">
      <img alt="proposal-0" src="../../assets/img/svg/proposal-0.svg">
      <span class=" d-flex align-self-center ">Уникальный дизайн мебели </span>
    </v-col>
    <v-col md="3" class=" d-flex align-content-center v-upload__items span-1">
      <img alt="proposal-1" src="../../assets/img/svg/proposal-1.svg">
      <span class=" d-flex align-self-center ">Быстрые сроки изготовления </span>
    </v-col>
    <v-col md="3" class=" d-flex align-content-center v-upload__items span-2">
      <img alt="proposal-2" src="../../assets/img/svg/proposal-2.svg">
      <span class=" d-flex align-self-center ">Большой выбор материалов</span>
    </v-col>
    <v-col md="3" class=" d-flex align-content-center v-upload__items span-3">
      <img alt="proposal-3" src="../../assets/img/svg/proposal-3.svg">
      <span class=" d-flex align-self-center ">Возможность создать “под себя”</span>
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
    width: 1142px;
    height: 96px;
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
      img{
        margin-right: 20px;
      }

    }
  }

</style>
