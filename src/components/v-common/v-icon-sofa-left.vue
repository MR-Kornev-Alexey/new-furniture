<template>
  <div @click="changeColor"  class="v-icon-sofa-left transform-1-5">
    <svg  :key="render" viewBox="0 0 387 283" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect  :class="{'icon-stroke': !flagSelectLeft, 'icon-stroke-select': flagSelectLeft}"
            x="2.5" y="2.5" width="123" height="278" fill="white" stroke-width="5"/>
      <rect  :class="{'icon-stroke': !flagSelectLeft, 'icon-stroke-select': flagSelectLeft}"
         x="384.5" y="2.5" width="122" height="258" transform="rotate(90 384.5 2.5)" fill="white"   stroke-width="5"/>
      <rect   :class="{'icon-stroke': !flagSelectLeft, 'icon-stroke-select': flagSelectLeft}"
            x="370.5" y="26.5" width="98" height="244" transform="rotate(90 370.5 26.5)" fill="white"   stroke-width="5"/>
      <rect   :class="{'icon-stroke': !flagSelectLeft, 'icon-stroke-select': flagSelectLeft}"
            x="369.5" y="26.5" width="31" height="244" transform="rotate(90 369.5 26.5)" fill="white"   stroke-width="5"/>
      <rect  :class="{'icon-stroke': !flagSelectLeft, 'icon-stroke-select': flagSelectLeft}"
            x="125.5" y="26.5" width="31" height="107" transform="rotate(90 125.5 26.5)" fill="white"   stroke-width="5"/>
      <rect  :class="{'icon-stroke': !flagSelectLeft, 'icon-stroke-select': flagSelectLeft}"
            x="42.5" y="137.5" width="24" height="79" transform="rotate(-180 42.5 137.5)" fill="white" stroke-width="5"/>
      <rect  :class="{'icon-stroke': !flagSelectLeft, 'icon-stroke-select': flagSelectLeft}"
            x="42.5" y="217.5" width="24" height="79" transform="rotate(-180 42.5 217.5)" fill="white" stroke-width="5"/>
      <path   :class="{'icon-stroke': !flagSelectLeft, 'icon-stroke-select': flagSelectLeft}"
            d="M43 218H2" stroke-width="5"/>
      <path   :class="{'icon-stroke': !flagSelectLeft, 'icon-stroke-select': flagSelectLeft}"
            d="M248 127L248 25" stroke-width="5"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'v-icon-sofa-left',
  props: ['flagSelectLeft'],
  data: () => ({
    render: 0
  }),
  methods: {
    changeColor () {
      this.$emit('sendSelectLeft')
    }
  }
}

</script>

<style lang="scss">
  .v-icon-sofa-left, .v-icon-sofa-right{
    width: 76px;
    cursor: pointer;
  }

</style>
