<template>
  <footer class="v-footer">
    <v-row class="row-footer">
      <v-col class="d-flex justify-end img-logo" md="3">
        <img alt="logo" src="../../assets/img/svg/logo.svg">
      </v-col>
      <v-col class="d-block footer__item1" md="2">
        <div class="selected"><a href="#">О производстве</a></div>
        <div><a href="#">Материалы</a></div>
        <div><a href="#">О нас</a></div>
        <div><a href="#">Портфолио</a></div>
      </v-col>
      <v-col class="d-block footer__item2" md="1">
        <div><a href="#">Стиль</a></div>
        <div><a href="#">Блог</a></div>
        <div><a href="#">Акция</a></div>
      </v-col>
      <v-col class="d-block footer__item3" md="2">
        <div><a href="#">Загрузка проекта</a></div>
        <div><a href="#">Доставка и оплата</a></div>
        <div><a href="#">Контакты</a></div>
      </v-col>
      <v-col class="d-block footer__item4" md="3">
        <div class="footer-phone__num">+7 (495) 792-0668</div>
        <div class="footer-phone__sub">Современная мебельная фабрика</div>
      </v-col>
    </v-row>
  </footer>
</template>

<script>
export default {
  name: 'v-footer'
}
</script>

<style lang="scss" scoped>
  .v-footer {
    margin: 102px auto 0 auto;
    max-width: 2040px;
    height: 188px;
    background: #F3F2F2;
    .row-footer{
      max-width: 2040px;
    }
    .footer-phone__num {
      font-family: "Akzidenz-Grotesk Pro", sans-serif;
      font-size: 20px;
      line-height: 24px;
      color: #000000;
      letter-spacing: 1px;
     padding: 0 0 0 0;
    }
    .footer-phone__sub {
      font-size: 14px;
      line-height: 14px;
      text-align: right;
      width: 208px;
      margin: 7px 12px 0 -20px;
          }

    .footer__item1 {
      padding-left: 196px;

      div {
        padding: 6px 0;
      }
    }

    .footer__item2 {
      padding-left: 72px;

      div {
        padding: 6px 0;
      }
    }

    .footer__item3 {
      padding-left: 88px;

      div {
        padding: 6px 0;
      }
    }
    .footer__item4{
      padding: 6px 25px 0 72px;
    }
    .img-logo {
      padding: 0 43px 0 0;

      img {
        height: 106px;
      }
    }

    a {
      font-size: 13px;
      line-height: 13px;
      color: #828282;
      text-decoration: none;
    }

    .selected a {
      font-size: 13px;
      line-height: 13px;
      color: #0E0D0D;
      text-decoration: none;
    }
  }

</style>
