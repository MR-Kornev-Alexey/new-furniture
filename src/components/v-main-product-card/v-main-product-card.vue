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
            <div class="text align-self-center">Левый двухкомпонентный шезлонг в разрезе</div>
          </div>
          <div class="v-m-card__two__block d-flex justify-center"><img alt="pattern Sofa"
                                                                       src="../../assets/img/svg/pattern-sofa.svg">
            <div class="text align-self-center">Левый двухкомпонентный шезлонг в разрезе</div>
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
            <div
              :key="i"
              v-for="(item, i) in fabricInStock">
              <div class="d-block card ">
                <div class="fabric-icons d-block">
                  <div v-if="item.paw" style="height: 26px"><img  src="../../assets/img/svg/pow.svg" alt="animal"></div>
                  <div v-if="item.clean" style="height: 26px"><img  src="../../assets/img/svg/clean.svg" alt="clear"></div>

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
            <div class="align-self-center">На заказ (отправка через 6-9 недель)</div>
          </div>
        </div>
      </div>
    </div>
  </v-row>
</template>

<script>
export default {
  name: 'v-main-product-card',
  data: () => ({
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
    ]
  })
}
</script>

<style lang="scss">
  .v-main-product-card {
    margin: 30px auto 0 auto;

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
    padding-left: 32px;

    .fabric {
      .resize {
        width: 94px;
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
      }
      .choice-in-stock {
       padding: 13px 0 0 28px;
        .card{
          position: relative;
          margin-right: 29px;
          .fabric-icons{
            position: absolute;
            top: -6px;
            right: -14px;
           }
          .card-item{

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
