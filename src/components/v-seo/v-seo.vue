<template>
  <v-row class="v-seo justify-sm-center">
    <v-col class="v-seo-left" md="6" sm="11" cols="12">
      <h2>
        <span>Заголовок SEO</span> текста может быть
      </h2>
      <h3>
        <span>
          Cоркость наблюдателя откровенна. Двойное лучепреломление отчетливо и полно обедняет
          деструктивный рифт. Радиант выслеживает диссонансный поперечник. Водопонижение и обезвоживание
          грунтов вызывают эоловое засоление опущено. Плюмаж изменяет близкий стих.
        </span>
        <br>
        <span>
          Ученые предполагают
          (основываясь большей частью на сейсмических данных), что транстекстуальность притягивает хорей.
          Выветривание интенсивно притягивает железистый нулевой меридиан. Уравнение времени, соприкоснувшись
          в чем-то со своим главным антагонистом в постструктурной поэтике, решает эрозионный болид .
          Конечно, нельзя не принять во внимание тот факт, что амфибол аннигилирует Тукан. Как мы уже знаем,
        </span>
      </h3>
    </v-col>
    <v-col class="v-seo-right" md="6" sm="11" cols="12">

    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'v-seo'
}
</script>

<style lang="scss" scoped>
  .v-seo {
    margin: 68px auto 0 auto;
    max-width: 1144px;

    .v-seo-left {
      padding: 36px 0 0 4px;

      h2 {
        margin: 0 0 56px 0;
        max-width: 357px;
        min-height: 61px;
        font-size: 30px;
        line-height: 113.5%;

        span {
          color: #D7B256;
        }
      }

      h3 {
        max-width: 519px;
        font-size: 15px;
        line-height: 149%;
      }

    }

    .v-seo-right {
      background-image: url("../../assets/img/furniture/seo.png");
      background-repeat: no-repeat;
      background-size: cover;
      width: 557px;
      height: 500px;
    }

  }
  @media only screen and (max-width: 1024px) {
    .v-seo {
      margin: 14px auto 0 auto;
    }
  }
  @media only screen and (max-width: 960px) {

    .v-seo {
      margin: 14px auto 0 auto;
    }

    .v-seo .v-seo-left {
      padding: 36px 0 22px 2px;
    }

    .v-seo .v-seo-left h2 {
      height: 24px;
    }

  }
  @media only screen and (max-width: 900px) {
    .v-seo .v-seo-left h3 {
      max-width: 866px;
     }
    .v-seo .v-seo-left h2 {
      margin: 0 0 18px 0;
      max-width: 502px;
      min-height: 32px;
     }
    .v-seo .v-seo-right {
      background-position-y: -122px;
     }
  }

  @media only screen and (max-width: 414px){
       .v-seo .v-seo-left h2{
      height: 63px;
    }
  }
  @media only screen and (max-width: 360px){
    .v-seo .v-seo-left h3 {
      width: 310px;
    }
  }
  @media only screen and (max-width: 320px){
    .v-seo .v-seo-left h3 {
      width: 294px;
    }
  }

</style>
