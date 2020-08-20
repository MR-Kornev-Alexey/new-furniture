<template>
    <v-row class="v-main-product-card d-block">
      <div class="d-flex">
        <div class="v-main-product-card__one">
          <img src="../../assets/img/main-product/main-product-sofa-.png" class="" alt="sofa">
        </div>
        <div class="v-main-product-card__two">
         <div>Диван</div>
          <div>от 55 000  &#8381;</div>
          <div>Florence bergamo light</div>
          <div>Вопрос + ответ: см. 20 ответов</div>
          <div>купить в рассрочку</div>
        </div>
      </div>
     <div class="d-flex">
       <v-col>
2
       </v-col>
       <v-col>
3
       </v-col>
     </div>
    </v-row>
</template>

<script>
export default {
  name: 'v-main-product-card'
}
</script>

<style lang="scss">
  .v-main-product-card{
    margin: 0 auto 0 auto;
    max-width: 968px;
    .v-main-product-card__one{
      max-width: 656px;
      height: 625px;
      img{

      }
     }
    .v-main-product-card__two{
      max-width: 460px;
    }
  }
</style>
