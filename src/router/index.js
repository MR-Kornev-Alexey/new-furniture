import Vue from 'vue'
import VueRouter from 'vue-router'
import vMainPage from '../components/v-main-page'
import vMainProduct from '../components/v-main-product'
import vMainContacts from '../components/v-main-contacts'
import vMainSofas from '../components/v-main-sofas'
import vMainBasket from '../components/v-basket'
import oneSofas from '../components/v-one-sofas'
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
  },
  {
    path: '/contacts',
    name: 'v-main-contacts',
    component: vMainContacts
  },
  {
    path: '/sofas',
    name: 'v-main-sofas',
    component: vMainSofas
  },
  {
    path: '/basket',
    name: 'v-main-basket',
    component: vMainBasket
  },
  {
    path: '/one-sofa',
    name: 'v-one-sofas',
    component: oneSofas
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
