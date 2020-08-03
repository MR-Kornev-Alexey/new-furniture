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
        <v-col md="1">
          <img alt="logo" src="../../assets/img/svg/logo.svg">
        </v-col>
        <v-col md="10">
          <div class="d-flex">
            <div :key="i"
                             v-for="(item, i) in mainMenu">
              {{item.name}}
            </div>
            <img alt="Search" src="../../assets/img/svg/search.svg" style="height: 17px">
            <img alt="Search" src="../../assets/img/svg/shopping-bag.svg" style="height: 17px">
          </div>
          <div class="d-flex">
            <div :key="i"
                             v-for="(item, i) in subMenu">
              {{item.name}}
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
        id: 0,
        name: 'Загрузка проекта',
        dropdown: false
      },
      {
        id: 1,
        name: 'Доставка и оплата',
        dropdown: false
      },
      {
        id: 2,
        name: 'О производстве',
        dropdown: true
      },
      {
        id: 3,
        name: 'Блог',
        dropdown: true
      },
      {
        id: 4,
        name: 'Портфолио',
        dropdown: true
      },
      {
        id: 5,
        name: 'Контакты',
        dropdown: true
      }
    ],
    subMenu: [
      {
        id: 0,
        name: 'Диваны'
      },
      {
        id: 1,
        name: 'Кровати'
      },
      {
        id: 2,
        name: 'Детская мебель'
      },
      {
        id: 3,
        name: 'Кресла'
      },
      {
        id: 4,
        name: 'Тумбы'
      }
    ]
  })
}
</script>

<style scoped>

</style>
