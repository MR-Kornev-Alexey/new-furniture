import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: null,
    json: null,
    basicSizesArmrest: [ // Подлокотник
      { width: 950 },
      { height: 630 },
      { thickness: 110 }
    ],
    basicSizesBack: [ // Спинка
      { height: 630 },
      { thickness: 200 },
      { back_cushion_thickness: 150 }, // Толщина подушек спина
      { back_cushion_height: 500 }// Высота подушек спина
    ],
    cushion_thickness: 160,
    zSideBar: 180, // Z (царга)
    technologicalGap: 40, // Технологический зазор
    numberOfArmrests: 2, // Количество подлокотников
    fabricStock: 20, // Ткань запас
    seatHeight: 160, // Высота сидушек
    numberOfPillows: 2, // Количество подушек

    metal_in_armrest: null, // Метеллокаркас в подлокотнике
    metal_in_base: null, // Металлокаркас в основании
    metal_in_back: null, // Металлокаркас в спинке

    bar_in_armrest: null, // Брусок в полокотнике
    bar_in_base: null, // Брусок в основании
    bar_in_back: null, // Брусок в спинке

    left_armrest: null, // Левый подлокотник
    right_armrest: null, // Правый подлокотник

    tape_armrest: null, // Лента в подлокотнике
    tape_base: null, // Лента в основании
    tape_back: null, // Лента в спинке

    solid_wood_drawer: null// Царга из массива
  },
  mutations: {
    SET_DATA_TO_STATE: (state, data) => {
      state.data = data
    },
    SEND_JSON_TO_STATE: (state, data) => {
      state.json = data
    }
  },
  actions: {
    GET_DATA_FROM_API ({ commit }) {
      const url = 'http://sdelay.online/api/products'
      return axios.get(url)
        .then((resp) => {
          const res = resp.data
          commit('SET_DATA_TO_STATE', res)
        }
        ).catch((error) => {
          alert(error)
          return error
        })
    },
    GET_JSON_FROM_API ({ commit }) {
      const url = 'assets/file/materials.json'
      return axios.get(url)
        .then((resp) => {
          const res = resp.data
          commit('SEND_JSON_TO_STATE', res)
        })
        .catch((error) => {
          alert(error)
          return error
        })
    }
  },
  getters: {
    BASIC_SIZES_ARMREST (state) {
      return {
        width: state.basicSizesArmrest[0].width,
        height: state.basicSizesArmrest[1].height,
        thickness: state.basicSizesArmrest[2].thickness
      }
    },
    PRICE_FOR_ARMREST (state) {
      return {
        plywood_4: state.data.data[0].materials.plywood_4,
        plywood_9: state.data.data[0].materials.plywood_9,
        plywood_15: state.data.data[0].materials.plywood_15,
        theFelt: state.data.data[0].materials.theFelt,
        foam_rubber_40_65_10: state.data.data[0].materials.foam_rubber_40_65_10,
        foam_rubber_40_65_20: state.data.data[0].materials.foam_rubber_40_65_20
      }
    }

  },
  modules: {
  }
})
