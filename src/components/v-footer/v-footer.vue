<template>
  <footer class="v-footer">
    <div class="v-footer-wrapper">
      <div class="footer-logo img-logo">
        <img alt="logo" src="../../assets/img/svg/logo.svg">
      </div>
      <div class="footer-item1 footer__item1">
        <div class="selected"><a href="#">О производстве</a></div>
        <div><a href="#">Материалы</a></div>
        <div><a href="#">О нас</a></div>
        <div><a href="#">Портфолио</a></div>
      </div>
      <div class="footer-item2 footer__item2">
        <div><a href="#">Стиль</a></div>
        <div><a href="#">Блог</a></div>
        <div><a href="#">Акция</a></div>
      </div>
      <div class="footer-item3 footer__item3">
        <div><a href="#">Загрузка проекта</a></div>
        <div><a href="#">Доставка и оплата</a></div>
        <div><a href="#">Контакты</a></div>
      </div>
      <div class="footer-contact footer__item4">
        <div class="footer-phone__num">+7 (495) 792-0668</div>
        <div class="footer-phone__sub">Современная мебельная фабрика</div>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'v-footer'
}
</script>

<style lang="scss" scoped>
  .v-footer-wrapper {
    margin: 102px auto 0 auto;
    max-width: 2040px;
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-template-areas:
    "lf lf lf   f1 f1 f1 f1  f2 f2   f3 f3 f3   fc fc fc fc "
  }

  .footer-logo {
    grid-area: lf;
  }

  .footer-item1 {
    grid-area: f1;
  }

  .footer-item2 {
    grid-area: f2;
  }

  .footer-item3 {
    grid-area: f3;
  }

  .footer-contact {
    grid-area: fc;
  }

  .v-footer {

    min-height: 188px;
    background: #F3F2F2;

    .row-footer {
      max-width: 2040px;
    }

    .footer-phone__num {
      font-family: "Akzidenz-Grotesk Pro", sans-serif;
      font-size: 20px;
      line-height: 24px;
      color: #000000;
      letter-spacing: 1px;
    }

    .footer-phone__sub {
      font-size: 14px;
      line-height: 14px;
      text-align: right;
      width: 208px;
      margin: 7px 12px 0 -20px;
    }

    .footer__item1 {
      margin: -3px 0 0 97px;

      div {
        padding: 6px 0;
      }
    }

    .footer__item2 {
      margin: -3px 0 0 -2px;

      div {
        padding: 6px 0;
      }
    }

    .footer__item3 {
      margin: -3px 0 0 20px;

      div {
        padding: 6px 0;
      }
    }

    .footer__item4 {
      margin: 7px 0 0 95px;
    }

    .img-logo {
      margin: 0 0 0 24px;

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
  @media only screen and (max-width: 1140px) {
    .v-footer .footer__item4 {
      margin: 7px 0 0 74px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .v-footer .footer__item3 {
      margin: 0 0 0 0;
    }
    .v-footer .footer__item2 {
      margin: 0 0 0 0;
    }
    .v-footer .footer__item4 {
      margin: 7px 0 0 49px;
    }
    .v-footer .footer__item1 {
      margin: -3px 0 0 13px;
    }
    .v-footer .img-logo {
      margin: -3px 0 0 9px;
    }
  }

  @media only screen and (max-width: 900px) {
    .v-footer .footer__item4 {
      margin: 7px 0 0 9px;
    }
    .v-footer .footer__item1 {
      margin: -3px 0 0 13px;
    }
    .v-footer .img-logo {
      margin: -3px 0 0 9px;
    }
  }
  @media only screen and (max-width: 768px) {
    .v-footer-wrapper {
      margin: 6px auto 0 auto;
      grid-template-columns: repeat(8, 1fr);
      grid-template-areas:
    "f1 f1 f1   f2 f2   f3 f3 f3"
    "lf lf lf   lf fc   fc fc fc "
    }
    .v-footer .footer__item3 {
      margin: 0 0 0 33px;
    }
    .v-footer .footer__item2 {
      margin: 0 0 0 20px;
    }
    .v-footer .footer__item4 {
      margin: 7px 0 0 9px;
    }
    .v-footer .footer__item1 {
      margin: -3px 0 0 13px;
    }
    .v-footer .img-logo {
      margin: 10px 0 0 9px;
    }
  }
  @media only screen and (max-width: 414px) {
    .v-footer .footer__item4 {
      margin: 7px 0 0 -48px;
    }
    .v-footer .img-logo {
      margin: 10px 0 0 15px;
    }
  }
  @media only screen and (max-width: 360px) {
    .v-footer-wrapper {

      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
    "f1 f1 "
    "f2 f2 "
    "f3 f3"
    "lf fc "
    }
    .v-footer .footer__item1,.v-footer .footer__item2 ,.v-footer .footer__item3 {
      margin: 0;
      text-align: center;
    }
    .v-footer .footer__item4 {
      margin: 7px 0 0 -48px;
    }
    .v-footer .img-logo {
      margin: 10px 0 0 15px;
    }
  }
</style>
