<template>
  <div>
    <v-row class="v-sofas-gallery">
      <div class="v-sofas-gallery-card"
           :key="i"
           v-for="(item, i) in  getSofas"
           :class="{'margin-middle': i===1 || i===4 || i === 7}"
      >
        <router-link :to="{ path: '/one-sofa', query: { sofa: item.slug }}">
        <div class="item-sofas" @click="callPageSofas(item.slug)"
             :style="{ backgroundImage: 'url(' + item.image + ')' }">
        </div>
        </router-link>
        <v-icon class="icon-heart "
        :class="{'heart-like': item.like}"
        >mdi-heart-outline</v-icon>
        <div class="discount-flag" v-if="item.discount">
          - {{item.amountDiscount}} %
        </div>
        <div class="v-sofas-gallery-old-price d-flex justify-end" v-if="item.discount">{{item.oldPrice}}&#8381;</div>
        <div class="opacity" v-if="!item.discount">&nbsp;_</div>
        <div class="d-flex justify-space-between v-sofas-gallery-new-price-row "><div class="v-sofas-gallery-name">{{item.name}}</div>
          <div class="v-sofas-gallery-new-price" :class="{'red-price':item.discount }">от {{item.newPrice}}&#8381; </div></div>
        <div class="d-flex v-sofas-gallery-submenu justify-space-between"  >
          <div class="d-block  card-sub">
            <div>Материал</div>
            <span>{{item.fabric}}</span>
          </div>
          <div class="d-block  card-sub">
            <div>Механизм</div>
            <span v-if="item.mechanism">С механизмом</span>
            <span v-if="!item.mechanism">Без механизма</span>
          </div>
          <div class="d-block  card-sub">
            <div>Фурнитура</div>
            <span>{{item.fittings}}</span>
          </div>
        </div>
      </div>

    </v-row>
  <v-row class="v-my-pagination text-center justify-center">
    <v-col cols="11">
      <div class="v-table__pagination ">
        <div class="page-table-left align-self-center"><i class="zmdi zmdi-chevron-left  icon-pagination"></i>
        </div>
        <div class="page d-flex justify-center"
             v-for="page in pages"
             :key="page"
             :class="{'link-page__selected': page === pageNumber}"
             @click="newClick(page)"
        > <div class="align-self-center justify-center">{{page}}</div>
        </div>
        <div class="page-table-right align-self-center"><i class="zmdi zmdi-chevron-right  icon-pagination"></i>
        </div>
      </div>
    </v-col>
  </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'v-sofas-gallery',
  props: ['getNumberPage'],
  computed: {
    ...mapGetters([
      'ALL_SOFAS',
      'SET_FIRST_PAGE',
      'SET_ALL_SOFAS'
    ]),
    getSofas () {
      return this.arraySofas
    },
    pages () {
      const num = Math.ceil(parseInt(this.allPages) / 9)
      return num > 0 ? num : 1
    }
  },
  data: () => ({
    arraySofas: [],
    firstPages: 1,
    step: 9,
    pageNumber: 1,
    allPages: 21,
    byPage: 1
  }),
  methods: {
    ...mapActions([
      'GET_JSON_FROM_API',
      'GET_DATA_FROM_API',
      'GET_ALL_SOFAS_FROM_API'
    ]),
    callPageSofas (name) {
      this.$emit('callPageSofa', {
        name: name
      })
    },
    newClick (data) {
      this.pageNumber = data
      this.arraySofas = []
      this.calcSofas(data)
    },
    calcSofas (page) {
      let i = (page - 1) * 9
      const rest = this.SET_ALL_SOFAS.length
      let last = i + 9
      if (last > rest) {
        last = rest
        i = last - 9
      }
      for (i; i < last; i++) {
        this.arraySofas.push(this.SET_ALL_SOFAS[i])
      }
    }
  },
  mounted () {
    this.GET_ALL_SOFAS_FROM_API().then(
      (res) => {
        if (res) {
          this.calcSofas(1)
        }
      }
    ).catch((error) => {
      alert(error)
      return error
    })
  }
}
</script>

<style lang="scss">
  #app{
    .v-my-pagination{
      margin: 0 auto 0  auto;
    }
    .v-table__pagination{
      display: inline-flex;
      .page{
        width: 44px;
        height: 44px;
        border-radius: 5px;
        margin: 0 4px;
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #D7B256;
      }
    }
    .page:hover {
      background: #D7B256;
      border: 1px solid #DCE1E7;
      box-sizing: border-box;
      border-radius: 5px;
      color: #FFFFFF;
    }
    .link-page__selected {
      background: #D7B256;
      color: #ffffff !important;
    }
    .icon-pagination{
      color: #D7B256;
      font-weight: 500;
      font-size: 40px !important;
      line-height: 28px !important;
    }
    .page-table-left{
      margin: 0  10px;
    }
    .page-table-right{
      margin: 0 10px ;
    }
  }
  .v-sofas-gallery {
    margin: 28px auto 0 auto;
    max-width: 1148px;
    .opacity{
      opacity: 0;
    }
    .item-sofas{
      width: 362px;
      height: 317px;
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover;
    }
    .margin-middle{
    margin: 0 30px 0 30px;
    }
    .red-price, {
      color: #B11414;
    }
    .v-sofas-gallery-card:hover
    {border: 1px solid #EFEFEF;
    box-sizing: border-box;
    box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.11);
      cursor: pointer;
    }

    .v-sofas-gallery-card{
      border: 1px solid #f9f9f9;
      margin-bottom: 97px;
      padding: 0 0 0 0;
      box-sizing: border-box;
      display: inline-block;
      position: relative;
      width: 361px;
      height: 472px;
      .icon-heart{
        position: absolute;
        font-size: 28px;
        top: 8px;
        right: 10px;
        color: #FFFFFF;
      }
      .heart-like{
        color: #B11414;
      }
      .discount-flag{
        width: 77px;
        height: 44px;
        background: #D7B256;
        color: #FFFFFF;
        position: absolute;
        top: 0;
        left: 0;
        font-size: 18px;
        line-height: 18px;
        text-align: center;
        padding: 14px 0;
      }
      .v-sofas-gallery-old-price{
        padding: 8px 25px 0 0;
      font-size: 15px;
      line-height: 15px;
      color: #CDCDCD;
        text-align: right;
        text-decoration: line-through;
    }
      .v-sofas-gallery-new-price-row {
        margin: 0px 28px 0 31px;
        .v-sofas-gallery-new-price{
          font-size: 20px;
          line-height: 20px;
        }
        .v-sofas-gallery-name{
          font-size: 20px;
          line-height: 20px;
          color: #8D8D8D;
        }
      }

      .v-sofas-gallery-submenu{
        margin: 32px -6px 0 25px;
       font-size: 12px;
      line-height: 20px;
      /* or 167% */
      color: #B9B9B9;
        span{
          color: #090909;
          font-size: 14px;
          line-height: 12px;
        }
        .card-sub{
          width: 99px;
        }
    }

    }

  }

</style>
