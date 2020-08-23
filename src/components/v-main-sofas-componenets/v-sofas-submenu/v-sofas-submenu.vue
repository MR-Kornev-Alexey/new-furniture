<template>
  <v-row class="v-sofas-submenu">
    <v-flex class="d-flex justify-space-between">
      <div class="v-sofas-submenu-line d-flex">
        <div :class="[{ 'selected': item.selected },
                          {'id-1': item.id === 0},
                          {'id-2': item.id === 1},
                          {'id-3': item.id === 2},
                           {'id-4': item.id === 3},
                           {'id-5': item.id === 4},
                            {'id-6': item.id === 5},
                          ]"
             :key="i"
             class="v-sofas-submenu-tittle d-flex align-self-center"
             v-for="(item, i) in furniture"
        >
          {{item.name}}
          <div>{{item.number}}</div>
        </div>
      </div>
      <div class="d-flex align-self-center div-btn-filter">
        <button class="btn-filter d-flex justify-center">
          <img class="align-self-center" alt="filter" src="../../../assets/img/svg/toggles.svg"> <span class="align-self-center"> Фильтр</span></button>
      </div>
    </v-flex>
  </v-row>
</template>

<script>
export default {
  name: 'v-sofas-submenu',
  data: () => ({
    furniture: [
      {
        id: 0,
        name: 'Диваны',
        selected: true,
        number: 20
      },
      {
        id: 1,
        name: 'Кровати',
        selected: false,
        number: 16
      },
      {
        id: 3,
        name: 'Кресла',
        selected: false,
        number: 5
      },
      {
        id: 4,
        name: 'Стулья',
        selected: false,
        number: 6
      },
      {
        id: 5,
        name: 'Пуфы',
        selected: false,
        number: 4
      },
      {
        id: 6,
        name: 'Консоли',
        selected: false,
        number: 8
      }
    ]
  })
}
</script>

<style lang="scss">
  .v-sofas-submenu {
    margin: 76px auto 0 auto;
    max-width: 1148px;

    .btn-filter {
      width: 166px;
      height: 49px;
      background: #D7B256;
      color: #FFFFFF;
      text-transform: uppercase;
      img{
        margin-right: 10px;
      }
      }

    .v-sofas-submenu-tittle {
      margin: 0 0 0 0;
      font-size: 14px;
      line-height: 14px;
      /* identical to box height */
      text-align: center;
      text-transform: uppercase;
      color: #8E8E8E;

      div {
        margin-left: 10px;
      }
    }

    .selected {
      color: #090909;
    }

    .id-1 {
      margin: 0 47px 0 2px;
    }

    .id-2 {
      margin: 0 47px 0 0;
    }

    .id-3 {
      margin: 0 50px 0 0;
    }

    .id-4 {
      margin: 0 52px 0 0;
    }

    .id-5 {
      margin: 0 56px 0 0;
    }

    .id-6 {
      margin: 0 42px 0 0;
    }

  }
</style>
