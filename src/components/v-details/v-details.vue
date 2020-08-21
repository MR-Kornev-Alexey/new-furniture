<template>
    <div class="v-details" id="v-details">
      <div class="v-review-tittle d-flex justify-center text-center">
        ДЕТАЛИ И РАЗМЕРЫ
      </div>
      <div class="row d-flex justify-center line-of-size">
        <div
          class="col-md-3"
          :key="i"
          v-for="(item, i) in smallDetails">
        <div class="line-of-size-tittle">{{item.name}}</div>
        <div class="line-of-size-size">{{item.size}}</div>
        </div>
      </div>
      <div class="row d-flex justify-center">
        <div class="col-12 d-flex justify-center">
          <img src="../../assets/img/main-product/pattern-sofa.png" alt="pattern-sofa">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'v-details',
  data: () => ({
    smallDetails: [
      {
        name: 'Высота ножек, см',
        size: '16'
      },
      {
        name: 'Высота спального места, см',
        size: '45'
      },
      {
        name: 'Глубина посадки, см',
        size: '60'
      },
      {
        name: 'Габаритные размеры, см',
        size: '253x162x98'
      }
    ]
  })
}
</script>

<style lang="scss">
  .v-details{
    margin: 143px auto 0 auto;
  }

  .line-of-size{
    margin: 31px auto  0   auto;
    max-width: 1140px;
    .line-of-size-tittle{
      font-size: 16px;
      line-height: 136.5%;
      /* or 22px */
      color: #595959;
    }
    .line-of-size-size{
      margin: 0 0 0 0;
      font-size: 20px;
      line-height: 20px;
      color: #000000;
    }
  }
</style>
