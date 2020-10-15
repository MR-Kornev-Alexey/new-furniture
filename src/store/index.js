import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: null,
    json: null,
    totalLength: 1200,
    backLength: null,
    depth: null,
    softness: 'middle',
    solidWoodDrawer: false,
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
    fasteningTape: 28,

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

    solid_wood_drawer: null, // Царга из массива
    price_fabric: 950 // цена ткани
  },
  mutations: {
    SET_DATA_TO_STATE: (state, data) => {
      state.data = data
    },
    SEND_JSON_TO_STATE: (state, data) => {
      state.json = data
    },
    SET_STRAIGHT_WIDTH_TO_STATE: (state, data) => {
      state.totalLength = data
    }
  },
  actions: {
    GET_STRAIGHT_TO_STORE ({ commit }, width) {
      commit('SET_STRAIGHT_WIDTH_TO_STATE', width)
    },
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
    SOLID_WOOD_DRAWER (state) {
      return {
        depth: state.solidWoodDrawer
      }
    },
    SOFTNESS (state) {
      return {
        depth: state.depth
      }
    },
    BASIC_SIZES_BASE (state) {
      return {
        depth: state.depth,
        totalLength: state.totalLength,
        thicknessArmrest: state.basicSizesArmrest[2].thickness,
        thicknessBack: state.basicSizesBack[1].thickness,
        zSideBar: state.zSideBar
      }
    },
    BASIC_SIZES_BACK (state) {
      return {
        heightBack: state.basicSizesBack[0].height,
        thicknessBack: state.basicSizesBack[1].thickness,
        backCushionThickness: state.basicSizesBack[2].back_cushion_thickness,
        backCushionHeight: state.basicSizesBack[3].back_cushion_height,
        zSideBar: state.zSideBar,
        totalLength: state.totalLength,
        width: state.basicSizesArmrest[0].width,
        thicknessArmrest: state.basicSizesArmrest[2].thickness,
        seatHeight: state.seatHeight
      }
    },
    BASIC_SIZES_ARMREST (state) {
      return {
        width: state.basicSizesArmrest[0].width,
        height: state.basicSizesArmrest[1].height,
        thickness: state.basicSizesArmrest[2].thickness,
        zSideBar: state.zSideBar
      }
    },
    SLUG_SOFA (state) {
      return state.data.data[0].slug
    },
    PRICE_FABRIC (state) {
      return state.price_fabric
    },
    PRICE_FOR_ALL (state) {
      return {
        hardboard: state.data.data[0].materials.hardboard,
        plywood_4: state.data.data[0].materials.plywood_4,
        plywood_9: state.data.data[0].materials.plywood_9,
        plywood_15: state.data.data[0].materials.plywood_15,
        bar_30_40: state.data.data[0].materials.bar_30_40,
        theFelt: state.data.data[0].materials.theFelt,
        ribbon_60: state.data.data[0].materials.ribbon_60,
        foam_rubber_40_65_10: state.data.data[0].materials.foam_rubber_40_65_10,
        foam_rubber_40_65_20: state.data.data[0].materials.foam_rubber_40_65_20,
        metallicProfile: state.data.data[0].materials.metallicProfile,
        fasteningTape: state.fasteningTape
      }
    }

  },
  modules: {
  }
})
