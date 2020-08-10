<template>
  <div class="v-upload v-upload-wrapper">
    <div class="first upload-first">
      <div class="first_tittle">
        <h2>Загрузить проект <span>на просчет</span></h2>
      </div>
      <div class="btn-upload d-flex  align-content-center">
        <h3 class="d-flex align-self-center">
          JPG, PNG, pdf
        </h3>
        <img alt="plus" src="../../assets/img/svg/plus.svg">
      </div>
    </div>
    <div class="second v-upload__inputs">
      <div>
        <label>
          <input class="pl-5" type="text" placeholder="Ваше имя">
        </label>
      </div>
      <div>
        <label>
          <input class="pl-5" type="text" placeholder="+7(ХХХ)ХХХ-ХХ-ХХ">
        </label>
      </div>
    </div>
    <div class="third">
      <button class="btn-send">Отправить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-upload'
}
</script>

<style lang="scss" scoped>
  .v-upload-wrapper{
    border-bottom: 1px solid #DADADA;
    border-left: 1px solid #DADADA;
    border-right: 1px solid #DADADA;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(15, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-template-areas:
    "fb fb fb fb fb fb  sb sb sb sb sb  tb tb tb tb "
  }

  .first {
    grid-area: fb;
  }
  .second{
    padding: 11px 0 0 21px;
    grid-area: sb;
  }
  .third{
    padding: 70px 0 0 0;
    grid-area: tb;
    .btn-send{
      margin: 0 0 0 -27px ;
    }

  }
  .v-upload__inputs__place{
    padding: 11px 0 0 3px;
  }
  .v-upload__inputs {

    input{
      margin: 6px 0;
      width: 294px;
      height: 42px;
    }
  }
  .v-upload {
    margin: 22px auto 0 auto;
    max-width: 1142px;
    height: 166px;

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

  @media only screen and (max-width: 1024px) {
    .v-upload .upload-first{
      padding-left: 57px;
    }
    .second {
      padding: 11px 0 0 0;
    }
    .third .btn-send {
      margin: 0 0 0 21px;
    }
  }
  @media only screen and (max-width: 900px) {
    .v-upload__inputs input {
      width: 275px;
    }
    .v-upload .upload-first{
      padding-left: 31px;
    }
    .second {
      padding: 11px 0 0 0;
    }
    .third .btn-send {
      margin: 0 0 0 21px;
    }
  }
  @media only screen and (max-width: 768px) {
    .third {
      padding: 0;
    }
    .v-upload__inputs,.upload-first{
      display: inline-flex;
    }
    .v-upload-wrapper{
      height: 274px;
      grid-template-columns: repeat(1, 1fr);
      grid-template-areas:
         "fb "
         "sb "
         "tb "
    }
    .first{
      justify-self: center;
      align-content: center;
      .first_tittle{
        align-self: center;
        width: 220px;
        margin: 0 36px 0 0;
      }
    }
    .second {
      padding: 11px 0 0 0;
      justify-self: center;
      input{
        margin: 0 4px ;
      }
    }
    .third {
      display: grid;
      justify-self: center;
    }

    .third .btn-send {
      margin: 0;
    }
  }
  @media only screen and (max-width: 540px) {
    .v-upload .upload-first {
      padding-left: 0;
    }
    .third {
      padding: 0;
    }
    .v-upload__inputs,.upload-first{
      display: block;
    }
    .v-upload-wrapper{
      height: 380px;
      grid-template-columns: repeat(1, 1fr);
      grid-template-areas:
         "fb "
         "sb "
         "tb "
    }
    .first{
      justify-self: center;
      align-content: center;
      .first_tittle{
        align-self: center;
        width: 220px;
        margin: 0;
      }
    }
    .second {
      padding: 11px 0 0 0;
      justify-self: center;
      input{
        margin: 4px ;
      }
    }
    .third {
      display: grid;
      justify-self: center;
    }

    .third .btn-send {
      margin: 0;
    }
  }
</style>
