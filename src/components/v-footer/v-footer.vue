<template>
  <footer class="v-footer">
    <v-row>
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
      <v-col class="d-block footer__item3" md="1">
        <div><a href="#">Загрузка проекта</a></div>
        <div><a href="#">Доставка и оплата</a></div>
        <div><a href="#">Контакты</a></div>
      </v-col>
      <v-col class="d-block" md="3">
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
    .footer-phone__num {
      font-family: "Akzidenz-Grotesk Pro", sans-serif;
      font-size: 20px;
      line-height: 24px;
      color: #000000;
      letter-spacing: 1px;
      padding-top: 8px;
      padding-left: 142px;
    }
    .footer-phone__sub {
      font-size: 14px;
      line-height: 14px;
      text-align: right;
      width: 331px;
      margin-top: 8px;
      padding-left: 154px;
    }
    .footer__item1 {
      padding-left: 160px;

      div {
        padding: 6px 0;
      }
    }

    .footer__item2 {
      padding-left: 14px;

      div {
        padding: 6px 0;
      }
    }

    .footer__item3 {
      padding-left: 14px;

      div {
        padding: 6px 0;
      }
    }

    .img-logo {
      padding-right: 73px;

      img {
        height: 106px;
      }
    }

    margin: 122px auto 0 auto;
    width: 2040px;
    height: 188px;
    background: #F3F2F2;
    font-family: "MullerW00-Regular", sans-serif;
    font-weight: 400;

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
