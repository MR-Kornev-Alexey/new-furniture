<template>
    <v-row class="v-video justify-center">
      <v-col class="v-video___tittle" md="3">
        <h2>
          Видео на <span>YouTube</span>
        </h2>
        <div>
          В первом приближении уровень грунтовых вод неравномерен. Облесение восстанавливает натрии.
        </div>

        <v-transit  :text = 'textOut1'
                    :address = 'addressOut'
                    :color= 'colorBlack'
        />
      </v-col>
      <v-col class="v-video__item" md="3">
        <img src="../../assets/img/video-screen.png" alt="video">
        <img  class="v-video__item__button" src="../../assets/img/svg/video.svg" alt="video button">
        <div>
          Детская кровать для маленькой принцессы
        </div>
        <v-transit  :text = 'textOut2'
                    :address = 'addressOut'
                    :color= 'colorBlack'
        />
      </v-col>
      <v-col class="v-video__item" md="3">
        <img src="../../assets/img/video-screen.png" alt="video">
        <img  class="v-video__item__button" src="../../assets/img/svg/video.svg" alt="video button">
        <div>
          Детская кровать для маленькой принцессы
        </div>
        <v-transit  :text = 'textOut2'
                    :address = 'addressOut'
                    :color= 'colorBlack'
        />
      </v-col>
      <v-col class="v-video__item" md="3">
        <img src="../../assets/img/video-screen.png" alt="video">
        <img  class="v-video__item__button" src="../../assets/img/svg/video.svg" alt="video button">
        <div>
          Детская кровать для маленькой принцессы
        </div>
        <v-transit  :text = 'textOut2'
                    :address = 'addressOut'
                    :color= 'colorBlack'
                    class="v-video__transit"
        />
      </v-col>

    </v-row>
</template>

<script>
import vTransit from '../v-common/v-transit'

export default {
  name: 'v-video',
  components: {
    vTransit
  },
  data () {
    return {
      textOut1: 'Смотреть все видео',
      textOut2: 'Смотреть',
      colorBlack: true,
      addressOut: '#'
    }
  }
}
</script>

<style scoped lang="scss">
  .v-video{
    .v-video__transit{
      margin-left: 15px;
    }
    margin: 120px auto 0 auto;
    width: 1172px;
    .v-video___tittle{
      padding: 0 0 0 17px;
       h2{
        font-size: 30px;
        line-height: 105%;
         margin-bottom: 29px;
        span{
          color: #D7B256;
        }
      }
      div {
        width: 289px;
        height: 87px;
        margin-bottom: 2px;
        font-size: 15px;
        line-height: 149%;
      }
    }
    .v-video__item{
      padding: 0 0 0 14px;
      position: relative;
      z-index: 100;
      div{
        width: 235px;
        height: 40px;
        line-height: 138.5%;
        margin: 0 0 17px 0;
      }
      .v-video__item__button{
        z-index: 101;
        position: absolute;
        top: 46px;
        left: 85px;
      }

    }
  }
</style>
