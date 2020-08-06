<template>
    <v-row class="v-feedback-form">
      <v-col md="4" class="left-column">
        <h2>Оставьте свой отзыв о нашей мебели</h2>
        <div class="form-description">
          Мы изготавливаем диваны по индивидуальным размерам и
        в индивидуальных комплектациях, для расчета стоимости напишите,
        пожалуйста, в директ или оставьте заявку в комментариях
        </div>
      </v-col >
      <v-col  md="8" class="right-column">
        <label>
          <textarea rows="10" cols="45" name="text-area"></textarea>
        </label>
        <div class="d-flex justify-space-between right-column__item" >
          <label>
            <input type="text">
          </label>
          <label>
            <input type="text">
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
  .v-feedback-form{
    margin: 32px auto 0 auto;
    width: 1146px;
    height: 324px;
    .left-column{
      padding: 22px 0 0 62px;
    }
    h2{
      width: 251px;
      height: 24px;
      font-size: 25px;
      line-height: 113.5%;
      margin: 0 0 51px 0;
    }
    h3{
      line-height: 136.5%;
      /* or 19px */
      text-transform: uppercase;
    }
    .right-column{
      padding: 0 0 0 18px;
      .right-column__item{
        width: 648px;
        margin: 16px 0 0 0;
      }
      .right-column__item_second{
        position: relative;
        width: 648px;
        margin: 34px 0 0 0;
        .btn-send{
          position: absolute;
          right: 0;
          left: 73%;
          bottom: -10px;
        }
      }
    }

    .form-description{
      width: 251px;
      height: 155px;
      font-size: 14px;
      line-height: 149%;
    }
    textarea{
      width: 648px;
      height: 117px;
    }
    input{
      width: 318px;
      height: 42px;
    }
  }

</style>
