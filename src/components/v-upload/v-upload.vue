<template>
  <v-row class="v-upload d-flex justify-center">
    <v-col class="align-content-center justify-center upload-first " md="5">
      <div>
        <h2>Загрузить проект <span>на просчет</span></h2>
      </div>
      <div class="btn-upload d-flex  align-content-center">
        <h3 class="d-flex align-self-center">
          JPG, PNG, pdf
        </h3>
        <img alt="plus" src="../../assets/img/svg/plus.svg">
      </div>
    </v-col>
    <v-col class=" align-content-center v-upload__inputs" md="4">
      <label>
        <input class="pl-5" type="text" placeholder="Ваше имя">
      </label>
      <label>
        <input class="pl-5" type="text" placeholder="+7(ХХХ)ХХХ-ХХ-ХХ">
      </label>
    </v-col>
    <v-col class=" d-flex v-upload__btn" md="3">
       <button class="btn-send align-self-end ">Отправить</button>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'v-upload'
}
</script>

<style lang="scss" scoped>
  .v-upload__inputs {
    padding-left: 15px;
    margin-top: 17px;
  input{
    margin: 4px 0;
    width: 294px;
    height: 42px;
    left: 868px;
    top: 1518.16px;
  }
  }
  .v-upload {
    margin: 22px auto 0 auto;
    width: 1142px;
    height: 96px;

    .upload-first {
      padding-left: 168px;

      h2 {
        font-size: 20px;
        line-height: 23px;
        color: #201F25;

        span {
          color: #D7B256;
        }
      }

      .btn-upload {
        margin-top: 20px;
        padding-left: 28px;
        width: 276.5px;
        height: 74.2px;
        background: #FFFBF0;
        border: 1px solid #D7B256;
        box-sizing: border-box;

        h3 {
          font-size: 15px;
          line-height: 15px;
          text-transform: uppercase;
          color: #201F25;
        }
        img{
          margin-left: 81px;
        }
      }

    }
  }
  .v-upload__btn{
    position: relative;
  }
</style>
