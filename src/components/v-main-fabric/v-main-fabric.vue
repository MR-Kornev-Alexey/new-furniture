<template>
    <div class="v-main-fabric" id="v-main-fabric">
      <div class="v-review-tittle d-flex justify-center text-center">
        Ткани
      </div>
      <div class="row d-flex justify-center row-fabric">
        <div class="d-block text-center justify-center item-fabric"

          :key="i"
          v-for="(item, i) in mainFabric"

        >
          <div v-if="item.active" class="ellipse-active">
            <img src="../../assets/img/svg/ellipse.svg" alt="Ellipse">
          </div>
          <div>
            <img :src="item.image" alt="Fabric">
          </div>
         <div>
           {{item.name}}
         </div>
          <v-icon v-if="item.active" class="v-icon-small">mdi-chevron-down</v-icon>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'v-main-fabric',
  data: () => ({
    mainFabric: [
      {
        name: 'Шенил',
        active: false,
        image: require('@/assets/img/ellipse-fabric/ellipse-1.png')
      },
      {
        name: 'Велюр',
        active: true,
        image: require('@/assets/img/ellipse-fabric/ellipse-2.png')
      },
      {
        name: 'Рогожка',
        active: false,
        image: require('@/assets/img/ellipse-fabric/ellipse-3.png')
      },
      {
        name: 'Замша',
        active: false,
        image: require('@/assets/img/ellipse-fabric/ellipse-4.png')
      },
      {
        name: 'Микрофибра',
        active: false,
        image: require('@/assets/img/ellipse-fabric/ellipse-5.png')
      },
      {
        name: 'Кожа',
        active: false,
        image: require('@/assets/img/ellipse-fabric/ellipse-6.png')
      }
    ]
  })
}
</script>

<style lang="scss">
  .v-main-fabric{
    margin: 80px auto 0 auto ;
    .row-fabric{
      margin: 41px 0 0 0;
      .item-fabric{
        position: relative;
        margin: 0 47px 0 47px;
        font-size: 14px;
        line-height: 159%;
        text-transform: uppercase;
        cursor: pointer;
        .ellipse-active{
          position: absolute;
          top: -5px;
          left: -5px;
        }
      }
    }

  }

</style>
