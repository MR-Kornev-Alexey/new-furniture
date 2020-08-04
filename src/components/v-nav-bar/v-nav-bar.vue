<template>
  <v-card
    class="mx-auto overflow-hidden"
      >
    <v-app-bar
      color="white"
      light

    >
      <v-app-bar-nav-icon @click="drawer = true" v-if="$vuetify.breakpoint.smOnly"></v-app-bar-nav-icon>
      <v-row class="d-flex justify-center">
        <v-col class="d-flex justify-end img-logo" md="3">
          <img alt="logo" src="../../assets/img/svg/logo.svg">
        </v-col>
        <v-col class="main-nav" md="9">
          <div class="d-flex main-nav__top">
            <div :class="[
              { 'margin-left-0': item.left0 },
              { 'margin-left-62': item.left62 },
              { 'margin-left-50': item.left50 },
              { 'margin-left-48': item.left48},
              { 'margin-left-42': item.left42},
              { 'margin-left-40': item.left40}
            ]"
                 :key="i"
                 v-for="(item, i) in mainMenu">
              {{item.name}}
            </div>
            <div class="nav-icons d-flex">
              <div class="nav-icons__search">
                <img alt="Search" src="../../assets/img/svg/search.svg" >
              </div>
              <div class="shopping-bag">
                <img  alt="bag" src="../../assets/img/svg/shopping-bag.svg" >
                <div class="shopping-bag__round d-flex justify-center align-content-center">
                  <div class="align-self-center">1</div>
                </div>
              </div>

            </div>

          </div>

          <div class="d-flex sub-nav ">
            <div class="d-flex sub-nav__menu">
              <div :key="i"
                   v-for="(item, i) in subMenu"
                   :class="[
              { 'margin-left-0': item.left0 },
              { 'margin-left-50': item.left50 },
              { 'margin-left-62': item.left62}
            ]"
              >
                {{item.name}}
              </div>
             </div>
           <div class="nav-phone text-center">
            <div class="nav-phone__num ">+7 (495) 792-0668</div>
             <div class="nav-phone__sub">Современная мебельная фабрика</div>
           </div>
          </div>

        </v-col>
      </v-row>
      <div>

      </div>

      <div>

      </div>
    </v-app-bar>

    <v-navigation-drawer
      absolute
      temporary
      v-model="drawer"
    >
      <v-list
        dense
        nav
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
          v-model="group"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: 'v-nav-bar',
  data: () => ({
    group: '',
    drawer: false,
    mainMenu: [
      {
        left0: true,
        name: 'Загрузка проекта',
        dropdown: false
      },
      {
        left48: true,
        name: 'Доставка и оплата',
        dropdown: false
      },
      {
        left40: true,
        name: 'О производстве',
        dropdown: true
      },
      {
        left62: true,
        name: 'Блог',
        dropdown: true
      },
      {
        left40: true,
        name: 'Портфолио',
        dropdown: true
      },
      {
        left48: true,
        name: 'Контакты',
        dropdown: true
      }
    ],
    subMenu: [
      {
        left0: true,
        name: 'Диваны'
      },
      {
        left62: true,
        name: 'Кровати'
      },
      {
        left50: true,
        name: 'Детская мебель'
      },
      {
        left50: true,
        name: 'Кресла'
      },
      {
        left50: true,
        name: 'Тумбы'
      }
    ]
  })
}
</script>

<style  lang="scss">
  .img-logo{
    padding-right: 30px;
    padding-bottom: 6px;
  }
  .main-nav {
    padding-left: 36px;
    .main-nav__top{
      padding-top: 6px;
    }
  }
  .sub-nav {
    margin-top: 34px;
    .sub-nav__menu{
      font-family: "MullerW00-Regular", sans-serif;
      margin-top: 10px;
      text-transform: uppercase;
    }
  }
  .margin-left-0{
    margin-left: 0;
  }
  .margin-left-50{
    margin-left: 50px;
  }
  .margin-left-48{
    margin-left: 48px;
  }
  .margin-left-42{
    margin-left: 50px;
  }
  .margin-left-40{
    margin-left: 40px;
  }
  .margin-left-62{
    margin-left: 62px;
  }
  .nav-icons{
    .nav-icons__search{
           img{
        height: 19px;
      }
    }
    margin-left: 193px;
    .shopping-bag{
      margin-left: 36px;
      position: relative;
      .shopping-bag__round{
         position: absolute;
        bottom: -4px;
        right: -4px;
        background-color:  #FDC94C;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        div{
          font-size: 11px;
          }
      }
    }

  }
  .nav-phone{
    margin-left: 240px;

    .nav-phone__sub{
      font-size: 12px;
      line-height: 14px;
    }
  }
  .nav-phone__num{
    font-family: "Akzidenz-Grotesk Pro", sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 1px;
    padding-left: 45px;
    }
</style>
