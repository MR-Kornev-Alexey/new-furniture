<template>
  <div class="v-pop-collection">
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
                Выберите ткань на заказ для вашего дивана
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
              <div :key="renderAddInn" class="page-add text-center ">
                <div
                  :key="'pop_' + i"
                  style=" display: inline-flex" v-for="(item, i) in fabricForOrder">
                  <div class="d-block card-choice ">
                    <div class="fabric-active">
                      <img alt="active" src="../../assets/img/svg/active.svg" v-if="item.active">
                    </div>
                    <div class="fabric-icons d-block">
                      <div style="height: 26px" v-if="item.paw"><img alt="animal" src="../../assets/img/svg/pow.svg"></div>
                      <div style="height: 26px" v-if="item.clean"><img alt="clear" src="../../assets/img/svg/clean.svg">
                      </div>

                    </div>
                    <div>
                      <img :src="item.image" alt="fabric">
                    </div>
                    <div class="card-item text-center">
                      {{item.name}}
                    </div>
                  </div>
                </div>
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
/* eslint-disable */
  export default {
    name: "v-pop-filter",
    components:{},
    props: {
      fabricForOrder:{
        default: 'fabricForOrder'
      },
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

  .page-add {
    padding: 15px;
    font-size: 14px;


    .card-choice{
      position: relative;
      margin: 0 29px 5px 0;
      cursor: pointer;
      .fabric-active {
        position: absolute;
        top: -4px;
        right: -3px;
      }
      .fabric-icons {
        position: absolute;
        top: -6px;
        right: -14px;
      }

    }
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
    background: rgba(218,218,218,1);
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

