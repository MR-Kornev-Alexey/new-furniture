<template>
  <v-row class="v-furniture-gallery">
    <v-col md="3">
      <img src="../../assets/img/furniture/gallery-1.png" alt="gallery pic">
      <h3>
        Andrria miss
      </h3>
      <h4>
        детская кровать для маленькой принцессы
      </h4>
      <v-transit :address='addressOut'
                 :color='colorBlack'
                 :text='textOut'
      />
    </v-col>
    <v-col md="3">
      <img src="../../assets/img/furniture/gallery-2.png" alt="gallery pic">
      <h3>
        Andrria miss
      </h3>
      <h4>
        детская кровать для маленькой принцессы
      </h4>
      <v-transit :address='addressOut'
                 :color='colorBlack'
                 :text='textOut'
      />
    </v-col>
    <v-col md="3">
      <img src="../../assets/img/furniture/gallery-3.png" alt="gallery pic">
      <h3>
        Andrria miss
      </h3>
      <h4>
        детская кровать для маленькой принцессы
      </h4>
      <v-transit :address='addressOut'
                 :color='colorBlack'
                 :text='textOut'
      />
    </v-col>
    <v-col md="3">
      <img src="../../assets/img/furniture/gallery-4.png" alt="gallery pic">
      <h3>
        Andrria miss
      </h3>
      <h4>
        детская кровать для маленькой принцессы
      </h4>
      <v-transit :address='addressOut'
                 :color='colorBlack'
                 :text='textOut'
      />
    </v-col>
  </v-row>

</template>

<script>
import vTransit from '../v-common/v-transit'

export default {
  name: 'v-furniture-gallery',
  components: {
    vTransit
  },
  data () {
    return {
      textOut: 'Подробнее',
      colorBlack: true,
      addressOut: '#'
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-furniture-gallery{
    margin: 100px auto 0 auto;
    width: 1144px;
    img{
      margin: 0 0 10px 0 ;
    }
    h3{
      margin: 0 0 11px 0 ;
      font-size: 17px;
      line-height: 17px;
    }
    h4{
      margin: 0 0 28px 0 ;
      line-height: 138.5%;
    }

  }

</style>
