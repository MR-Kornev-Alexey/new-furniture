<template>
  <div class="v-social">
    <div>
      <h3>Социальные сети</h3>
      <h2>
        Следите за нами в instagram
      </h2>
    </div>
    <agile :options="myOptions">
      <div class="slide ">
        <img alt="furniture" src="../../assets/img/social/social-1.png">
      </div>
      <div class="slide ">
        <img alt="furniture" src="../../assets/img/social/social-2.png">
      </div>
      <div class="slide ">
        <img alt="furniture" src="../../assets/img/social/social-3.png">
      </div>
      <div class="slide ">
        <img alt="furniture" src="../../assets/img/social/social-4.png">
      </div>
      <div class="slide ">
        <img alt="furniture" src="../../assets/img/social/social-5.png">
      </div>
      <div class="slide ">
        <img alt="furniture" src="../../assets/img/social/social-6.png">
      </div>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
  name: 'v-social',
  components: {
    agile: VueAgile
  },
  data () {
    return {
      myOptions: {
        navButtons: false,
        slidesToShow: 6,
        infinite: true,
        autoplay: true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: false
            }
          },

          {
            breakpoint: 900,
            settings: {
              navButtons: false,
              dots: true,
              infinite: true
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-social{
    margin: 86px 0 0 0 ;
    h2{
      font-size: 30px;
      line-height: 113.5%;
      text-align: center;
      margin: 0 0 44px 0 ;
    }
    h3{
      margin: 0 0 6px 0 ;
      line-height: 149%;
      /* or 21px */
      text-align: center;
      text-transform: uppercase;
      color: #D7B256;
    }
   .agile .my-prev,.agile.my-next {
      display: none !important;
    }
  }

</style>
