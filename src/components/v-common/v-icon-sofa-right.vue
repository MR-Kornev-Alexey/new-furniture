<template>
    <div @click="changeColor"  class="v-icon-sofa-right transform-1-5">
      <svg viewBox="0 0 387 283" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect :class="{'icon-stroke': !flagSelectRight, 'icon-stroke-select': flagSelectRight}"
              x="-2.5" y="2.5" width="123" height="278" transform="matrix(-1 0 0 1 382 0)" fill="white" stroke-width="5"/>
        <rect :class="{'icon-stroke': !flagSelectRight, 'icon-stroke-select': flagSelectRight}"
              x="2.5" y="2.5" width="122" height="258" transform="matrix(4.37114e-08 1 1 -4.37114e-08 1.09278e-07 -1.09278e-07)" fill="white"  stroke-width="5"/>
        <rect :class="{'icon-stroke': !flagSelectRight, 'icon-stroke-select': flagSelectRight}"
              x="2.5" y="2.5" width="98" height="244" transform="matrix(4.37114e-08 1 1 -4.37114e-08 14 24)" fill="white"  stroke-width="5"/>
        <rect :class="{'icon-stroke': !flagSelectRight, 'icon-stroke-select': flagSelectRight}"
              x="2.5" y="2.5" width="31" height="244" transform="matrix(4.37114e-08 1 1 -4.37114e-08 15 24)" fill="white"  stroke-width="5"/>
        <rect :class="{'icon-stroke': !flagSelectRight, 'icon-stroke-select': flagSelectRight}"
              x="2.5" y="2.5" width="31" height="107" transform="matrix(4.37114e-08 1 1 -4.37114e-08 259 24)" fill="white"  stroke-width="5"/>
        <rect :class="{'icon-stroke': !flagSelectRight, 'icon-stroke-select': flagSelectRight}"
              x="2.5" y="-2.5" width="24" height="79" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 342 135)" fill="white" stroke-width="5"/>
        <rect :class="{'icon-stroke': !flagSelectRight, 'icon-stroke-select': flagSelectRight}"
              x="2.5" y="-2.5" width="24" height="79" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 342 215)" fill="white" stroke-width="5"/>
        <path :class="{'icon-stroke': !flagSelectRight, 'icon-stroke-select': flagSelectRight}"
              d="M344 218H385"  stroke-width="5"/>
        <path :class="{'icon-stroke': !flagSelectRight, 'icon-stroke-select': flagSelectRight}"
              d="M139 127L139 25"  stroke-width="5"/>
      </svg>
    </div>
</template>

<script>
export default {
  name: 'v-icon-sofa-right',
  props: ['flagSelectRight'],
  data: () => ({
    render: 0
  }),
  methods: {
    changeColor () {
      this.$emit('sendSelectRight')
    }
  }
}
</script>

<style lang="scss">
  .icon-stroke {
    stroke: #B3B3B3;
  }
  .icon-stroke-select {
    stroke: #D7B256;
    transition: 0.5s;
  }

</style>
