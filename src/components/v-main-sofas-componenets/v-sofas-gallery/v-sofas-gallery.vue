<template>
    <v-row class="v-sofas-gallery">
      <div class="v-sofas-gallery-card"
           :key="i"
           v-for="(item, i) in  arrowItem"
           :class="{'margin-middle': i===1 || i===4 || i === 7}"
      >
        <img :src="item.image" :alt="item.name">
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
</template>

<script>
export default {
  name: 'v-sofas-gallery',
  data: () => ({
    arrowItem: [
      {
        name: 'Aprilia',
        image: require('@/assets/img/sofas/item-sofa-1.png'),
        amountDiscount: 20,
        discount: true,
        oldPrice: 90000,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: true,
        fittings: 'Дерево',
        like: false
      },
      {
        name: 'Aprilia',
        image: require('@/assets/img/sofas/item-sofa-2.png'),
        discount: false,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: true,
        fittings: 'Дерево',
        like: true
      },
      {
        name: 'Aprilia',
        image: require('@/assets/img/sofas/item-sofa-3.png'),
        discount: false,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: false,
        fittings: 'Дерево',
        like: false
      },
      {
        name: 'Aprilia',
        image: require('@/assets/img/sofas/item-sofa-4.png'),
        amountDiscount: 10,
        discount: true,
        oldPrice: 90000,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: false,
        fittings: 'Дерево',
        like: false
      },
      {
        name: 'Aprilia',
        image: require('@/assets/img/sofas/item-sofa-1.png'),
        amountDiscount: 18,
        discount: true,
        oldPrice: 90000,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: false,
        fittings: 'Дерево',
        like: false
      },
      {
        name: 'Aprilia',
        image: require('@/assets/img/sofas/item-sofa-2.png'),
        discount: true,
        amountDiscount: 20,
        oldPrice: 90000,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: false,
        fittings: 'Дерево',
        like: true
      },
      {
        name: 'Aprilia',
        image: require('@/assets/img/sofas/item-sofa-3.png'),
        discount: false,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: true,
        fittings: 'Дерево',
        like: false
      },
      {
        name: 'Aprilia',
        image: require('@/assets/img/sofas/item-sofa-4.png'),
        discount: false,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: true,
        fittings: 'Дерево',
        like: false
      },
      {
        name: 'Aprilia',
        image: require('@/assets/img/sofas/item-sofa-3.png'),
        discount: true,
        amountDiscount: 21,
        oldPrice: 90000,
        newPrice: 60000,
        fabric: 'Текстиль, кожа',
        mechanism: true,
        fittings: 'Дерево',
        like: false
      }

    ]
  })
}
</script>

<style lang="scss">
  .v-sofas-gallery {
    margin: 28px auto 0 auto;
    max-width: 1148px;
    .opacity{
      opacity: 0;
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
