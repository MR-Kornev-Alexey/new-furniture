<template>
  <v-row class="v-main-product-card d-block">
    <div class="d-flex justify-center">
      <div class="v-main-product-card__one">
        <img alt="sofa" class="" src="../../assets/img/main-product/main-product-sofa-.png">
      </div>
      <div class="v-main-product-card__two">
        <div class="v-m-card__two__tittle">Диван</div>
        <div class="v-m-card__two__price"><span>от</span> 55 000 &#8381;</div>
        <div class="v-m-card__two__name">Florence bergamo light</div>
        <div class="v-m-card__two__quest d-flex align-content-center"><img alt="message"
                                                                           src="../../assets/img/svg/message-call.svg">Вопрос
          + ответ:
          <a href="#">см. 20 ответов</a></div>
        <button class="pale-btn"><img alt="credit"
                                      src="../../assets/img/svg/discount.svg"><span>купить в рассрочку</span></button>
        <div class="v-m-card__two__config">
          <div class="d-flex">
            <div class="number">1.</div>
            Выберите конфигурацию
          </div>
          <div class="v-m-card__two__block d-flex justify-center"><img alt="pattern Sofa"
                                                                       src="../../assets/img/svg/pattern-sofa.svg">
            <div class="text align-self-center">Левосторонний диван</div>
          </div>
          <div class="v-m-card__two__block d-flex justify-center"><img alt="pattern Sofa"
                                                                       src="../../assets/img/svg/pattern-sofa.svg">
            <div class="text align-self-center">Правосторонний диван</div>
          </div>
        </div>
        <div class="v-m-card__two__size">
          <div class="d-flex">
            <div class="number">2.</div>
            Выберите размер
          </div>
          <div class="d-flex block-select">
            <div class="d-block group">
              <div>
                <label for="width-item">Ширина</label>
              </div>
              <div>
                <select id="width-item" name="width">
                  <option value="size-1">1400 мм</option>
                  <option value="size-1">1500 мм</option>
                  <option value="size-1">1600 мм</option>
                  <option value="size-1">1700 мм</option>
                </select>
              </div>
            </div>
            <div class="d-block group">
              <div>
                <label for="length-item">Длина</label>
              </div>
              <div><select id="length-item" name="length">
                <option value="size-1">900 мм</option>
                <option value="size-1">1000 мм</option>
                <option value="size-1">1100 мм</option>
                <option value="size-1">1200 мм</option>
              </select>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="d-flex justify-center">
      <div class="v-main-product-card__third ">
        <img alt="furniture" class="margin-right-bottom" src="../../assets/img/main-product/image-1.jpg">
        <img alt="furniture" class="margin-left-bottom" src="../../assets/img/main-product/image-2.jpg">
        <img alt="furniture" class="margin-right" src="../../assets/img/main-product/image-3.jpg">
        <img alt="furniture" src="../../assets/img/main-product/image-4.jpg">
      </div>
      <div class="v-main-product-card__fourth">
        <div class="fabric">
          <div class="d-flex">
            <div class="number">3.</div>
            Выберите текстуру и цвет ткани
            <div class="resize"></div>
            <div class="d-block text-center main-filter align-self-start">
              <img alt="filter" src="../../assets/img/svg/fulter.svg">
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
              :key="i"
              v-for="(item, i) in fabricInStock">
              <div class="d-block card ">
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
          <div class="in-stock d-flex ">
            <div class="align-self-center">На заказ (отправка через 6-9 недель) <a href="#">Выбрать коллекцию</a></div>
          </div>
          <div class="choice-in-stock for-order">
            <div
              :key="i"
              style=" display: inline-flex" v-for="(item, i) in fabricForOrder">
              <div class="d-block card ">
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
            <div class="number">4.</div>
            Механизм
          </div>
          <div class="d-flex row-machine">
            <div class="d-flex v-machine-item"><img  class="d-flex  align-self-center" src="../../assets/img/svg/sofa-m.svg" alt="sofa without"> Без механизма</div>
            <div class="d-flex v-machine-item"><img class="d-flex align-self-center" src="../../assets/img/svg/sofa-yes.svg" alt="sofa without"> С механизмом</div>
          </div>

        </div>
        <div class="v-legs">
          <div class="d-flex">
            <div class="number">5.</div>
            Ножки
          </div>
          <div class="choice-in-stock text-center justify-center" >
            <div  :key="i"
              v-for="(item, i) in arrayLegs" style="display: inline-block">
                <div>
                  <img class="img-legs transform" :src="item.src" alt="leg">
                </div>
           </div>
          </div>
        </div>
        <div class="v-legs">
          <div class="d-block">
            <div class="d-flex"> <div class="number">6.</div>
              Выберите мягкость дивана</div>
            <div class="d-flex justify-space-around">
              <div class="input-soft">
                Мягкий
              </div>
              <div class="input-soft">
                Средний
              </div>
              <div class="input-soft">
                Жесткий
              </div>
            </div>
          </div>
        </div>
        <button class="big-btn">Добавить в корзину</button>
      </div>
    </div>
  </v-row>
</template>

<script>
export default {
  name: 'v-main-product-card',
  data: () => ({
    arrayLegs: [
      {
        id: '',
        img: '',
        src: require('@/assets/img/sofas/nozh.jpg'),
        selected: false
      },
      {
        id: '',
        img: '',
        src: require('@/assets/img/sofas/nozh.jpg'),
        selected: false
      },
      {
        id: '',
        img: '',
        src: require('@/assets/img/sofas/nozh.jpg'),
        selected: false
      },
      {
        id: '',
        img: '',
        src: require('@/assets/img/sofas/nozh.jpg'),
        selected: false
      },
      {
        id: '',
        img: '',
        src: require('@/assets/img/sofas/nozh.jpg'),
        selected: false
      },
      {
        id: '',
        img: '',
        src: require('@/assets/img/sofas/nozh.jpg'),
        selected: false
      },
      {
        id: '',
        img: '',
        src: require('@/assets/img/sofas/nozh.jpg'),
        selected: false
      },
      {
        id: '',
        img: '',
        src: require('@/assets/img/sofas/nozh.jpg'),
        selected: false
      }
    ],
    fabricInStock: [
      {
        name: 'Шенил',
        image: require('@/assets/img/fabric/fabric-1.png'),
        paw: true,
        clean: true
      },
      {
        name: 'Велюр',
        image: require('@/assets/img/fabric/fabric-2.png'),
        paw: true,
        clean: false
      },
      {
        name: 'Рогожка',
        image: require('@/assets/img/fabric/fabric-3.png'),
        paw: false,
        clean: true
      },
      {
        name: 'Рогожка',
        image: require('@/assets/img/fabric/fabric-4.png'),
        paw: false,
        clean: false
      }
    ],
    fabricForOrder: [
      {
        active: true,
        name: 'Шенил',
        image: require('@/assets/img/fabric/fabric-1.png'),
        paw: false,
        clean: false
      },
      {
        active: false,
        name: 'Велюр',
        image: require('@/assets/img/fabric/fabric-2.png'),
        paw: true,
        clean: true
      },
      {
        active: false,
        name: 'Рогожка',
        image: require('@/assets/img/fabric/fabric-3.png'),
        paw: false,
        clean: false
      },
      {
        active: false,
        name: 'Рогожка',
        image: require('@/assets/img/fabric/fabric-4.png'),
        paw: true,
        clean: false
      },
      {
        active: false,
        name: 'Рогожка',
        image: require('@/assets/img/fabric/fabric-5.png'),
        paw: false,
        clean: false
      },
      {
        active: false,
        name: 'Рогожка',
        image: require('@/assets/img/fabric/fabric-6.png'),
        paw: false,
        clean: true
      },
      {
        active: false,
        name: 'Велюр',
        image: require('@/assets/img/fabric/fabric-7.png'),
        paw: false,
        clean: false
      },
      {
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
    .transform{
      transition: all 0.5s ease-out;
    }
    .transform:hover{
      transform: scale(3);
    }
    .input-soft{
      margin-top: 24px;
      text-transform: uppercase;
      color: #D7B256;
      cursor: pointer;
    }
    .input-soft:hover{
         color: #9D9D9D;
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
      max-width: 656px;
      height: 625px;
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

      .v-m-card__two__config {
        padding: 19px 0 0 0;
        margin: 20px 0 0 13px;
        width: 460px;
        height: 256px;
        background: #FBFBFD;
        border: 1px solid #DADADA;
        box-sizing: border-box;
        font-size: 17px;
        line-height: 136.5%;
        /* or 23px */

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

      .v-m-card__two__size {
        margin: 21px 0 0 14px;
        padding: 14px 0 0 0;
        width: 460px;
        height: 134px;
        background: #FBFBFD;
        border: 1px solid #DADADA;
        box-sizing: border-box;
        font-size: 17px;
        line-height: 136.5%;

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

  .v-main-product-card__third {
    margin: 8px 0 0 21px;
    max-width: 656px;
    display: block;

    .margin-right-bottom {
      margin-right: 10px;
      margin-bottom: 6px;
    }

    .margin-right {
      margin-right: 10px;
    }

    .margin-left-bottom {
      margin-bottom: 6px;
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
          cursor: pointer;
          img{
            margin: 0 7px 0 0;
          }
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

          .fabric-active {
            position: absolute;
            top: -4px;
            right: -3px;
          }

          .fabric-icons {
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
