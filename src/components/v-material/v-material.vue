<template>
  <div class="v-material wrapper">
    <div class="header">
      <h2>
        Теоретический коллапс
      </h2>
      <h4 class="header-h4">
        Кризис легитимности, как правило, предсказуем.
        Как уже отмечалось, капиталистическое мировое общество
        отталкивает пейзажный парк.
      </h4>
      <v-transit :address='addressOut'
                 :color='colorBlack'
                 :text='textOut1'
                 class="transit-header v-360-width "
      />
    </div>
    <div class="sidebar">
      <div class="d-flex justify-center" style="flex-direction: column">
        <img alt="material" class="container--fluid" src="../../assets/img/material/material-1.png">
        <h3 class="h3-sidebar">Мебельная фабрика Wood Fans</h3>
        <div class="sidebar-description">Это место, где Вам всегда помогут подобрать ткань для дивана или кровати,
          определиться с размерами и оживить интерьер декором из текстиля.
        </div>
        <v-transit :address='addressOut'
                   :color='colorBlack'
                   :text='textOut2'
                   class="transit-footer v-360-width-padding"
        />
      </div>
    </div>
    <div class="left"><img alt="material" class="container--fluid" src="../../assets/img/material/material-2.png">
      <div>
        <h3>Мебельная фабрика Wood Fans</h3>
        <div class="block-description">Это место, где Вам всегда помогут подобрать ткань для дивана или кровати</div>
        <v-transit :address='addressOut'
                   :color='colorBlack'
                   :text='textOut2'
                   class="transit-footer v-360-width"
        />
      </div>
      </div>
    <div class="right"><img alt="material" class="container--fluid" src="../../assets/img/material/material-3.png">
      <div>
        <h3>Мебельная фабрика Wood Fans</h3>
        <div class="block-description">Это место, где Вам всегда помогут подобрать ткань для дивана или кровати</div>
        <v-transit :address='addressOut'
                   :color='colorBlack'
                   :text='textOut2'
                   class="transit-footer"
        />
      </div>
      </div>
  </div>
</template>

<script>
import vTransit from '../../components/v-common/v-transit'

export default {
  name: 'v-material',
  components: {
    vTransit
  },
  data () {
    return {
      textOut1: 'Подробнее о ткани',
      textOut2: 'Подробнее',
      colorBlack: true,
      addressOut: '#'
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-material {
    margin: auto;
    .block-description{
      max-width: 310px;
    }
    h2 {
      font-weight: normal;
      font-size: 30px;
      line-height: 103%;
    }

    h3 {
      margin: 13px 0 11px 0;
      font-size: 18px;
      line-height: 127.5%;
      /* or 23px */
    }

    .transit-header {
      margin-top: 17px;
    }

    .transit-footer {
      margin-top: 20px;
    }
  }

  .header {
    grid-area: hd;
    padding: 17px 0 0 36px;

    h4 {
      margin-top: 25px;
      max-width: 380px;
      min-height: 64px;
      font-size: 15px;
      line-height: 149%;
    }
  }

  .right {
    grid-area: rt;
    padding: 27px 0 0 15px;
  }

  .left {
    grid-area: lt;
    padding: 27px 0 0 15px;
  }

  .sidebar {
    grid-area: sd;
    padding-left: 23px;

    .sidebar-description {
      max-width: 279px;
    }
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(21, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-template-areas:
      "sd sd sd sd sd sd sd sd sd  hd hd hd hd hd hd  hd hd hd hd hd hd "
      "sd sd sd sd sd sd sd sd sd  lt lt lt lt lt lt  rt rt rt rt rt rt"
      "sd sd sd sd sd sd sd sd sd  lt lt lt lt lt lt  rt rt rt rt rt rt";
  }

  .wrapper {
    max-width: 1172px;
    min-height: 718px;
    margin: 57px auto 0 auto;
  }

  @media only screen and (max-width: 1024px) {
    .right, .left {
      padding: 27px 0 0 6px;
    }
  }

  @media only screen and (max-width: 768px) {
    .right, .left {
      padding: 0;
    }
    .wrapper {
      margin: 0 auto 0 auto;
    }
  }

    @media only screen and (max-width: 660px) {
      .right, .left {
        padding: 27px 0 0 0 ;
      }
    }

    @media only screen and (max-width: 768px) {
      .right, .left {
        padding: 27px 0 0 37px;
      }
      .wrapper {
        justify-content: center;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: minmax(100px, auto);
        grid-template-areas:
       "hd hd hd hd"
       "lt lt rt rt"
       "sd  sd sd sd";
      }
      .header {
        padding: 19px 0 2px 36px;
      }
      .sidebar {
        margin: 20px 0 20px 0;
        padding-left: 0;
        justify-self: center;
        justify-content: center;
      }
    }
  @media only screen and (max-width: 540px) {
    .sidebar .sidebar-description {
      max-width: 453px;
    }
    .wrapper {
      margin: 11px auto 0 auto;
      justify-content: center;
      grid-template-columns: repeat(2, 1fr) !important;
      grid-template-areas:
       "hd hd "
       "lt lt "
       "rt rt "
       "sd sd " !important;
    }

    .left, .right, .sidebar {
      padding: 0 0 0 0;
      justify-self: center;
    }
    .v-360-width{
      margin-bottom: 32px;
    }

  }

  @media only screen and (max-width: 414px) {
    .v-360-width-padding{
      padding:  0 0 0 18px;
    }
    .v-360-width{
      margin-bottom: 32px;
    }
    .right, .left {
      padding: 0 0 0 0;
    }
    .header {
      padding: 19px 0 2px 16px;
    }
    .h3-sidebar {
      margin: 19px 0 0 19px !important;
    }
    .v-material h3 {
      margin: 0;

    }
    .header-h4 {

      max-width: 280px;
      margin: 0 0 32px 0;
    }
    .sidebar .sidebar-description {
      max-width: 300px;
      margin: 0 0 0 19px;
    }

  }

  @media only screen and (max-width: 360px) {
    .v-360-width-padding{
      padding:  0 0 0 18px;
    }
    .v-360-width{
      margin-bottom: 32px;
    }

  }

  @media only screen and (max-width: 320px) {
    .right, .left {
      padding: 0 ;
    }}

</style>
