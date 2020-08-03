<template>
  <v-card
    class="mx-auto overflow-hidden"
    height="100vh"
  >
    <v-app-bar
      color="white"
      light

    >
      <v-app-bar-nav-icon @click="drawer = true" v-if="$vuetify.breakpoint.smOnly"></v-app-bar-nav-icon>
      <v-row class="d-flex justify-center">
        <v-col class="d-flex justify-end pr-2" md="3">
          <img alt="logo" src="../../assets/img/svg/logo.svg">
        </v-col>
        <v-col class="main-nav" md="9">
          <div class="d-flex">
            <div :class="[
              { 'margin-left-0': item.left0 },
              { 'margin-left-50': item.left50 },
              { 'margin-left-42': item.left42}
            ]"
                 :key="i"
                 v-for="(item, i) in mainMenu">
              {{item.name}}
            </div>
            <div class="nav-icons d-flex">
              <div>
                <img alt="Search" src="../../assets/img/svg/search.svg" style="height: 17px">
              </div>
              <div class="shopping-bag">
                <img  alt="bag" src="../../assets/img/svg/shopping-bag.svg" style="height: 17px">
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
           <div class="d-block nav-phone justify-end">
            <div class=" text-right">+7 (495) 792-0668</div>
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
        left50: true,
        name: 'Доставка и оплата',
        dropdown: false
      },
      {
        left42: true,
        name: 'О производстве',
        dropdown: true
      },
      {
        left42: true,
        name: 'Блог',
        dropdown: true
      },
      {
        left42: true,
        name: 'Портфолио',
        dropdown: true
      },
      {
        left50: true,
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

<style scoped lang="scss">

  .main-nav {
    padding-left: 36px;
  }
  .sub-nav {
    margin-top: 34px;

    .sub-nav__menu{
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
  .margin-left-42{
    margin-left: 50px;
  }
  .margin-left-62{
    margin-left: 62px;
  }
  .nav-icons{
    margin-left: 196px;
    .shopping-bag{
      margin-left: 40px;
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
    margin-left: 290px;
    .nav-phone__sub{
      font-size: 12px;
      line-height: 14px;
    }
  }
</style>
