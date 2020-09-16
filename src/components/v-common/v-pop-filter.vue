<template>
  <div class="v-pop-filter">
    <div
      :aria-hidden="modalToggle"
      :class="{'vuexplosive-modal-hidden': !active, 'vuexplosive-modal-visible': active}"
      @keydown.esc="active = false"
      class="vuexplosive-modal"
      role="dialog"
      tabindex="-1"
    >
      <transition name="scale">
        <div class="vuexplosive-modal-container" v-if="active">
          <div class="vuexplosive-modal-inner ">
            <div class="vuexplosive-modal-header justify-space-between">
              <h3>
                Выберите цветовую палитру тканей.
              </h3>

              <div>
                <button
                  @click="modalToggle"
                  class="vuexplosive-modal-close"
                  v-html="closeIcon"
                ></button>
              </div>
            </div>

            <div class="vuexplosive-modal-content">
              <div :key="renderAddInn" class="page-add text-center">
                <v-palette-filter/>
              </div>

            </div>

          </div>
        </div>
      </transition>

      <div @click="modalToggle"  class="vuexplosive-modal-bg">

      </div>
    </div>
  </div>

</template>

<script>
import vPaletteFilter from './v-palette-filter'
/* eslint-disable */
  export default {
    name: "v-pop-filter",
    components:{
      vPaletteFilter
    },
    props: {
      visible: {
        default: false
      },
      closeIcon: {
        default: `<span>&#x274C;</span>`
      }
    },
    data: function () {
      return {
        active: false,
        renderAddInn: 0,
        explosionGifUrl: "",
        explosionGifUrlBlob: "",
      };
    },
  methods: {
    closeModal(){
      this.$emit('sendCloseModal')
    },
      modalToggle() {
        this.active = !this.active;
        },
    },
    watch: {
      visible() {
        this.active = !this.active;
         }
    }
  };
</script>


<style lang="scss" scoped>
  .v-text-field.v-text-field--solo .v-input__control {
    min-height: 48px;
    padding: 0;
    height: 30px !important;
  }

  .v-label {
    font-size: 14px;
  }

  .page-add {
    padding: 15px;
    font-size: 14px;

    input {
      height: 24px;
      width: 24px;
    }

  }

  .v-input {
    font-size: 15px;
    max-width: 200px;
    height: 30px;
  }

  .v-select__slot {
    width: 200px !important;
  }

  .select-items {
    min-height: 52px;
  }

  .v-input__slot {
    margin-bottom: 0;
  }

  .v-text-field__details {
    display: none;
  }

  .v-text-field--filled > .v-input__control > .v-input__slot, .v-text-field--full-width > .v-input__control > .v-input__slot, .v-text-field--outlined > .v-input__control > .v-input__slot {
    align-items: stretch;
    min-height: 30px;
  }

  .v-text-field--filled .v-label, .v-text-field--full-width .v-label {
    top: 11px;
  }

  .v-text-field--full-width .v-input__prepend-outer, .v-text-field--full-width .v-input__prepend-inner, .v-text-field--full-width .v-input__append-inner, .v-text-field--full-width .v-input__append-outer, .v-text-field--enclosed .v-input__prepend-outer, .v-text-field--enclosed .v-input__prepend-inner, .v-text-field--enclosed .v-input__append-inner, .v-text-field--enclosed .v-input__append-outer {
    margin-top: 8px;
  }

  .my-select-choice {
    box-sizing: border-box;
    padding: 0 !important;
  }

  label {
    margin-left: 19px;
  }

  .vuexplosive-modal {
    font-family: -apple-system, BlinkMacSystemFont, "avenir next", avenir,
    "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial,
    sans-serif;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.8);
    text-align: left;
  }

  .vuexplosive-modal-container {
    background: rgba(218,218,218,0.4);
    max-width: 95%;
    width: 400px;
    height: auto;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999999;
    padding: 15px;
    border-radius: 5px;

  }

  .vuexplosive-modal-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .vuexplosive-modal-title {
    font-size: 30px;
    font-weight: bolder;
  }

  .vuexplosive-modal-close {
    align-self: flex-start;
    font-size: 18px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  .vuexplosive-modal-content {
    font-size: 18px;
    color: #333;
  }

  .vuexplosive-modal-bg {
    position: fixed;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    z-index: 999;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8));
  }

  .vuexplosive-modal-explosion-gif {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    min-width: 50%;
    min-height: 50%;
    opacity: 0;
    width: 100vw;
    max-width: 100vh;
    height: auto;


  }

  .vuexplosive-modal-footer {
    margin-top: 20px;
  }

  .vuexplosive-modal-hidden {
    display: none;
  }

  .vuexplosive-modal-visible {
    display: block;
  }

  .scale-enter-active {
    animation: fade-in 1s;
  }

  .scale-leave-active {
    animation: fade-in 0.4s reverse;
  }

  @keyframes fade-in {
    0% {
      transform: translate(-50%, -50%) scale(0);
    }
    50% {
      transform: translate(-50%, -50%) scale(1.2);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }
</style>
