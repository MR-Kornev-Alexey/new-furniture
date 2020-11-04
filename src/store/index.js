import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    allInBasket: [],
    configSofa: [
      {
        slug: 'andria',
        back_height: 450,
        back_thickness: 200,
        armrest_thickness: 50,
        armrest_height: 500,
        armrest_width: 900,
        side_bar_height: 60,
        cushion_thickness: 200,
        metal_in_armrest: true, // Металлокаркас в подлокотнике
        metal_in_base: true, // Металлокаркас в основании
        metal_in_back: true, // Металлокаркас в спинке
        mechanism_in_armrests: false, // Механизм в подлокотниках
        folding_mechanism: true, // Раскладной Механизм
        left_armrest: true, // Левый подлокотник
        right_armrest: true, // Правый подлокотник
        bar_in_armrest: true, // Брусок в полокотнике
        bar_in_base: true, // Брусок в основании
        bar_in_back: true, // Брусок в спинке
        tape_armrest: true, // Лента в подлокотнике
        tape_base: true, // Лента в основании
        tape_back: true, // Лента в спинке
        solid_wood_drawer: false, // Царга из массива
        down_natural: true, // Пух натуральный
        calico: true, // Бязь
        legs: true, // Ножки
        zipper: true,
        hard_covering: false
      }
    ],
    allSofas: [
      {
        slug: 'andria_straight',
        legs: 'true',
        name: 'Andria - Прямой диван',
        config: 'straight',
        image: 'http://sdelay.online/img/andria/andria-main.png',
        image_angle: 'http://sdelay.online/img/andria/image-angle.png',
        image_ottoman: 'http://sdelay.online/img/andria/image-ottoman.png',
        under_1: 'http://sdelay.online/img/andria/image-under-1.png',
        under_2: 'http://sdelay.online/img/andria/image-under-2.png',
        under_3: 'http://sdelay.online/img/andria/image-under-3.png',
        under_4: 'http://sdelay.online/img/andria/image-under-4.png',
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
        slug: 'andria_angle',
        legs: 'true',
        name: 'Andria - Угловой диван',
        config: 'angle',
        image: 'http://sdelay.online/img/andria/andria-main.png',
        image_angle: 'http://sdelay.online/img/andria/image-angle.png',
        image_ottoman: 'http://sdelay.online/img/andria/image-ottoman.png',
        under_1: 'http://sdelay.online/img/andria/image-under-1.png',
        under_2: 'http://sdelay.online/img/andria/image-under-2.png',
        under_3: 'http://sdelay.online/img/andria/image-under-3.png',
        under_4: 'http://sdelay.online/img/andria/image-under-4.png',
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
        slug: 'andria_ottoman',
        legs: 'true',
        name: 'Andria - Диван с оттоманкой',
        config: 'ottoman',
        image: 'http://sdelay.online/img/andria/andria-main.png',
        image_angle: 'http://sdelay.online/img/andria/image-angle.png',
        image_ottoman: 'http://sdelay.online/img/andria/image-ottoman.png',
        under_1: 'http://sdelay.online/img/andria/image-under-1.png',
        under_2: 'http://sdelay.online/img/andria/image-under-2.png',
        under_3: 'http://sdelay.online/img/andria/image-under-3.png',
        under_4: 'http://sdelay.online/img/andria/image-under-4.png',
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
        slug: 'asti',
        legs: 'true',
        name: 'Asti',
        image: 'http://sdelay.online/img/asti/asti-main.png',
        under_1: 'http://sdelay.online/img/asti/image-under-1.png',
        under_2: 'http://sdelay.online/img/asti/image-under-2.png',
        under_3: 'http://sdelay.online/img/asti/image-under-3.png',
        under_4: 'http://sdelay.online/img/asti/image-under-4.png',
        amountDiscount: 20,
        discount: false,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: true,
        fittings: 'Дерево',
        like: true
      },
      {
        slug: 'barbaro',
        legs: 'true',
        name: 'Barbaro',
        image: 'http://sdelay.online/img/barbaro/barbaro-main.png',
        under_1: 'http://sdelay.online/img/barbaro/image-under-1.png',
        under_2: 'http://sdelay.online/img/barbaro/image-under-2.png',
        under_3: 'http://sdelay.online/img/barbaro/image-under-3.png',
        under_4: 'http://sdelay.online/img/barbaro/image-under-4.png',
        amountDiscount: 20,
        discount: false,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: false,
        fittings: 'Дерево',
        like: false
      },
      {
        slug: 'bossi',
        legs: 'true',
        name: 'Bossi',
        image: 'http://sdelay.online/img/bossi/bossi-main.png',
        under_1: 'http://sdelay.online/img/bossi/image-under-1.png',
        under_2: 'http://sdelay.online/img/bossi/image-under-2.png',
        under_3: 'http://sdelay.online/img/bossi/image-under-3.png',
        under_4: 'http://sdelay.online/img/bossi/image-under-4.png',
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
        slug: 'bari',
        legs: 'true',
        name: 'Bari',
        image: 'http://sdelay.online/img/bari/bari-main.png',
        under_1: 'http://sdelay.online/img/bari/image-under-1.png',
        under_2: 'http://sdelay.online/img/bari/image-under-2.png',
        under_3: 'http://sdelay.online/img/bari/image-under-3.png',
        under_4: 'http://sdelay.online/img/bari/image-under-4.png',
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
        slug: 'carpi',
        legs: 'false',
        name: 'Carpi',
        image: 'http://sdelay.online/img/carpi/carpi-main.png',
        under_1: 'http://sdelay.online/img/carpi/image-under-1.png',
        under_2: 'http://sdelay.online/img/carpi/image-under-2.png',
        under_3: 'http://sdelay.online/img/carpi/image-under-3.png',
        under_4: 'http://sdelay.online/img/carpi/image-under-4.png',
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
        slug: 'chesterfield',
        legs: 'true',
        name: 'Chesterfield',
        image: 'http://sdelay.online/img/chesterfield/chesterfield-main.png',
        under_1: 'http://sdelay.online/img/chesterfield/image-under-1.png',
        under_2: 'http://sdelay.online/img/chesterfield/image-under-2.png',
        under_3: 'http://sdelay.online/img/chesterfield/image-under-3.png',
        under_4: 'http://sdelay.online/img/chesterfield/image-under-4.png',
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
        slug: 'classic_sofa',
        legs: 'true',
        name: 'Classic-sofa',
        image: 'http://sdelay.online/img/classic-sofa/classic-sofa-main.png',
        under_1: 'http://sdelay.online/img/classic-sofa/image-under-1.png',
        under_2: 'http://sdelay.online/img/classic-sofa/image-under-2.png',
        under_3: 'http://sdelay.online/img/classic-sofa/image-under-3.png',
        under_4: 'http://sdelay.online/img/classic-sofa/image-under-4.png',
        amountDiscount: 14,
        discount: false,
        newPrice: 80000,
        fabric: 'Текстиль, кожа',
        mechanism: true,
        fittings: 'Дерево',
        like: false
      },
      {
        slug: 'como',
        legs: 'false',
        name: 'Como',
        image: 'http://sdelay.online/img/como/como-main.png',
        under_1: 'http://sdelay.online/img/como/image-under-1.png',
        under_2: 'http://sdelay.online/img/como/image-under-2.png',
        under_3: 'http://sdelay.online/img/como/image-under-3.png',
        under_4: 'http://sdelay.online/img/como/image-under-4.png',
        discount: false,
        amountDiscount: 14,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: true,
        fittings: 'Дерево',
        like: false
      },
      {
        slug: 'eko',
        legs: 'true',
        name: 'Eko',
        image: 'http://sdelay.online/img/eko/eko-main.png',
        under_1: 'http://sdelay.online/img/eko/image-under-1.png',
        under_2: 'http://sdelay.online/img/eko/image-under-2.png',
        under_3: 'http://sdelay.online/img/eko/image-under-3.png',
        under_4: 'http://sdelay.online/img/eko/image-under-4.png',
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
        slug: 'ferrara',
        legs: 'true',
        name: 'Ferrara',
        image: 'http://sdelay.online/img/ferrara/ferrara-main.png',
        under_1: 'http://sdelay.online/img/ferrara/image-under-1.png',
        under_2: 'http://sdelay.online/img/ferrara/image-under-2.png',
        under_3: 'http://sdelay.online/img/ferrara/image-under-3.png',
        under_4: 'http://sdelay.online/img/ferrara/image-under-4.png',
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
        slug: 'florence',
        legs: 'true',
        name: 'Florence',
        image: 'http://sdelay.online/img/florence/florence-main.png',
        under_1: 'http://sdelay.online/img/florence/image-under-1.png',
        under_2: 'http://sdelay.online/img/florence/image-under-2.png',
        under_3: 'http://sdelay.online/img/florence/image-under-3.png',
        under_4: 'http://sdelay.online/img/florence/image-under-4.png',
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
        slug: 'forli',
        legs: 'false',
        name: 'Forli',
        image: 'http://sdelay.online/img/forli/forli-main.png',
        under_1: 'http://sdelay.online/img/forli/image-under-1.png',
        under_2: 'http://sdelay.online/img/forli/image-under-2.png',
        under_3: 'http://sdelay.online/img/forli/image-under-3.png',
        under_4: 'http://sdelay.online/img/forli/image-under-4.png',
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
        slug: 'imola',
        legs: 'false',
        name: 'Imola',
        image: 'http://sdelay.online/img/imola/imola-main.png',
        under_1: 'http://sdelay.online/img/imola/image-under-1.png',
        under_2: 'http://sdelay.online/img/imola/image-under-2.png',
        under_3: 'http://sdelay.online/img/imola/image-under-3.png',
        under_4: 'http://sdelay.online/img/imola/image-under-4.png',
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
        slug: 'kapella',
        legs: 'true',
        name: 'Kapella',
        image: 'http://sdelay.online/img/kapella/kapella-main.png',
        under_1: 'http://sdelay.online/img/kapella/image-under-1.png',
        under_2: 'http://sdelay.online/img/kapella/image-under-2.png',
        under_3: 'http://sdelay.online/img/kapella/image-under-3.png',
        under_4: 'http://sdelay.online/img/kapella/image-under-4.png',
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
        slug: 'livorno',
        legs: 'true',
        name: 'Livorno',
        image: 'http://sdelay.online/img/livorno/livorno-main.png',
        under_1: 'http://sdelay.online/img/livorno/image-under-1.png',
        under_2: 'http://sdelay.online/img/livorno/image-under-2.png',
        under_3: 'http://sdelay.online/img/livorno/image-under-3.png',
        under_4: 'http://sdelay.online/img/livorno/image-under-4.png',
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
        slug: 'monza',
        legs: 'true',
        name: 'Monza',
        image: 'http://sdelay.online/img/monza/monza-main.png',
        under_1: 'http://sdelay.online/img/monza/image-under-1.png',
        under_2: 'http://sdelay.online/img/monza/image-under-2.png',
        under_3: 'http://sdelay.online/img/monza/image-under-3.png',
        under_4: 'http://sdelay.online/img/monza/image-under-4.png',
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
        slug: 'muni',
        legs: 'true',
        name: 'Muni',
        image: 'http://sdelay.online/img/muni/muni-main.png',
        under_1: 'http://sdelay.online/img/muni/image-under-1.png',
        under_2: 'http://sdelay.online/img/muni/image-under-2.png',
        under_3: 'http://sdelay.online/img/muni/image-under-3.png',
        under_4: 'http://sdelay.online/img/muni/image-under-4.png',
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
        slug: 'parma',
        legs: 'true',
        name: 'Parma',
        image: 'http://sdelay.online/img/parma/parma-main.png',
        under_1: 'http://sdelay.online/img/parma/image-under-1.png',
        under_2: 'http://sdelay.online/img/parma/image-under-2.png',
        under_3: 'http://sdelay.online/img/parma/image-under-3.png',
        under_4: 'http://sdelay.online/img/parma/image-under-4.png',
        discount: true,
        amountDiscount: 11,
        oldPrice: 90000,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: true,
        fittings: 'Дерево',
        like: false
      },
      {
        slug: 'terni',
        legs: 'true',
        name: 'Terni',
        image: 'http://sdelay.online/img/terni/terni-main.png',
        under_1: 'http://sdelay.online/img/terni/image-under-1.png',
        under_2: 'http://sdelay.online/img/terni/image-under-2.png',
        under_3: 'http://sdelay.online/img/terni/image-under-3.png',
        under_4: 'http://sdelay.online/img/terni/image-under-4.png',
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
        slug: 'turin',
        legs: 'false',
        name: 'Turin',
        image: 'http://sdelay.online/img/turin/turin-main.png',
        under_1: 'http://sdelay.online/img/turin/image-under-1.png',
        under_2: 'http://sdelay.online/img/turin/image-under-2.png',
        under_3: 'http://sdelay.online/img/turin/image-under-3.png',
        under_4: 'http://sdelay.online/img/turin/image-under-4.png',
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
    allSofasFromApi: null,
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
    CLEAR_PAGE: (state) => {
      state.allInBasket = []
    },
    GET_ITEM_TO_BASKET: (state, data) => {
      state.allInBasket.push(data)
    },
    SET_SOFAS_TO_STATE: (state, data) => {
      state.allSofasFromApi = data.data
    },
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
    CLEAR ({ commit }) {
      commit('CLEAR_PAGE')
    },
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

    GET_ALL_SOFAS_FROM_API ({ commit }) {
      const url = 'http://sdelay.online/api/products/sofa'
      return axios.get(url)
        .then((resp) => {
          const res = resp.data
          commit('SET_SOFAS_TO_STATE', res)
          return res
        }
        ).catch((error) => {
          alert(error)
          return error
        })
    },
    SEND_DATA_TO_API ({ commit }, data) {
      commit('GET_ITEM_TO_BASKET', data)
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
    GET_ITEMS_TO_BASKET (state) {
      return state.allInBasket
    },
    SET_ALL_SOFAS (state) {
      return state.allSofasFromApi
    },
    SET_FIRST_PAGE (state) {
      return state.firstPage
    },
    ALL_SOFAS (state) {
      return state.allSofasFromApi
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
