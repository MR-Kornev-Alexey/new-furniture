<template>
    <section class="v-basket-empty">
      <v-row class="d-flex justify-center">
        <v-col class="d-flex justify-center">
          <div class="basket-empty text-center ">
                      Корзина пуста
           </div>
        </v-col>
      </v-row>
    </section>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'v-basket-empty',
  data: () => ({
    choiceSwitch: [
      {
        id: 1,
        name: 'Добавить услугу сборки',
        selected: false
      },
      {
        id: 2,
        name: 'Добавить услугу сборки',
        selected: false
      }
    ]
  }),
  computed: {
    ...mapGetters([
      'GET_ITEMS_TO_BASKET'
    ])
  }
}
</script>

<style lang="scss">
  .basket-empty{
    width: 832px ;
    height: 200px;
    line-height: 200px;
    margin: 20px 0;
    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.1);
    background-color: rgba(238, 238, 238, 0.2);
    box-sizing: border-box;
    padding: 20px;
    font-size: 30px;
    letter-spacing: 0.055em;
    color: #8E8E8E;
    text-transform: uppercase;
      }
</style>
