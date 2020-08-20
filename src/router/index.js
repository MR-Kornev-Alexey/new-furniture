import Vue from 'vue'
import VueRouter from 'vue-router'
import vMainPage from '../components/v-main-page'
import vMainProduct from '../components/main-product'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: vMainPage
  },
  {
    path: '/product',
    name: 'v-main-product',
    component: vMainProduct
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
