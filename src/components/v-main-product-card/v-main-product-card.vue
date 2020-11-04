<template>
  <v-row class="v-main-product-card d-block">
    <div class="d-flex justify-center">
      <div class="v-main-product-card__one"
           :style="{ backgroundImage: 'url(' + dataOneSofa.image + ')' }">
      </div>
      <div class="v-main-product-card__two">
        <div class="v-m-card__two__tittle">Диван</div>
        <div class="v-m-card__two__price" v-if="!resultPrice"><span>от</span> {{dataOneSofa.newPrice}} &#8381;</div>
        <div class="v-m-card__two__price" v-if="resultPrice">{{resultPrice}} &#8381;</div>
        <div class="v-m-card__two__name">{{dataOneSofa.name}}</div>
        <div class="v-m-card__two__quest d-flex align-content-center"><img alt="message"
                                                                           src="../../assets/img/svg/message-call.svg">Вопрос
          + ответ:
          <a href="#">см. 20 ответов</a></div>
        <button class="pale-btn"><img alt="credit"
                                      src="../../assets/img/svg/discount.svg"><span>купить в рассрочку</span></button>
        <div class="v-m-card__two__config height-348" >
          <div class="d-flex">
            <div class="number"></div>
            Выберите конфигурацию
          </div>
          <div class="d-flex justify-center text-center alles-switch">
            <div v-for="item in  choiceSwitch" :key="`conf_` + item.id">
              <v-switch
                v-model="item.selected"
                :label="item.name"
                color="accent"
                @change="choiceConfig(item.id)"
                :disabled="item.selected"
              ></v-switch>
            </div>
         </div>
          <div v-if="choiceSwitch[0].selected">
            <div class="v-m-card__two__block d-flex justify-center ">
              <v-icon-sofa-left class="align-self-center" />
              <div class="text align-self-center">Прямой диван</div>
            </div>
            <div>
              <div class="d-flex my-4">
                <div class="number "></div>
                Выберите ширину дивана
              </div>
              <div class="text-center d-flex justify-center">
                <v-select
                  :items="steps"
                  @change="inputLengthStraight(stepLengthStraight)"
                  class="my-select-choice text-center"
                  color="primary"
                  label="выберите шаг"
                  solo
                  v-model="stepLengthSample"
                ></v-select>
              </div>

            </div>

          </div>
         <div v-if="choiceSwitch[1].selected">
           <div class="v-m-card__two__block d-flex justify-center ">
             <v-icon-sofa-left class="align-self-center" :flagSelectLeft="flagSelectLeft" @sendSelectLeft="getSelectLeft"/>
             <div class="text align-self-center">Левосторонний диван</div>
           </div>
           <div class="v-m-card__two__block d-flex justify-center">
             <v-icon-sofa-right class="align-self-center" :flagSelectRight ="flagSelectRight" @sendSelectRight="getSelectRight"/>
             <div class="text align-self-center">Правосторонний диван</div>
           </div>

         </div>
          <div v-if="choiceSwitch[2].selected">
            <div class="v-m-card__two__block d-flex justify-center ">
              <v-icon-sofa-left class="align-self-center" :flagSelectLeft="flagSelectLeft" @sendSelectLeft="getSelectLeft"/>
              <div class="text align-self-center">Диван с левой оттоманкой  </div>
            </div>
            <div class="v-m-card__two__block d-flex justify-center">
              <v-icon-sofa-right class="align-self-center" :flagSelectRight ="flagSelectRight" @sendSelectRight="getSelectRight"/>
              <div class="text align-self-center">Диван с правой оттоманкой</div>
            </div>
          </div>

        </div>
        <div class="v-m-card__two__size" :class="{'height-126':  choiceSwitch[0].selected}">
          <div v-if="choiceSwitch[1].selected || choiceSwitch[2].selected  ">

           <div class="d-flex">
            <div class="number"></div>
            Выберите размер
          </div>
          <div class="d-flex block-select">
            <div class="d-block group">
              <div>
                <label>Длина дивана</label>
              </div>
              <div>
                <v-select
                  :items="steps"
                  @change="inputLengthStraight(stepLengthStraight)"
                  class="my-select-choice"
                  color="primary"
                  label="выберите шаг"
                  solo
                  v-model="stepLengthStraight"
                ></v-select>
              </div>
            </div>
            <div class="d-block group">
              <div>
                <label >Длина стороны</label>
              </div>
              <div>
                <v-select
                  :items="steps"
                  @change="inputLengthSide(stepLengthSide)"
                  class="my-select-choice"
                  color="primary"
                  label="выберите шаг"
                  solo
                  v-model="stepLengthSide"
                ></v-select>
              </div>
            </div>
          </div>
          </div>
          <div v-if="choiceSwitch[2].selected" class="input-ottomans">
            <div class="d-flex">
              <div class="number"></div>
              Выберите размер оттоманки (боковая длина)
            </div>
            <div class="d-flex justify-center">
              <v-select
                :items="stepsOttoman"
                @change="inputLengthStraight(stepLengthStraight)"
                class="my-select-choice"
                color="primary"
                label="выберите шаг"
                solo
                v-model="stepLengthOttoman"
              ></v-select>
            </div>

          </div>
          <div class="text-center">Приложить 2 декоративные подушки </div>
          <div class="d-flex justify-center text-center">
            <div v-for="item in   choiceSwitchPillow" :key="`pillow_` + item.id" class="item-pillow">
              <v-switch
                v-model="item.selected"
                :label="item.name"
                color="accent"
                @change="choicePillow(item.id)"
                :disabled="item.selected"
              ></v-switch>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="d-flex justify-center">
      <div class="v-main-product-card__third "
     :class="{'margin-top-12':  choiceSwitch[0].selected,
      'margin-top-48':  choiceSwitch[1].selected,
      'margin-top-96':  choiceSwitch[2].selected
      }">
        <div class="d-flex">
         <div class="margin-right-bottom under-image"
             :style="{ backgroundImage: 'url(' + dataOneSofa.under_1 + ')' }"></div>
        <div class="margin-left-bottom under-image"
             :style="{ backgroundImage: 'url(' + dataOneSofa.under_2 + ')' }"></div>
      </div>
        <div class="d-flex">
          <div class="margin-right-bottom under-image"
               :style="{ backgroundImage: 'url(' + dataOneSofa.under_3 + ')' }"></div>
          <div class="margin-left-bottom under-image"
               :style="{ backgroundImage: 'url(' + dataOneSofa.under_4 + ')' }"></div>
        </div>
      </div>
      <div class="v-main-product-card__fourth">
        <div class="fabric" :key="renderFabric">
          <div class="d-flex">
            <div class="number"></div>
            Выберите текстуру и цвет ткани
            <div class="resize">

            </div>
            <div class="d-block text-center main-filter align-self-start">
              <img alt="filter" src="../../assets/img/svg/filter.svg" @click="openWindowsFilter">
              <div class="icon-filter">
                Фильтр
              </div>

            </div>
          </div>
          <div class="in-stock d-flex ">
            <div class="align-self-center">В наличии и готов к отправке</div>
          </div>
          <div class="choice-in-stock d-flex ">
            <div class="choice-vertical"><img src="../../assets/img/svg/vertical.svg"  alt="vertical"></div>
            <div
              :key="'InStock_' + i"
              v-for="(item, i) in fabricInStock">
              <div class="d-block card transform-1-5" @click="choiceFabric(item.id)">
                <div class="fabric-icons d-block">
                  <div style="height: 26px" v-if="item.paw"><img alt="animal"  src="../../assets/img/svg/pow.svg"></div>
                  <div style="height: 26px" v-if="item.clean"><img alt="clear" src="../../assets/img/svg/clean.svg">
                  </div>

                </div>
                <div class="fabric-active">
                  <img alt="active" src="../../assets/img/svg/active.svg" v-if="item.active">
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
          <div class="in-stock d-flex justify-space-between">
            <div class="align-self-center">На заказ (отправка через 6-9 недель)</div>
              <div class="choice-collection align-self-center" @click="choiceCollection()">Выбрать коллекцию</div>
          </div>
          <div class="choice-in-stock for-order">
            <div
              :key="'ForOrder_' + i"
              style=" display: inline-flex" v-for="(item, i) in fabricForOrder">
              <div class="d-block card transform-1-5" @click="choiceFabricForOrder(item.id)">
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
        <div class="v-machine">
          <div class="d-flex">
            <div class="number"></div>
            Механизм
          </div>
          <div class="d-flex row-machine">
            <div :class="{'v-machine-item-selected':  withOutMachineItemSelected }" class="d-flex v-machine-item transform-1-5" @click="choiceIdMachine('without')"><img  class="d-flex  align-self-center " src="../../assets/img/svg/sofa-m.svg" alt="sofa without"> Без механизма</div>
            <div :class="{'v-machine-item-selected': withMachineItemSelected}" class="d-flex v-machine-item transform-1-5" @click="choiceIdMachine('with')"><img class="d-flex align-self-center " src="../../assets/img/svg/sofa-yes.svg" alt="sofa without"> С механизмом</div>
          </div>

        </div>
        <div class="v-legs">
          <div class="d-flex">
            <div class="number"></div>
            Ножки
          </div>
          <div class="choice-in-stock text-center justify-center" >
            <div  :key="i"
              v-for="(item, i) in arrayLegs" style="display: inline-block">
                <div :class="{'v-legs-item-selected': item.selected }" class="transform"  @click="selectArrayLegs(item.id)">
                  <img class="img-legs" :src="item.src" alt="leg">
                </div>
           </div>
          </div>
        </div>
        <div class="v-legs">
          <div class="d-block">
            <div class="d-flex"> <div class="number"></div>
              Выберите мягкость дивана</div>
            <div class="d-flex justify-space-around">
              <div class="input-soft" :class="{'input-soft-selected': item.selected }" v-for="item in arraySoftness" :key="item.id" @click="choiceSoftness(item.id)">
                {{item.name}}
              </div>
           </div>
          </div>
        </div>
        <button  :disabled="disabledBasket" @click="sendToBasket()" class="big-btn">Добавить в корзину</button>
      </div>
    </div>
    <v-pop-filter :visible="showModal" />
    <v-pop-collection :visible = "showModalCollection" :fabricForOrder="fabricForOrder"/>
  </v-row>
</template>

<script>
import vPopCollection from '../v-common/v-pop-collection'
import vPopFilter from '../v-common/v-pop-filter'
import vIconSofaLeft from '../v-common/v-icon-sofa-left'
import vIconSofaRight from '../v-common/v-icon-sofa-right'
import { mapActions, mapGetters } from 'vuex'

import ClassArmrest from '../v-classes/classArmrest'
import ClassBase from '../v-classes/classBase'
import ClassStrBack from '../v-classes/classStrBack'
import ClassCommon from '../v-classes/classCommon'
import ClassWorks from '../v-classes/classWorks'

export default {
  name: 'v-main-product-card',
  props: ['nameOfSofa'],
  components: {
    vIconSofaLeft,
    vIconSofaRight,
    vPopFilter,
    vPopCollection
  },
  mounted () {
    this.GET_JSON_FROM_API()
    this.GET_DATA_FROM_API()
  },
  computed: {
    ...mapGetters([
      'BASIC_SIZES_ARMREST',
      'PRICE_FOR_ALL',
      'SLUG_SOFA',
      'PRICE_FABRIC',
      'BASIC_SIZES_BACK',
      'BASIC_SIZES_BASE',
      'SOFTNESS',
      'SOLID_WOOD_DRAWER',
      'COMMON_MATERIALS',
      'COMMON_WORKS',
      'ALL_SOFAS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_JSON_FROM_API',
      'GET_DATA_FROM_API',
      'SET_STRAIGHT_TO_STORE',
      'SET_SOFTNESS_TO_STORE',
      'SEND_DATA_TO_API'
    ]),
    choicePillow (id) {
      for (let i = 0; i < this.choiceSwitchPillow.length; i++) {
        if (this.choiceSwitchPillow[i].id === id) {
          this.choiceSwitchPillow[i].selected = true
        } else {
          this.choiceSwitchPillow[i].selected = false
        }
      }
    },
    choiceConfig (id) {
      for (let i = 0; i < this.choiceSwitch.length; i++) {
        if (this.choiceSwitch[i].id === id) {
          this.choiceSwitch[i].selected = true
        } else {
          this.choiceSwitch[i].selected = false
        }
      }
    },
    getDataOneSofa (slug) {
      for (let i = 0; i < this.ALL_SOFAS.length; i++) {
        if (this.ALL_SOFAS[i].slug === slug) {
          this.dataOneSofa = this.ALL_SOFAS[i]
        }
      }
    },
    sendToBasket () {
      let flagPosition = ''
      if (this.flagSelectLeft) {
        flagPosition = 'left'
      } else if (this.flagSelectRight) {
        flagPosition = 'right'
      } else {
        flagPosition = 'straight'
      }

      const rawData = {
        slug: this.dataOneSofa.slug,
        name: this.dataOneSofa.name,
        image: this.dataOneSofa.image,
        config: this.dataOneSofa.config,
        position: flagPosition,
        width: this.resultWidth,
        length: this.resultLength,
        fabric: this.choiceIdFabric,
        collection: this.fabricCollection,
        mechanism: this.withMachineItemSelected,
        legs: this.choiceIdLegs,
        softness: this.choiceIdSoftness,
        price: this.resultPrice
      }
      // rawData = JSON.stringify(rawData)
      // alert(rawData)
      this.SEND_DATA_TO_API(rawData)
    },
    inputLengthStraight (data) {
      const clearData = data.slice(0, -2)
      this.resultWidth = Number(clearData)
      this.SET_STRAIGHT_TO_STORE(this.resultWidth)
      this.totalCalc()
    },
    totalCalc () {
      this.priceOther = this.resultPrice = null
      this.disabledBasket = true
      const d = new ClassStrBack(this.SLUG_SOFA, this.BASIC_SIZES_BACK, false, true, true, this.PRICE_FABRIC, this.PRICE_FOR_ALL)
      const calcStrBack = d.calcStrBack()

      const c = new ClassBase(this.SLUG_SOFA, this.BASIC_SIZES_BASE, false, true, true, this.PRICE_FABRIC, this.PRICE_FOR_ALL, this.SOFTNESS, this.SOLID_WOOD_DRAWER)
      const calcBase = c.calcBase()

      const a = new ClassArmrest(this.SLUG_SOFA, this.BASIC_SIZES_ARMREST, false, true, true, this.PRICE_FABRIC, this.PRICE_FOR_ALL)
      const calcOneArmrest = a.calcArmrest()

      const b = new ClassCommon(this.COMMON_MATERIALS)
      const calcCommon = b.calcOther()

      const e = new ClassWorks(this.COMMON_WORKS, this.resultWidth)
      const calcWorks = e.calcAllSpending()
      this.resultPrice = calcOneArmrest * 2 + calcStrBack + calcBase + calcCommon + calcWorks
      this.resultPrice = this.resultPrice.toFixed(2)
      if (this.resultPrice > 0) {
        this.disabledBasket = false
      }
    },
    choiceSoftness (id) {
      this.choiceIdSoftness = id
      this.SET_SOFTNESS_TO_STORE(id)
      for (let i = 0; i < this.arraySoftness.length; i++) {
        this.totalCalc()
        this.arraySoftness[i].selected = this.arraySoftness[i].id === id
      }
      this.totalCalc()
    },
    selectArrayLegs (id) {
      this.choiceIdLegs = id
      for (let i = 0; i < this.arrayLegs.length; i++) {
        this.arrayLegs[i].selected = this.arrayLegs[i].id === id
      }
    },
    choiceIdMachine (data) {
      if (data === 'with') {
        this.withOutMachineItemSelected = false
        this.withMachineItemSelected = true
        if (this.resultPrice) {
          this.resultPrice = (+this.resultPrice + 12000).toFixed(2)
        }
      } else if (data === 'without') {
        this.withOutMachineItemSelected = true
        this.withMachineItemSelected = false
        if (this.resultPrice) {
          this.resultPrice = (+this.resultPrice - 12000).toFixed(2)
        }
      }
    },
    clearArray (array) {
      for (let i = 0; i < array.length; i++) {
        array[i].active = false
      }
      this.renderFabric++
    },
    choiceFabricForOrder (id) {
      this.choiceOrderFabric = id
      for (let i = 0; i < this.fabricForOrder.length; i++) {
        this.fabricForOrder[i].active = this.fabricForOrder[i].id === id
      }
      this.clearArray(this.fabricInStock)
    },
    choiceFabric (id) {
      this.choiceIdFabric = id
      for (let i = 0; i < this.fabricInStock.length; i++) {
        this.fabricInStock[i].active = this.fabricInStock[i].id === id
      }
      this.clearArray(this.fabricForOrder)
    },
    choiceCollection () {
      this.showModalCollection = !this.showModalCollection
    },
    openWindowsFilter () {
      this.showModal = !this.showModal
    },
    clearAllSelect () {
      this.flagSelectLeft = this.flagSelectRight = false
    },
    getSelectLeft () {
      this.clearAllSelect()
      this.flagSelectLeft = true
    },
    getSelectRight () {
      this.clearAllSelect()
      this.flagSelectRight = true
    },

    inputLengthSide (data) {
      const clear = data.slice(0, -2)
      this.resultLength = Number(clear)
    }
  },
  data: () => ({
    stepLengthSample: '',
    stepLengthOttoman: '',
    dataOneSofa: [],
    cornerSofa: false,
    disabledBasket: true,
    resultWidth: 0,
    resultLength: 0,
    choiceOrderFabric: 0,
    getName: 'magnum2',
    fabricCollection: 'currently',
    priceOther: 0,
    otherCalculation: [],
    resultPrice: null,
    listPriceMaterials: [],
    listInputParameters: [],
    allDataFromAPI: {},
    listNewSofas: [],
    choiceIdFabric: '',
    stepLengthStraight: '',
    showModalCollection: false,
    stepLengthSide: '',
    flagSelectLeft: false,
    flagSelectRight: false,
    showModal: false,
    renderFabric: 0,
    withOutMachineItemSelected: true,
    withMachineItemSelected: false,
    choiceIdLegs: '',
    choiceIdSoftness: 'soft',
    steps: [
      '1400мм', '1600мм', '1800мм',
      '2000мм', '2200мм', '2400мм', '2600мм', '2800мм',
      '3000мм', '3200мм', '3400мм', '3600мм', '3800мм', '4000мм'
    ],
    stepsOttoman: [
      '600мм', '800мм', '1000мм',
      '12000мм', '1400мм', '1600мм', '1800мм', '2000мм'
    ],
    choiceSwitch: [
      {
        id: 1,
        name: 'Прямой диван',
        selected: true
      },
      {
        id: 2,
        name: 'Угловой диван',
        selected: false
      },
      {
        id: 3,
        name: 'Диван с оттоманкой',
        selected: false
      }
    ],
    choiceSwitchPillow: [
      {
        id: 1,
        name: '30x30',
        selected: false,
        price: 1000
      },
      {
        id: 2,
        name: '40x40',
        selected: false,
        price: 1500
      },
      {
        id: 3,
        name: '50x50',
        selected: false,
        price: 2000
      }
    ],
    arraySoftness: [
      {
        id: 'ultra',
        name: 'UltraSoft',
        selected: false
      },
      {
        id: 'middle',
        name: 'Средняя мягкость',
        selected: false
      },
      {
        id: 'soft',
        name: 'Нормальная мягкость ',
        selected: true
      }
    ],
    arrayLegs: [
      {
        id: 'legs01',
        img: '',
        src: require('@/assets/img/sofas/nozh.jpg'),
        selected: false
      },
      {
        id: 'legs02',
        img: '',
        src: require('@/assets/img/sofas/nozh.jpg'),
        selected: false
      },
      {
        id: 'legs03',
        img: '',
        src: require('@/assets/img/sofas/nozh.jpg'),
        selected: false
      },
      {
        id: 'legs04',
        img: '',
        src: require('@/assets/img/sofas/nozh.jpg'),
        selected: false
      },
      {
        id: 'legs05',
        img: '',
        src: require('@/assets/img/sofas/nozh.jpg'),
        selected: false
      },
      {
        id: 'legs06',
        img: '',
        src: require('@/assets/img/sofas/nozh.jpg'),
        selected: false
      },
      {
        id: 'legs07',
        img: '',
        src: require('@/assets/img/sofas/nozh.jpg'),
        selected: false
      },
      {
        id: 'legs08',
        img: '',
        src: require('@/assets/img/sofas/nozh.jpg'),
        selected: false
      }
    ],
    fabricInStock: [
      {
        id: 'TD_runa_10',
        active: false,
        name: 'Шенил',
        image: require('@/assets/img/fabric/fabric-1.png'),
        paw: true,
        clean: true
      },
      {
        id: 'TD_runa_6',
        active: false,
        name: 'Велюр',
        image: require('@/assets/img/fabric/fabric-2.png'),
        paw: true,
        clean: false
      },
      {
        id: 'TD_runa_5',
        active: false,
        name: 'Рогожка',
        image: require('@/assets/img/fabric/fabric-3.png'),
        paw: false,
        clean: true
      },
      {
        id: 'TD_runa_4',
        active: false,
        name: 'Рогожка',
        image: require('@/assets/img/fabric/fabric-4.png'),
        paw: false,
        clean: false
      }
    ],
    fabricForOrder: [
      {
        id: 'fabricForOrder01',
        active: false,
        name: 'Шенил',
        image: require('@/assets/img/fabric/fabric-1.png'),
        paw: false,
        clean: false
      },
      {
        id: 'fabricForOrder02',
        active: false,
        name: 'Велюр',
        image: require('@/assets/img/fabric/fabric-2.png'),
        paw: true,
        clean: true
      },
      {
        id: 'fabricForOrder03',
        active: false,
        name: 'Рогожка',
        image: require('@/assets/img/fabric/fabric-3.png'),
        paw: false,
        clean: false
      },
      {
        id: 'fabricForOrder04',
        active: false,
        name: 'Рогожка',
        image: require('@/assets/img/fabric/fabric-4.png'),
        paw: true,
        clean: false
      },
      {
        id: 'fabricForOrder05',
        active: false,
        name: 'Рогожка',
        image: require('@/assets/img/fabric/fabric-5.png'),
        paw: false,
        clean: false
      },
      {
        id: 'fabricForOrder06',
        active: false,
        name: 'Рогожка',
        image: require('@/assets/img/fabric/fabric-6.png'),
        paw: false,
        clean: true
      },
      {
        id: 'fabricForOrder07',
        active: false,
        name: 'Велюр',
        image: require('@/assets/img/fabric/fabric-7.png'),
        paw: false,
        clean: false
      },
      {
        id: 'fabricForOrder08',
        active: false,
        name: 'Велюр',
        image: require('@/assets/img/fabric/fabric-8.png'),
        paw: false,
        clean: false
      }

    ]
  })
}
</script>

<style lang="scss">
  .v-main-product-card {
    margin: 30px auto 0 auto;
    .alles-switch{
     padding-left: 30px;
      .theme--light.v-label--is-disabled {
        color: #D7B256;
    }
    }
    .v-legs-item-selected{
      border: 2px solid #D7B256;
    }
    .choice-collection{
      cursor: pointer;
      margin-right: 12px;
    }
    input, textarea {
          border: 0 !important;
        }
    .transform, .transform-1-5{
      transition: all 0.5s ease-out;
    }
    .transform-1-5:hover{
      transform: scale(1.3);
    }
    .transform:hover{
      transform: scale(2);
    }
    .input-soft{
      margin-top: 24px;
      text-transform: uppercase;
      color: #9D9D9D;
      cursor: pointer;
      padding: 6px;
      text-align: center;
      width: 160px;
    }
    .input-soft-selected{
      color: #D7B256;
    }
    .input-soft:hover{
         color: #D7B256;
       }
    .img-legs{
      width: 50px;
      height: 50px;
      display: inline-block;
      margin: 0 22px;
      cursor: pointer;
    }
    .number {
      color: #9D9D9D;
      margin: 0 8px 0 19px;
    }

    .v-main-product-card__one {
      margin: 9px 14px 0 0;
      width: 656px;
      height: 625px;
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover;

    }
    .under-image{
      width: 323px;
      height: 323px;
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover;
    }

    .v-main-product-card__two {
      margin: 0 0 0 0;
      padding-left: 3px;
      max-width: 460px;

      .v-m-card__two__tittle {
        padding: 0 0 0 0;
        margin: 0 0 0 13px;
        font-size: 14px;
        line-height: 149%;
        /* or 21px */
        text-transform: uppercase;
        color: #D7B256;
      }

      .v-m-card__two__price {
        margin: 17px 0 0 14px;
        font-size: 25px;
        line-height: 113.5%;
        /* or 28px */
        span {
          color: #9D9D9D;
          font-family: "Muller-Thin", sans-serif;
        }
      }

      .v-m-card__two__name {
        margin: 0 0 0 12px;
        font-family: "Muller-Thin", sans-serif;
        font-size: 30px;
        line-height: 113.5%;
        /* or 34px */
        color: #090909;
      }

      .v-m-card__two__quest {
        margin: 28px 0 0 16px;
        font-size: 13px;
        line-height: 20px;
        color: #888888;

        img {
          margin: 0 10px 0 0;
        }

        a {
          color: #090909;
          margin: 0 0 0 2px;
        }
      }

      .pale-btn {
        margin: 14px 0 0 14px;
        width: 233px;
        height: 45px;
        background: #F1F1F1;
        border: 1px solid #CF9E23;
        box-sizing: border-box;
        border-radius: 2px;
        font-size: 14px;
        line-height: 17px;
        text-transform: uppercase;

        color: #2C2C2C;

        img {
          margin: 0 10px -4px 0;
        }
      }

      .height-348{
        height: 348px;
      }

      .v-m-card__two__config {
        padding: 19px 0 0 0;
        margin: 20px 0 0 13px;
        width: 460px;

        background: #FBFBFD;
        border: 1px solid #DADADA;
        box-sizing: border-box;
        font-size: 17px;
        line-height: 136.5%;
        /* or 23px */
        .v-input {
          max-width: 394px;
        }
        .v-m-card__two__block {
          margin: 8px auto 0 auto;
          max-width: 394px;
          height: 90px;
          background: #FFFFFF;
          border: 1px solid #E1E1E1;
          box-sizing: border-box;

          .text {
            margin: 0 12px 0 31px;
            width: 231px;
            height: 38px;
            font-size: 14px;
            line-height: 136.5%;
          }
        }

      }
      .height-360 {height: 360px;}
      .height-126 {height: 126px;}

      .v-m-card__two__size {
        .input-ottomans{
          margin: 0 0 6px 0 ;
          .v-input {
            max-width: 96%;
          }
        }
        margin: 20px 0 0 14px;
        padding: 14px 0 0 0;
        width: 460px;
        background: #FBFBFD;
        border: 1px solid #DADADA;
        box-sizing: border-box;
        font-size: 17px;
        line-height: 136.5%;
        .item-pillow{
          width: 100px;
          margin: 3px 0;
        }

        .block-select {
          margin: 8px auto 0 auto;
          justify-content: center;

          .group {
            margin: 0 8px 0 8px;
          }
        }

        select {
          width: 187px;
          height: 50px;
          background: #FFFFFF;
          border: 1px solid #E1E1E1;
          box-sizing: border-box;
          padding-left: 20px;
          font-size: 14px;
          line-height: 136.5%;
        }

        label {
          font-weight: 300;
          font-size: 12px;
          line-height: 136.5%;
          /* or 16px */
          color: #A6A6A6;
        }
      }
    }
  }
  .margin-top-12{
                margin-top: -72px;
              }
  .margin-top-48{
    margin-top: -188px;
  }
  .margin-top-96{
    margin-top: -296px;
  }
  .v-main-product-card__third {
    margin-left: 16px;
    max-width: 656px;
    display: block;

    .margin-right-bottom {
      margin-right: 12px;
      margin-bottom: 12px;
    }

    .margin-right {
      margin-right: 7px;
    }

    .margin-left-bottom {
      margin-bottom: 7px;
    }

    img {
      display: inline-flex;
    }
  }

  .v-main-product-card__fourth {
    margin: 19px 0 0 0;
    padding-left: 30px;
    .big-btn{
      margin: 23px 0 0 0;
      width: 459px;
      height: 55px;
      background: #D7B256;
      border-radius: 2px;
      font-size: 18px;
      line-height: 136.5%;
      /* or 25px */
      text-align: center;
      text-transform: uppercase;
      color: #FFFFFF;
    }
    .v-legs{
      margin:  21px 0 0 0;
      padding: 13px 0 0 0;
      width: 458px;
      height: 138px;
      background: #FBFBFD;
      border: 1px solid #DADADA;
      box-sizing: border-box;
      font-size: 17px;
      line-height: 136.5%;
    }
    .v-machine{
      margin: 21px 0 0 0;
      padding: 13px 0 20px 0;
      width: 458px;
      background: #FBFBFD;
      border: 1px solid #DADADA;
      box-sizing: border-box;
      font-size: 17px;
      line-height: 136.5%;
      .row-machine{
        margin: 15px 0 0 0;
        .v-machine-item{
          margin: 0 38px 0 19px;
          padding-bottom: 6px;
          cursor: pointer;
          img{
            margin: 0 7px 0 0;
          }
        }
        .v-machine-item-selected {
         border-bottom: 2px solid #D7B256;
        }
      }
    }

    .fabric {
      .choice-vertical{
        position: absolute;
        bottom: 3px;
        right: 4px;
      }
      .resize {
        width: 94px;
      }

      .for-order {
        padding: 25px 0 22px 28px !important;
      }

      padding-top: 14px;
      width: 460px;
      background: #FBFBFD;
      border: 1px solid #DADADA;
      box-sizing: border-box;
      font-size: 17px;
      line-height: 136.5%;

      .in-stock {
        padding-left: 17px;
        vertical-align: center;
        max-width: 458px;
        height: 34px;
        background: #EBF0F5;
        font-size: 14px;
        line-height: 136.5%;
        /* or 19px */
        color: #797979;

        a {
          color: #0D0C0C;
          margin: 0 0 0 36px;
        }
      }

      .choice-in-stock {
        padding: 13px 0 20px 28px;
        width: 458px;
        position: relative;

        .card {
          position: relative;
          margin: 0 29px 5px 0;
          cursor: pointer;

          .fabric-active {
            z-index: 100;
            position: absolute;
            top: -4px;
            right: -3px;
          }

          .fabric-icons {
            z-index: 101;
            position: absolute;
            top: -6px;
            right: -14px;
          }

          .card-item {

            font-size: 13px;
            line-height: 136.5%;
            /* or 18px */
            color: #797979;

          }

        }
      }

      .main-filter {
        margin: -11px 0px 0 5px;
        cursor: pointer;
        .icon-filter {
          font-family: Muller-Thin, sans-serif;
          font-style: normal;
          font-size: 11px;
          line-height: 136.5%;
          /* identical to box height, or 15px */
          text-transform: uppercase;
          color: #000000;
        }
      }

    }
  }
</style>
