import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    oneSofa: '',
    allWorks: '',
    allInBasket: [],
    metaSofas: '',
    linkSofas: '',
    allSofasFromApi: null,
    firstPage: 1,
    success: '',
    status: '',
    successReg: '',
    statusReg: '',
    data: null,
    json: {},
    totalLength: 1400,
    backLength: null,
    depth: 950,
    price_fabric: 950 // цена ткани
  },
  mutations: {
    SET_ONE_SOFA_TO_STATE: (state, data) => {
      state.oneSofa = data
    },
    CLEAR_PAGE: (state) => {
      state.allInBasket = []
    },
    GET_ITEM_TO_BASKET: (state, data) => {
      state.allInBasket.push(data)
    },
    SET_SOFAS_TO_STATE: (state, data) => {
      state.allSofasFromApi = data.data
      state.metaSofas = data.meta
      state.linkSofas = data.link
    },
    SET_FIRST_PAGE: (state, data) => {
      state.firstPage = data
    },
    SET_DATA_TO_STATE: (state, data) => {
      state.data = data
    },
    SEND_JSON_TO_STATE: (state, data) => {
      state.json = data.data
    },
    SEND_WORKS_TO_STATE: (state, data) => {
      state.allWorks = data.data
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
    GET_ONE_SOFA_FROM_API ({ commit }, data) {
      const url = 'http://sdelay.online/api/products/sofa/' + data
      return axios.get(url)
        .then((resp) => {
          const res = resp.data.data
          commit('SET_ONE_SOFA_TO_STATE', res)
          return res
        }
        ).catch((error) => {
          alert(error)
          return error
        })
    },

    GET_ALL_SOFAS_FROM_API ({ commit }, data) {
      const url = 'http://sdelay.online/api/products/sofa?page=' + data
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

    GET_WORKS_FROM_API ({ commit }) {
      const url = 'http://sdelay.online/api/work'
      return axios.get(url)
        .then((resp) => {
          const res = resp.data
          commit('SEND_WORKS_TO_STATE', res)
        })
        .catch((error) => {
          alert(error)
          return error
        })
    },
    GET_JSON_FROM_API ({ commit }) {
      const url = 'http://sdelay.online/api/materials'
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
    ONE_SOFA (state) {
      return state.oneSofa
    },
    NUMBER_SOFAS (state) {
      return state.metaSofas.total
    },
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
      return state.allWorks
    },
    COMMON_MATERIALS (state) {
      return {
        theNut: state.json[12].theNut.price,
        theBolt: state.json[13].theBolt.price,
        holcon_20: state.json[28].holcon_20.price,
        foamGlue: state.json[16].foamGlue.price
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
        depth: state.oneSofa.armrest_width,
        totalLength: state.totalLength,
        thicknessArmrest: state.oneSofa.armrest_thickness,
        thicknessBack: state.oneSofa.back_thickness,
        zSideBar: state.oneSofa.side_bar_height
      }
    },
    BASIC_SIZES_COMMON (state) {
      return {
        totalLength: state.oneSofa.totalLength,
        width: state.oneSofa.armrest_width,
        thicknessArmrest: state.oneSofa.armrest_thickness
      }
    },

    BASIC_SIZES_BACK (state) {
      return {
        heightBack: state.oneSofa.back_height,
        thicknessBack: state.oneSofa.back_thickness,
        zSideBar: state.oneSofa.side_bar_height,
        totalLength: state.totalLength,
        width: state.oneSofa.armrest_width,
        thicknessArmrest: state.oneSofa.armrest_thickness,
        seatHeight: state.cushion_thickness
      }
    },
    BASIC_SIZES_ARMREST (state) {
      return {
        width: state.oneSofa.armrest_width,
        height: state.oneSofa.armrest_height,
        thickness: state.oneSofa.armrest_thickness,
        zSideBar: state.oneSofa.side_bar_height
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
        hardboard: state.json[1].hardboard.price,
        plywood_4: state.json[2].plywood_4.price,
        plywood_9: state.json[3].plywood_9.price,
        plywood_15: state.json[4].plywood_15.price,
        bar_30_40: state.json[6].bar_30_40.price,
        theFelt: state.json[29].theFelt.price,
        ribbon_60: state.json[21].ribbon_60.price,
        foam_rubber_40_65_10: state.json[7].foam_rubber_40_65_10.price,
        foam_rubber_40_65_20: state.json[8].foam_rubber_40_65_20.price,
        metallicProfile: state.json[30].metallicProfile.price,
        foamRubber_35_42_40: state.json[24].foamRubber_35_42_40.price,
        foamRubber_30_30_40: state.json[25].foamRubber_30_30_40.price,
        foamRubberMemory_50_14_40: state.json[27].foamRubberMemory_50_14_40.price,
        fasteningTape: state.json[31].fasteningTape.price,
        downSynthetic: state.json[32].downSynthetic.price,
        downNatural: state.json[33].downNatural.price,
        calico: state.json[34].calico.price,
        zipper: state.json[35].zipper.price

      }
    }

  },
  modules: {
  }
})
