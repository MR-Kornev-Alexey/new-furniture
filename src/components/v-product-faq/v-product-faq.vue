<template>
  <div class=" v-product-faq" id="v-product-faq">
    <div class="faq-tittle">
      Вопросы и ответы
    </div>
    <div class="faq-form d-flex">
      <v-form
        class="d-flex"
        ref="form"
        v-model="valid"

      >
        <label class="input-text">
          <input placeholder="Опишите свой вопрос " type="text" v-model="faq">
        </label>
        <button
            class="btn-faq"
        >
          Отправить
        </button>
      </v-form>
    </div>
    <div class="row-all-cards">
      <div :key="i"
           class="card-faq "
           v-for="(item, i) in arrayFaq"
      >
        <div class="d-flex">
          <div class="info-ellipse">!</div>
          <div class="item-question align-self-center">{{item.question}}</div>
        </div>

        <div class="item-answer">{{item.answer}}</div>
        <div class="item-dataSend">{{item.dataSend}}</div>
      </div>
    </div>
    <div class="row one-more d-flex justify-center">
      <div class="col-md-6 d-flex justify-center text-center">
        <a href="#">Показать еще 10 вопросов по этому продукту</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-product-faq',
  data: () => ({
    faq: null,
    valid: '',
    arrayFaq: [
      {
        question: 'Каков уровень жесткости этого дивана?',
        answer: 'По шкале устойчивости от 1 до 5 (5 - самый твердый) мы оцениваем это на 3.',
        dataSend: 'Вопрос был отправлен 3.09.2019'
      },
      {
        question: 'Каков уровень жесткости этого дивана?',
        answer: 'Политическая система однозначно определяет пейзажный парк. Лек (L) равен 100 киндаркам, ' +
            'однако коневодство изящно притягивает системный социализм. Макрель поднимает кедровый стланик. ' +
            'Иначе говоря, полярный круг оформляет действующий вулкан Катмаи. Месторождение ураново-радиевых ' +
            'руд отражает современный архипелаг.',
        dataSend: 'Вопрос был отправлен 3.09.2019'
      },
      {
        question: 'Каков уровень жесткости этого дивана?',
        answer: 'Политическая система однозначно определяет пейзажный парк. Лек (L) равен 100 киндаркам, ' +
            'однако коневодство изящно притягивает системный социализм. Макрель поднимает кедровый стланик. ' +
            'Иначе говоря, полярный круг оформляет действующий вулкан Катмаи. Месторождение ураново-радиевых руд ' +
            'отражает современный архипелаг.',
        dataSend: 'Вопрос был отправлен 3.09.2019'
      },
      {
        question: 'Каков уровень жесткости этого дивана?',
        answer: 'По шкале устойчивости от 1 до 5 (5 - самый твердый) мы оцениваем это на 3.',
        dataSend: 'Вопрос был отправлен 3.09.2019'
      }
    ]
  })

}
</script>

<style lang="scss">
  .v-product-faq {
    margin: 86px auto 0 auto;
    max-width: 1140px;
    .one-more{
      margin: 15px 0 0 0;
      a{
        font-size: 15px;
        line-height: 136.5%;
       color: #040404;
      }
    }
    .row-all-cards {
      margin: 105px 0 0 0;

      .card-faq {
        display: inline-block;
        max-width: 557px;
        background: #FBFBFD;
        margin: 0 54px 54px 54px;
        padding: 0 0 0 0;
        vertical-align: top;
        .info-ellipse {
          margin: 0 21px 0 0;
          width: 29px;
          height: 29px;
          background: #FFFFFF;
          border: 1px solid #D7B256;
          box-sizing: border-box;
          border-radius: 50%;
          font-size: 17px;
          line-height: 29px;
          text-align: center;
        }

        font-size: 14px;
        line-height: 136.5%;

        .item-question {
          text-transform: uppercase;
          max-width: 455px;
        }

        .item-answer {
          margin: 19px 0 0 0;
          max-width: 455px;
        }

        .item-dataSend {
          margin: 19px 0 0 0;
          font-size: 12px;
          color: #9F9F9F;
        }
      }
    }

    .faq-tittle {
      padding: 0 0 0 5px;
      font-size: 30px;
      line-height: 113.5%;
      /* or 34px */
      color: #201F25;
    }

    .faq-form {
      margin: 58px 0 0 0;
      padding: 0 0 0 31px;

      .input-text {
        margin: 0 0 0 0;

        input {
          padding: 0 0 0 31px;
          width: 875px;
          height: 50px;
          background: #FFFFFF;
          border: 1px solid #797979;
          box-sizing: border-box;
        }
      }

      .btn-faq {
        margin-left: 14px;
        width: 205px;
        height: 50px;
        left: 1304px;
        top: 5401px;
        background: #D7B256;
        border-radius: 2px;
        font-size: 14px;
        line-height: 136.5%;
        /* or 19px */
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
      }
    }

  }

</style>
