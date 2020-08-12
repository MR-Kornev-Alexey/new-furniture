<template>
    <v-row class="v-video v-v-wrapper">
      <div class="v-video___tittle">
        <div class="v-video___tittle_div">
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
        </div>

      </div>
      <div class="v-video__item__1" >
        <div class="v-video__item__inn">
          <img class="container--fluid" src="../../assets/img/video-screen.png" alt="video">
          <img  class="v-video__item__button" src="../../assets/img/svg/video.svg" alt="video button">
          <div class="v-video__item__description" >
            Детская кровать для маленькой принцессы
          </div>
          <v-transit  :text = 'textOut2'
                      :address = 'addressOut'
                      :color= 'colorBlack'
          />
        </div>
      </div>
      <div class="v-video__item__2" >
        <div class="v-video__item__inn">
          <img class="container--fluid" src="../../assets/img/video-screen.png" alt="video">
          <img  class="v-video__item__button" src="../../assets/img/svg/video.svg" alt="video button">
          <div class="v-video__item__description" >
            Детская кровать для маленькой принцессы
          </div>
          <v-transit  :text = 'textOut2'
                      :address = 'addressOut'
                      :color= 'colorBlack'
          />
        </div>
      </div>
      <div class="v-video__item__3" >
        <div class="v-video__item__inn">
          <img class="container--fluid" src="../../assets/img/video-screen.png" alt="video">
          <img  class="v-video__item__button" src="../../assets/img/svg/video.svg" alt="video button">
          <div class="v-video__item__description" >
            Детская кровать для маленькой принцессы
          </div>
          <v-transit  :text = 'textOut2'
                      :address = 'addressOut'
                      :color= 'colorBlack'
          />
        </div>
      </div>
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
  .v-v-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-template-areas:
     "tl b1 b2 b3 "
    ;
  }
  .v-video___tittle{
    grid-area: tl;
  }
  .v-video__item__1{
    grid-area: b1;
    position: relative;
  }
  .v-video__item__2{
    grid-area: b2;
    position: relative;
  }
  .v-video__item__3{
    grid-area: b3;
    position: relative;
  }
 .v-video__item__button{
    z-index: 101;
    position: absolute;
    top: 46px;
    left: 85px;
  }
  .v-video{
    .v-video__transit{
      margin-left: 15px;
    }
    margin: 120px auto 0 auto;
    max-width: 1172px;
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
        min-height: 87px;
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

    }
   }
  @media only screen and (max-width: 1024px){
    .v-video__item__button{
      top: 42px;
      left: 74px;
    }
  }
  @media only screen and (max-width: 960px){
    .v-video___tittle,.v-video__item__1, .v-video__item__2,.v-video__item__3{
       justify-self: center;
      margin-bottom: 20px;
    }
  .v-video__item__description{
    width: 247px;
    margin-bottom: 10px;
  }
    .v-video__item__inn{
      justify-self: center;
    }
    .v-video .v-video___tittle {
      padding: 0 0 0 0;
    }
    .v-video{
      margin: 41px auto 0 auto;
     }
    .v-v-wrapper {
     grid-template-columns: repeat(2, 1fr);
     grid-template-areas:
     "tl b1"
     "b2 b3 " ;
    }
    .v-video__item__button{
        top: 45px;
        left: 94px;
      }
  }

  @media only screen and (max-width: 660px){
    .v-video___tittle{
        padding: 20px 0 0 28px!important;
    }
    .v-video .v-video___tittle h2 {
      font-size: 28px;
     }
  }
  @media only screen and (max-width: 600px){
    .v-video {
      margin: 16px auto 0 auto;
    }
  }
  @media only screen and (max-width: 540px){
    .v-v-wrapper {
      grid-template-columns: repeat(1, 1fr);
      grid-template-areas:
     "tl"
     "b1"
     "b2"
     "b3";
    }
  }

</style>
