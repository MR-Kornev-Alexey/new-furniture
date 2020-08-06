<template>
  <div class="v-material wrapper">
    <div class="header">
      <h2>
        Теоретический коллапс
      </h2>
      <h4>
        Кризис легитимности, как правило, предсказуем.
        Как уже отмечалось, капиталистическое мировое общество
        отталкивает пейзажный парк.
      </h4>
        <v-transit  :text = 'textOut1'
                     :address = 'addressOut'
                     :color= 'colorBlack'
                    class="transit-header"
         />
     </div>
    <div class="sidebar">
      <img src="../../assets/img/material/material-1.png" alt="material">
      <h3>Мебельная фабрика Wood Fans</h3>
      <span>Это место, где Вам всегда помогут подобрать ткань для дивана или кровати, определиться с размерами
        и оживить интерьер декором из текстиля.</span>
      <v-transit  :text = 'textOut2'
                  :address = 'addressOut'
                  :color= 'colorBlack'
                  class="transit-footer"
      />
    </div>
    <div class="left"> <img src="../../assets/img/material/material-2.png" alt="material">
      <h3>Мебельная фабрика Wood Fans</h3>
      <span>Это место, где Вам всегда помогут подобрать ткань для дивана или кровати </span>
      <v-transit  :text = 'textOut2'
                  :address = 'addressOut'
                  :color= 'colorBlack'
                  class="transit-footer"
      />
    </div>
    <div class="right"> <img src="../../assets/img/material/material-3.png" alt="material">
      <h3>Мебельная фабрика Wood Fans</h3>
      <span>Это место, где Вам всегда помогут подобрать ткань для дивана или кровати </span>
      <v-transit  :text = 'textOut2'
                  :address = 'addressOut'
                  :color= 'colorBlack'
                  class="transit-footer"
      />
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
  .v-material{

    h2 {
      font-weight: normal;
      font-size: 30px;
      line-height: 103%;
    }
    h3{
      margin: 13px 0 11px 0 ;
      font-size: 18px;
      line-height: 127.5%;
      /* or 23px */
    }
    .transit-header{
      margin-top: 17px;
    }
    .transit-footer{
      margin-top: 20px;
    }
  }

  .header {
    grid-area: hd;
    padding: 17px 0 0 36px;
    h4{
      margin-top: 25px;
      width: 380px;
      height: 64px;
      font-size: 15px;
      line-height: 149%;
    }
  }

  .right {
    grid-area: rt;
    padding: 27px 0 0 6px;
  }

  .left {
    grid-area: lt;
    padding: 27px 0 0 15px;
  }

  .sidebar {
    grid-area: sd;
    padding-left: 23px;
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
    max-height: 718px;
    margin: 57px  auto 0 auto;
  }
</style>
