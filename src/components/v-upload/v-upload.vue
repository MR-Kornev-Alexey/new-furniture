<template>
  <v-row class="v-upload d-flex justify-center">
    <v-col class="align-content-center justify-center upload-first" md="5" sm="11">
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
    <v-col class="d-flex align-content-center v-upload__inputs" md="7" sm="11">
      <div class=" v-upload__inputs__place">
        <label>
          <input class="pl-5" type="text" placeholder="Ваше имя">
        </label>
        <label>
          <input class="pl-5" type="text" placeholder="+7(ХХХ)ХХХ-ХХ-ХХ">
        </label>
      </div>
      <div class="">
        <button class="btn-send">Отправить</button>
      </div>

    </v-col>
   </v-row>
</template>

<script>
export default {
  name: 'v-upload'
}
</script>

<style lang="scss" scoped>
  .v-upload__inputs__place{
    padding: 11px 0 0 3px;
   }
  .btn-send{
    margin: 0 0 -11px -10px;
  }
  .v-upload__inputs {

  input{
    margin: 6px 0;
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
      padding-left: 156px;

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
