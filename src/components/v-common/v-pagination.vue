<template>
  <section class="v-sofas-pagination">
    <v-row class="v-my-pagination text-center justify-center">
      <v-col cols="11">
        <div class="v-table__pagination ">
          <div class="page-table-left align-self-center"><i class="zmdi zmdi-chevron-left  icon-pagination"></i>
          </div>
          <div class="page d-flex justify-center"
               v-for="page in pages"
               :key="page"
               :class="{'link-page__selected': page === pageNumber}"
               @click="pageClick(page)"
          > <div class="align-self-center justify-center">{{page}}</div>
          </div>
          <div class="page-table-right align-self-center"><i class="zmdi zmdi-chevron-right  icon-pagination"></i>
          </div>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'v-pagination',
  data () {
    return {
      linksPerPage: 9,
      pageNumber: 1,
      allPages: 21,
      byPage: 1
    }
  },
  computed: {
    pages () {
      const num = Math.ceil(parseInt(this.allPages) / 10)
      return num > 0 ? num : 1
    }
  },
  methods: {
    ...mapActions([
      'SEND_NUMBER_TO_STORE'
    ]),
    pageClick (page) {
      this.pageNumber = page
    }
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

</style>
