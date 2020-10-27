import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allSofas: [
      {
        name: 'Andria',
        image: 'http://sdelay.online/img/andria/andria-main.png',
        amountDiscount: 20,
        discount: true,
        oldPrice: 90000,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: true,
        fittings: 'Дерево',
        like: false
      },
      {
        name: 'Asti',
        image: 'http://sdelay.online/img/asti/asti-main.png',
        discount: false,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: true,
        fittings: 'Дерево',
        like: true
      },
      {
        name: 'Barbaro',
        image: 'http://sdelay.online/img/barbaro/barbaro-main.png',
        discount: false,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: false,
        fittings: 'Дерево',
        like: false
      },
      {
        name: 'Bossi',
        image: 'http://sdelay.online/img/bossi/bossi-main.png',
        amountDiscount: 10,
        discount: true,
        oldPrice: 90000,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: false,
        fittings: 'Дерево',
        like: false
      },
      {
        name: 'Bari',
        image: 'http://sdelay.online/img/bari/bari-main.png',
        amountDiscount: 10,
        discount: true,
        oldPrice: 90000,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: false,
        fittings: 'Дерево',
        like: false
      },
      {
        name: 'Carpi',
        image: 'http://sdelay.online/img/carpi/carpi-main.png',
        amountDiscount: 18,
        discount: true,
        oldPrice: 90000,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: false,
        fittings: 'Дерево',
        like: false
      },
      {
        name: 'Chesterfield',
        image: 'http://sdelay.online/img/chesterfield/chesterfield-main.png',
        discount: true,
        amountDiscount: 20,
        oldPrice: 90000,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: false,
        fittings: 'Дерево',
        like: true
      },
      {
        name: 'Classic-sofa',
        image: 'http://sdelay.online/img/classic-sofa/classic-sofa-main.png',
        discount: false,
        newPrice: 80000,
        fabric: 'Текстиль, кожа',
        mechanism: true,
        fittings: 'Дерево',
        like: false
      },
      {
        name: 'Como',
        image: 'http://sdelay.online/img/como/como-main.png',
        discount: false,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: true,
        fittings: 'Дерево',
        like: false
      },
      {
        name: 'Eko',
        image: 'http://sdelay.online/img/eko/eko-main.png',
        discount: true,
        amountDiscount: 21,
        oldPrice: 90000,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: true,
        fittings: 'Дерево',
        like: false
      },
      {
        name: 'Ferrara',
        image: 'http://sdelay.online/img/ferrara/ferrara-main.png',
        discount: true,
        amountDiscount: 21,
        oldPrice: 90000,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: true,
        fittings: 'Дерево',
        like: false
      },
      {
        name: 'Florence',
        image: 'http://sdelay.online/img/florence/florence-main.png',
        discount: true,
        amountDiscount: 21,
        oldPrice: 90000,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: true,
        fittings: 'Дерево',
        like: false
      },
      {
        name: 'Forli',
        image: 'http://sdelay.online/img/forli/forli-main.png',
        discount: true,
        amountDiscount: 21,
        oldPrice: 90000,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: true,
        fittings: 'Дерево',
        like: false
      },
      {
        name: 'Imola',
        image: 'http://sdelay.online/img/imola/imola-main.png',
        discount: true,
        amountDiscount: 21,
        oldPrice: 90000,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: true,
        fittings: 'Дерево',
        like: false
      },
      {
        name: 'Kapella',
        image: 'http://sdelay.online/img/kapella/kapella-main.png',
        discount: true,
        amountDiscount: 21,
        oldPrice: 90000,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: true,
        fittings: 'Дерево',
        like: false
      },
      {
        name: 'Livorno',
        image: 'http://sdelay.online/img/livorno/livorno-main.png',
        discount: true,
        amountDiscount: 21,
        oldPrice: 90000,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: true,
        fittings: 'Дерево',
        like: false
      },
      {
        name: 'Monza',
        image: 'http://sdelay.online/img/monza/monza-main.png',
        discount: true,
        amountDiscount: 21,
        oldPrice: 90000,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: true,
        fittings: 'Дерево',
        like: false
      },
      {
        name: 'Muni',
        image: 'http://sdelay.online/img/muni/muni-main.png',
        discount: true,
        amountDiscount: 21,
        oldPrice: 90000,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: true,
        fittings: 'Дерево',
        like: false
      },
      {
        name: 'Parma',
        image: 'http://sdelay.online/img/parma/parma-main.png',
        discount: true,
        amountDiscount: 21,
        oldPrice: 90000,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: true,
        fittings: 'Дерево',
        like: false
      },
      {
        name: 'Terni',
        image: 'http://sdelay.online/img/terni/terni-main.png',
        discount: true,
        amountDiscount: 21,
        oldPrice: 90000,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: true,
        fittings: 'Дерево',
        like: false
      },
      {
        name: 'Turin',
        image: 'http://sdelay.online/img/turin/turin-main.png',
        discount: true,
        amountDiscount: 21,
        oldPrice: 90000,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: true,
        fittings: 'Дерево',
        like: false
      }
    ],
    firstPage: 1,
    success: '',
    status: '',
    successReg: '',
    statusReg: '',
    data: null,
    json: null,
    totalLength: 1200,
    backLength: null,
    depth: 950,
    priceDelivery: 1000,
    priceDeliveryPlusFix: 1500,
    baseSoftness: 'soft',
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
    SET_FIRST_PAGE: (state, data) => {
      state.firstPage = data
    },
    SET_DATA_TO_STATE: (state, data) => {
      state.data = data
    },
    SEND_JSON_TO_STATE: (state, data) => {
      state.json = data
    },
    SET_STRAIGHT_WIDTH_TO_STATE: (state, data) => {
      state.totalLength = data
    },
    SET_SOFTNESS_BASE_TO_STATE: (state, data) => {
      state.baseSoftness = data
    },
    INPUT_SUCCESS_REG (state, data) {
      state.success = data
    },
    INPUT_ERROR_REG (state) {
      state.status = 'error'
    },
    INPUT_SUCCESS (state, data) {
      state.successReg = data
    },
    INPUT_ERROR (state) {
      state.statusReg = 'error'
    }
  },
  actions: {
    GET_PRICE_FROM_STORE () {

    },
    SEND_NUMBER_TO_STORE ({ commit }, data) {
      commit('SET_FIRST_PAGE', data)
    },
    SET_SOFTNESS_TO_STORE ({ commit }, data) {
      commit('SET_SOFTNESS_BASE_TO_STATE', data)
    },
    SET_STRAIGHT_TO_STORE ({ commit }, width) {
      commit('SET_STRAIGHT_WIDTH_TO_STATE', width)
    },
    SEND_REG_DATA_TO_API ({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios.post('http://sdelay.online/api/user/register/order', data)
          .then(resp => {
            commit('INPUT_SUCCESS_REG', resp.data)
            resolve(resp)
          })
          .catch(err => {
            commit('INPUT_ERROR_REG', err)
            reject(err)
          })
      })
    },

    SEND_DATA_TO_API ({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios.post('http://sdelay.online/api/order/take', data)
          .then(resp => {
            commit('INPUT_SUCCESS', resp.data)
            resolve(resp)
          })
          .catch(err => {
            commit('INPUT_ERROR', err)
            reject(err)
          })
      })
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
    SET_FIRST_PAGE (state) {
      return state.firstPage
    },
    ALL_SOFAS (state) {
      return state.allSofas
    },
    COMMON_WORKS (state) {
      return state.json.otherCalculation
    },
    COMMON_MATERIALS (state) {
      return {
        theNut: state.data.data[0].materials.theNut,
        holcon20: state.data.data[0].materials.holcon_20,
        foamGlue: state.data.data[0].materials.foamGlue
      }
    },
    SOLID_WOOD_DRAWER (state) {
      return {
        depth: state.solidWoodDrawer
      }
    },
    SOFTNESS (state) {
      return state.baseSoftness
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
        foamRubber_35_42_40: state.data.data[0].materials.foamRubber_35_42_40,
        foamRubber_30_30_40: state.data.data[0].materials.foamRubber_30_30_40,
        foamRubberMemory_50_14_40: state.data.data[0].materials.foamRubberMemory_50_14_40,
        fasteningTape: state.fasteningTape
      }
    }

  },
  modules: {
  }
})
