<template>
  <div class="v-choice-bayer">
    <h2>Выбор покупателей</h2><br>
    <carousel :per-page="4" :mouse-drag="true">
      <slide>
        Slide 1 Content
      </slide>
      <slide>
        Slide 2 Content
      </slide>
      <slide>
        Slide 3 Content
      </slide>
      <slide>
        Slide 4 Content
      </slide>
      <slide>
        Slide 5 Content
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'v-choice-bayer',
  components: {
    Carousel,
    Slide
  }
}
</script>

<style lang="scss" scoped>
  .v-choice-bayer {
    margin: 122px auto 0 auto;
    width: 1288px;
    height: 510px;
    background-color: aliceblue;

    h2 {
      font-size: 30px;
      line-height: 30px;
    }
  }

</style>
