<template>
  <div class="v-transit">
    <div v-if="color" class="transit-black">
      <a :href="address">
        {{text}}
      </a>
      <img src="../../assets/img/svg/angle-black.svg" alt="angle">
    </div>
    <div v-if="!color" class="transit-white">
      <a :href="address">
        {{text}}
      </a>
      <img src="../../assets/img/svg/angle-right.svg" alt="angle">
    </div>
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
    text-transform: uppercase;
    .transit-black  a {
        position: relative;
        font-size: 14px;
        line-height: 149%;
        /* or 21px */
        color: #000000;
      letter-spacing: 0.5px;
      text-decoration: none;
       }
    .transit-white,.transit-black  {
      position: relative;
    }
    .transit-white a {
      position: relative;
      font-size: 14px;
      line-height: 149%;
      /* or 21px */
      color: #ffffff;
      letter-spacing: 0.5px;
      text-decoration: none;
    }
    .transit-white a::after {
      content: "";
      width: 100%;
      height: 11px;
      bottom: -4px;
      right: 0;
      border-bottom: 2px solid #FFFFFF;
      position: absolute;

    }
    .transit-black a::after {
      content: "";
      width: 100%;
      height: 11px;
      bottom: -4px;
      right: 0;
      border-bottom: 2px solid #000000;
      position: absolute;

    }
    img{
      margin-left: 9px;
    }
  }
</style>
