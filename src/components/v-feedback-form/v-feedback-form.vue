<template>
  <v-row class="v-feedback-form justify-sm-center">
    <v-col class="left-column" md="4" sm="11" cols="12">
      <h2>Оставьте свой отзыв о нашей мебели</h2>
      <div class="form-description">
        Мы изготавливаем диваны по индивидуальным размерам и
        в индивидуальных комплектациях, для расчета стоимости напишите,
        пожалуйста, в директ или оставьте заявку в комментариях
      </div>
    </v-col>
    <v-col class="right-column" md="8" sm="11" cols="12">
      <label>
        <textarea cols="45" name="text-area" placeholder="Текст отзывы" rows="10"></textarea>
      </label>
      <div class="d-flex justify-space-between right-column__item">
        <label>
          <input placeholder="Ваше имя" type="text">
        </label>
        <label>
          <input placeholder="+ 7 (XXX) XXX-XX-XX" type="text">
        </label>
      </div>
      <div class="d-flex align-content-center right-column__item_second">
        <h3 class="d-flex align-self-center">
          добавить фото <span class="mdi mdi-plus"></span>
        </h3>
        <button class="btn-send align-self-end ">Отправить</button>
      </div>

    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'v-feedback-form'
}
</script>

<style lang="scss" scoped>
  .v-feedback-form {
    margin: 32px auto 0 auto;
    max-width: 1146px;
    min-height: 324px;

    .left-column {
      padding: 22px 0 0 62px;
    }

    h2 {
      max-width: 251px;
      min-height: 24px;
      font-size: 25px;
      line-height: 113.5%;
      margin: 0 0 51px 0;
    }

    h3 {
      line-height: 136.5%;
      /* or 19px */
      text-transform: uppercase;
    }

    .right-column {
      padding: 0 0 0 18px;

      .right-column__item {
        width: 648px;
        margin: 16px 0 0 0;
      }

      .right-column__item_second {
        position: relative;
        max-width: 648px;
        margin: 34px 0 0 0;

        .btn-send {
          position: absolute;
          right: 0;
          left: 73%;
          bottom: -10px;
        }
      }
    }

    .form-description {
      max-width: 251px;
      min-height: 155px;
      font-size: 14px;
      line-height: 149%;
    }

    textarea {
      padding: 10px 0 0 10px;
      width: 648px;
      height: 117px;
    }

    input {
      padding-left: 10px;
      width: 318px;
      height: 42px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .v-feedback-form .left-column {
      padding: 22px 0 0 17px;
    }
    .v-feedback-form .right-column {
      padding: 0;
    }
  }

  @media only screen and (max-width: 1024px) {
    .v-feedback-form .left-column {
      padding: 22px 0 0 17px;
    }
    .v-feedback-form .right-column {
      padding: 0;
    }
  }

  @media only screen and (max-width: 960px) {
    .v-feedback-form .right-column .right-column__item_second {
      position: relative;
      width: 471px;
      margin: 34px 0 0 0;
    }
    .v-feedback-form .right-column .right-column__item_second .btn-send {
      left: 78%;
      bottom: -10px;
    }
    .v-feedback-form .right-column .right-column__item {
      width: 545px;
    }
    .v-feedback-form input {
      padding-left: 10px;
      width: 250px;
      height: 42px;
    }
    .v-feedback-form textarea {
      width: 545px;
    }

    .v-feedback-form .left-column {
      padding: 22px 0 0 10px;
    }
    .v-feedback-form .right-column {
      padding: 0 0 0 78px;
      margin: 0 0 46px 0;
    }

  }

  @media only screen and (max-width: 900px) {
    .v-feedback-form h2 {
      margin: 0 0 17px 0;
    }
    .v-feedback-form .form-description {
      max-width: 620px;
      min-height: 80px;
      text-align: justify;
    }
    .v-feedback-form .left-column {
      padding: 22px 0 0 79px;
    }
    .v-feedback-form .right-column .right-column__item_second .btn-send {
      left: 94%;
      bottom: -10px;
    }
    .v-feedback-form .right-column .right-column__item {
      width: 619px;
    }
    .v-feedback-form textarea {
      width: 620px;
    }
    }

  @media only screen and (max-width: 768px) {
    .v-feedback-form .right-column {
      padding: 0 0 0 28px;
    }
    .v-feedback-form .left-column {
      padding: 22px 0 0 28px;
    }

  }

  @media only screen and (max-width: 660px) {

    .v-feedback-form textarea ,
    .v-feedback-form .right-column .right-column__item {
      width: 585px;
    }

    .v-feedback-form .right-column {
      padding: 0 0 0 0;
    }
    .v-feedback-form .left-column {
      padding: 22px 0 0 0;
    }

  .v-feedback-form .right-column .right-column__item_second .btn-send {
    left: 87%;
    }
  }

  @media only screen and (max-width: 600px) {

    .v-feedback-form .form-description {
      max-width: 525px;
      min-height: 80px;
      text-align: justify;
    }
     .v-feedback-form .right-column .right-column__item {
      width: 500px;
    }
    .v-feedback-form textarea {
      width: 525px;
    }

    .right-column__item {
      flex-direction: column;
    }
    .v-feedback-form input {
      margin: 3px 0;
    }
    .v-feedback-form .right-column .right-column__item_second .btn-send {
      left: 74%;
    }
  }

  @media only screen and (max-width: 540px) {
   .v-feedback-form .form-description {
      max-width: 520px;
      min-height: 80px;
     text-align: justify;
    }
    .v-feedback-form textarea {
      width: 510px;
    }
    .v-feedback-form .right-column .right-column__item_second .btn-send{
      left: 69%;
    }
    .v-feedback-form .right-column .right-column__item {
      width: 480px;
    }

      }

  @media only screen and (max-width: 414px) {
    .v-feedback-form h2 {
       margin: 0 0 13px 0;
    }
      .v-feedback-form .right-column .right-column__item_second {
    width: 380px;
  }
    .v-feedback-form .form-description {
      max-width: 376px;
      min-height: 96px;
     text-align: justify;
    }

    .v-feedback-form .right-column .right-column__item {
      width: 380px;
    }
    .v-feedback-form textarea {
      width: 380px;
    }
    .v-feedback-form .right-column .right-column__item_second .btn-send {
      left: 52%;
    }
  }

  @media only screen and (max-width: 375px){
    .v-feedback-form .form-description {
      max-width: 321px;
      min-height: 96px;
      text-align: justify;
    }
     .v-feedback-form textarea {
     width: 346px;
   }
    .v-feedback-form .right-column .right-column__item_second {
          width: 359px;
     }
  }
  @media only screen and (max-width: 360px){
    .v-feedback-form .right-column .right-column__item_second .btn-send {
      left: 0;
      bottom: -60px;
    }

    .v-feedback-form .right-column .right-column__item_second {
      width: 317px;
    }
  .v-feedback-form .right-column .right-column__item {
    width: 328px;
  }
    .v-feedback-form textarea {
      width: 260px;
    }
  }
  @media only screen and (max-width: 320px){
    .v-feedback-form .form-description {
      max-width: 260px;
      min-height: 139px;
    text-align: justify;
    }}

</style>
