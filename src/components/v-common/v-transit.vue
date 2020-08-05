<template>
  <div class="v-transit">
    <a :href="address">
      {{text}}
    </a>
    <img src="../../assets/img/svg/angle-black.svg" alt="angle">
  </div>
</template>

<script>
export default {
  name: 'v-transit',
  props: ['text', 'address', 'color']
}
</script>

<style lang="scss" scoped>
  .v-transit {
    a {
      position: relative;
      font-size: 14px;
      line-height: 149%;
      /* or 21px */
      text-transform: uppercase;
      color: #000000;
    }
img{
  margin-left: 2px;
}
  }
</style>
