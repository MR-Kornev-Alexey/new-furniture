<template>
    <section class="v-form-input d-block">
      <v-col>
        <h1 class="basket-h1">Оформление заказа</h1>
      </v-col>
       <v-col class="d-flex string-tittle">
        <div class="black-around text-center">
          1
        </div>
         <div class="contact-info align-self-center">
           Контактная информация
         </div>
      </v-col>
      <v-col class="contact-info__items">
        Как к вам обращаться
      </v-col>
      <div class="all-input">
        <v-col class="d-flex justify-start">
          <div class="contact-info__items__input">
            <v-text-field
              label="Фамилия"
              :rules="rules"
              hide-details="auto"
              class="form-input"
              v-model="surname"
            ></v-text-field>
          </div>
          <div class="contact-info__items__middle">
            <v-text-field
              label="Имя"
              :rules="rules"
              hide-details="auto"
              class="form-input"
              v-model="name"
            ></v-text-field>
          </div>
          <div>
            <v-text-field
              label="Отчество"
              hide-details="auto"
              class="form-input"
              v-model="patronymic"
            ></v-text-field>
          </div>
        </v-col>
        <v-col class="contact-info__phone d-flex">
          <div> Телефон </div>  <div class="contact-info__mail" >E-mail</div>
        </v-col>
        <v-col class="d-flex justify-start">
          <div class="contact-info__items__input">
            <v-text-field
              label="+7(XXX)XXX-XX-XX"
              :rules="rulesPhone"
              hide-details="auto"
              class="form-input"
              v-model="phone"
            ></v-text-field>
          </div>
          <div class="contact-info__items__middle">
            <v-text-field
              label="Электронная почта"
              :rules="rulesEmail"
              hide-details="auto"
              class="form-input"
              v-model="email"
            ></v-text-field>
          </div>
        </v-col>
      </div>
      <v-col class="d-flex  check-confirm">
        <input type="checkbox" id="scales" name="scales"
               checked v-model="checkboxConfirm" class="confirm-checkbox" @click="disabledBtn()">
        <label class="confirm-label" for="scales">Согласен на обработку персональных данных в соответствии с ФЗ от 27.07.2006 г. № 152-Ф3</label>
        <div>

        </div>
      </v-col>
      <v-col class="d-flex contact-delivery">
        <div class="black-around text-center">
          2
        </div>
        <div class=" contact-info align-self-center">
          Доставка
        </div>
      </v-col>
        <v-radio-group
          color="accent"
          v-model="radioRegions"
          @change="resultRadio()"
          row
        >
          <v-radio label="Доставка по Москве и Московской области" :value="smoscow"></v-radio>
          <v-radio label="Доставка в регионы" :value="regions"></v-radio>
        </v-radio-group>
      <v-col class="contact-info__items">
       Введите город/населенный пункт
      </v-col>
      <v-col class="d-flex justify-start ">
        <div class="city__items__input">
          <v-text-field
            label="Город/населенный пункт"
            :rules="rules"
            hide-details="auto"
            class="form-input"
            v-model="city"
          ></v-text-field>
        </div>
      </v-col>
      <v-col class="contact-info__phone d-flex">
        <div class="input-street"> Введите улицу  </div>
        <div class="input-house" > Дом </div>
        <div class="input-house" > Квартира  </div>
        <div class="input-entrance" > Подъезд  </div>
      </v-col>
      <v-col class="d-flex justify-start all-input">
        <div class="input-street">
          <v-text-field
            label="улица"
            :rules="rules"
            hide-details="auto"
            class="form-input"
            v-model="street"
          ></v-text-field>
        </div>
        <div class="input-house">
          <v-text-field
            label="дом"
            :rules="rulesHouse"
            hide-details="auto"
            class="form-input"
            v-model="house"
          ></v-text-field>
        </div>
        <div class="input-house">
          <v-text-field
            label="квартира"
            hide-details="auto"
            :rules="rulesHouse"
            class="form-input"
            v-model="flat"
          ></v-text-field>
        </div>
        <div class="input-entrance">
          <v-text-field
            label="подъезд"
            hide-details="auto"
            class="form-input"
            v-model="entrance"
          ></v-text-field>
        </div>
      </v-col>
      <v-col class="info__dev">
        Как вы хотите получить заказ ?
      </v-col>
      <v-col class="d-flex">
        <div id="delivery" class="justify-center text-center dev-item" @click="changeDel('delivery')">
          <div>
            <delivery/>
          </div>
          <div >
            Доставка <br>
            {{delivery}} рублей
          </div>

        </div>
        <div id="fix" class="justify-center text-center dev-item dev-middle" @click="changeDel('fix')">
          <div>
            <svg width="92" height="26" viewBox="0 0 92 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.7096 7.37109H9.3548C9.03825 7.37109 8.73469 7.49686 8.51085 7.72069C8.28702 7.94452 8.16126 8.24809 8.16126 8.56464L5.77417 13.9356L2.19354 14.5323C1.53709 14.5323 1 15.6662 1 16.3227V21.0968C1 21.4134 1.12577 21.7169 1.3496 21.9408C1.57343 22.1646 1.877 22.2904 2.19354 22.2904H5.77417" stroke-linejoin="round"/>
              <path d="M34.4194 22.2902H36.8065C37.1231 22.2902 37.4266 22.1644 37.6505 21.9406C37.8743 21.7168 38.0001 21.4132 38.0001 21.0966V13.3386" stroke-linejoin="round"/>
              <path d="M12.9351 22.3142H27.2576"  stroke-linejoin="round"/>
              <path d="M7.56454 8.56451L6.96777 6.17743C6.96777 5.86088 7.09354 5.55732 7.31737 5.33348C7.5412 5.10965 7.84477 4.98389 8.16132 4.98389H16.5161C16.8327 4.98389 17.1362 5.10965 17.3601 5.33348C17.5839 5.55732 17.7097 5.86088 17.7097 6.17743V8.56451" stroke="#CF9E23" stroke-linejoin="round"/>
              <path d="M30.5401 25.2979C32.3528 25.2979 33.8223 23.8284 33.8223 22.0156C33.8223 20.2029 32.3528 18.7334 30.5401 18.7334C28.7273 18.7334 27.2578 20.2029 27.2578 22.0156C27.2578 23.8284 28.7273 25.2979 30.5401 25.2979Z"  stroke-linejoin="round"/>
              <path d="M9.65285 25.2979C11.4656 25.2979 12.9351 23.8284 12.9351 22.0156C12.9351 20.2029 11.4656 18.7334 9.65285 18.7334C7.84012 18.7334 6.37061 20.2029 6.37061 22.0156C6.37061 23.8284 7.84012 25.2979 9.65285 25.2979Z"  stroke-linejoin="round"/>
              <path d="M1.59668 19.927H5.17731" stroke-linejoin="round"/>
              <path d="M17.71 7.39478V21.7173"  stroke-linejoin="round"/>
              <path d="M13.5317 15.7498H15.3221" stroke-linejoin="round"/>
              <path d="M17.71 16.3225V3.19354C17.71 2.877 17.8357 2.57343 18.0596 2.3496C18.2834 2.12577 18.587 2 18.9035 2H36.8066C37.1232 2 37.4268 2.12577 37.6506 2.3496C37.8744 2.57343 38.0002 2.877 38.0002 3.19354V16.3225" stroke-linejoin="round"/>
              <path d="M19.5 5.60425H36.8064" stroke-linejoin="round"/>
              <path d="M19.5 10.3787H36.8064"  stroke-linejoin="round"/>
              <path d="M19.5 15.1528H36.8064"  stroke-linejoin="round"/>
              <path d="M15.9192 13.3388C15.9192 13.4971 15.8563 13.6488 15.7444 13.7607C15.6324 13.8727 15.4807 13.9355 15.3224 13.9355H8.7579C8.59963 13.9355 8.44785 13.8727 8.33593 13.7607C8.22402 13.6488 8.16113 13.4971 8.16113 13.3388L9.95145 9.75815C9.95145 9.59987 10.0143 9.44809 10.1262 9.33618C10.2382 9.22426 10.3899 9.16138 10.5482 9.16138H15.3224C15.4807 9.16138 15.6324 9.22426 15.7444 9.33618C15.8563 9.44809 15.9192 9.59987 15.9192 9.75815V13.3388Z"  stroke-linejoin="round"/>
              <path d="M83.3858 11.9674L90.8042 4.549C90.8672 4.48614 90.9171 4.41147 90.9511 4.3293C90.9852 4.24713 91.0027 4.15906 91.0027 4.07011C91.0027 3.98116 90.9852 3.89308 90.9511 3.81091C90.9171 3.72874 90.8672 3.65407 90.8042 3.59121L88.4115 1.19851C88.3486 1.13557 88.274 1.08566 88.1918 1.0516C88.1096 1.01754 88.0216 1 87.9326 1C87.8437 1 87.7556 1.01754 87.6734 1.0516C87.5912 1.08566 87.5166 1.13557 87.4537 1.19851L80.0353 8.61698C80.0801 8.71001 80.1031 8.81206 80.1025 8.91534C80.1018 9.01862 80.0775 9.12035 80.0314 9.21279C79.9854 9.30523 79.9188 9.38591 79.8367 9.44864C79.7547 9.51138 79.6594 9.55451 79.5581 9.57473L78.8406 9.81501C78.7777 9.87787 78.7278 9.95254 78.6937 10.0347C78.6596 10.1169 78.6421 10.205 78.6421 10.2939C78.6421 10.3829 78.6596 10.4709 78.6937 10.5531C78.7278 10.6353 78.7777 10.7099 78.8406 10.7728L81.2333 13.1655C81.2962 13.2284 81.3708 13.2783 81.453 13.3124C81.5352 13.3465 81.6233 13.364 81.7122 13.364C81.8012 13.364 81.8892 13.3465 81.9714 13.3124C82.0536 13.2783 82.1282 13.2284 82.1911 13.1655L82.4314 12.448C82.4516 12.3467 82.4947 12.2514 82.5575 12.1694C82.6202 12.0873 82.7009 12.0208 82.7933 11.9747C82.8858 11.9286 82.9875 11.9044 83.0908 11.9037C83.1941 11.903 83.2961 11.926 83.3892 11.9708L83.3858 11.9674Z"  stroke-miterlimit="10"/>
              <path d="M87.6906 2.87378L81.7104 8.8573"  stroke-miterlimit="10"/>
              <path d="M89.129 4.30859L83.1455 10.2921"  stroke-miterlimit="10"/>
              <path d="M71.179 21.7787L70.2212 20.8209L72.1367 17.951L73.3348 17.2335L79.3149 11.25L80.7532 12.685L74.7697 18.6685L74.0523 19.8665L71.179 21.7787Z" stroke-miterlimit="10"/>
              <path d="M78.2893 11.7002L75.3687 8.77612"  stroke-miterlimit="10"/>
              <path d="M83.2236 16.6345L80.3232 13.7341"  stroke-miterlimit="10"/>
              <path d="M77.7612 6.3833L79.8697 8.49516" stroke-miterlimit="10"/>
              <path d="M78.4618 7.08049C79.115 5.48647 79.626 4.4204 77.5006 2.29842C77.0793 1.87834 76.5772 1.54808 76.0245 1.32762C75.4719 1.10715 74.8803 1.00104 74.2855 1.01575L76.0115 2.74179L75.1045 6.12612L71.7202 7.0331L70.001 5.32065C69.9886 5.91262 70.0958 6.50099 70.3162 7.05054C70.5366 7.60008 70.8656 8.09948 71.2836 8.51883C73.3921 10.6273 74.4784 10.1331 76.0725 9.47658" stroke-miterlimit="10"/>
              <path d="M82.5229 15.9473C81.8731 17.5379 81.3621 18.5973 83.484 20.7226C83.9034 21.1406 84.4028 21.4697 84.9524 21.6901C85.5019 21.9105 86.0903 22.0177 86.6822 22.0053L85.0239 20.3469L85.9343 16.9626L89.3186 16.0522L90.9837 17.7173C90.9984 17.1226 90.8923 16.5309 90.6719 15.9783C90.4514 15.4257 90.1211 14.9236 89.7011 14.5022C87.5926 12.3938 86.5367 12.8947 84.963 13.5275"  stroke-miterlimit="10"/>
              <path d="M54 7.5V20" />
              <path d="M60.5 13.75L48 13.75" />
            </svg>
          </div>
          <div >
            Доставка  + сборка<br>
            {{deliveryPlusFix}} рублей
          </div>

        </div>
        <div id="self" class="justify-center text-center dev-item" @click="changeDel('self')">
          <div>
            <svg width="21" height="30" viewBox="0 0 21 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 10.5C20 16.6026 12.685 29.0748 10.5 29.0748C8.315 29.0748 1 16.589 1 10.5C1 7.98044 2.00089 5.56408 3.78249 3.78249C5.56408 2.00089 7.98044 1 10.5 1C13.0196 1 15.4359 2.00089 17.2175 3.78249C18.9991 5.56408 20 7.98044 20 10.5Z"  stroke-linejoin="round"/>
              <path d="M10.4866 13.6805C12.4929 13.6805 14.1192 12.0562 14.1192 10.0524C14.1192 8.04868 12.4929 6.42432 10.4866 6.42432C8.48038 6.42432 6.854 8.04868 6.854 10.0524C6.854 12.0562 8.48038 13.6805 10.4866 13.6805Z"  stroke-linejoin="round"/>
            </svg>
          </div>
          <div>
            Самовывоз<br>
            Бесплатно
          </div>
        </div>
      </v-col>
      <v-col class="d-flex string-tittle">
        <div class="black-around text-center">
          3
        </div>
        <div class="contact-info align-self-center">
          Оплата
        </div>
      </v-col>

      <v-radio-group
        color="accent"
        v-model="paymentInn"
        @change="resultPayment()"
        row
      >
        <div class="payment-first">
          <v-radio label="Банковской картой" :value="card"></v-radio>
        </div>
        <div class="payment-second">
          <v-radio label="Способы оплаты для юридических лиц" :value="business"></v-radio>
        </div>
       <div>
         <v-radio label="В рассрочку от 3 до 12 мес" :value="credit"></v-radio>
       </div>
      </v-radio-group>
       <v-col class="d-flex">
         <div class="payment-first">&ensp;</div>
         <div class="payment-second">&ensp;</div>
         <div class="payment-third d-flex">
           <div class="mr-2">
             <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="8.5" cy="8.5" r="8" fill="white" stroke="#FF9393"/>
               <path d="M9.076 10.36L9.172 4.6H7.816L7.912 10.36H9.076ZM9.292 12.364C9.292 11.836 8.92 11.584 8.488 11.584C8.068 11.584 7.696 11.836 7.696 12.364C7.696 12.892 8.068 13.144 8.488 13.144C8.92 13.144 9.292 12.892 9.292 12.364Z" fill="#EC6F6F"/>
             </svg>
           </div>
           <div>
             Вам необходимо оформить заказ и нажать на кнопку далее с вами свяжется менеджер и подтвердит а также проконсультирует по условиям
           </div>
         </div>
       </v-col>
      <v-col class="d-flex block-order">
      <button  :disabled="disabledOrder" @click="sendRegistration()" class="big-btn-order">заказать</button>
    </v-col>
    </section>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import delivery from './delivery'
export default {
  name: 'v-form-input',
  components: {
    delivery
  },
  computed: {
    ...mapGetters([
      'GET_ITEMS_TO_BASKET'
    ])
  },
  methods: {
    ...mapActions([
      'SEND_REG_DATA_TO_API'
    ]),
    changeDel (id) {
      const idN = '#' + id
      this.selectDelivery = id
      if (id === 'fix') {
        document.querySelector(idN).className = 'justify-center text-center dev-select dev-middle'
        document.querySelector('#delivery').className = 'justify-center text-center dev-item'
        document.querySelector('#self').className = 'justify-center text-center dev-item'
      }
      if (id === 'delivery') {
        document.querySelector(idN).className = 'justify-center text-center dev-select'
        document.querySelector('#fix').className = 'justify-center text-center dev-item dev-middle'
        document.querySelector('#self').className = 'justify-center text-center dev-item'
      }
      if (id === 'self') {
        document.querySelector(idN).className = 'justify-center text-center dev-select'
        document.querySelector('#fix').className = 'justify-center text-center dev-item dev-middle'
        document.querySelector('#delivery').className = 'justify-center text-center dev-item'
      }
    },
    resultPayment () {
      if (this.paymentInn === 0) {
        this.payment = 'card'
      } else if (this.paymentInn === 1) {
        this.payment = 'transfer'
      } else {
        this.payment = 'credit'
      }
    },
    resultRadio () {
      if (this.radioRegions === 0) {
        this.checkRegions = 'moscow'
      } else {
        this.checkRegions = 'region'
      }
    },
    disabledBtn () {
      this.disabledOrder = this.checkboxConfirm
    },
    sendRegistration () {
      const regData = {
        config: this.GET_ITEMS_TO_BASKET,
        name: this.name,
        surname: this.surname,
        email: this.email,
        phone: this.phone,
        patronymic: this.patronymic,
        checkboxConfirm: this.checkboxConfirm,
        delivery: this.checkRegions,
        city: this.city,
        street: this.street,
        house: this.house,
        flat: this.flat,
        entrance: this.entrance,
        deliveryAndFix: this.selectDelivery,
        payment: this.payment
      }
      // regData = JSON.stringify(regData)
      // alert(regData)
      this.SEND_REG_DATA_TO_API(regData)
    }
  },
  data: () => ({
    selectDelivery: '',
    card: '',
    business: '',
    credit: '',
    payment: '',
    paymentInn: '',
    delivery: 1000,
    deliveryPlusFix: 1500,
    checkboxConfirm: null,
    disabledOrder: true,
    email: '',
    phone: '',
    name: '',
    surname: '',
    patronymic: '',
    radioRegions: '',
    checkRegions: '',
    smoscow: '',
    regions: '',
    city: '',
    street: '',
    house: '',
    flat: '',
    entrance: '',
    rulesHouse: [
      value => !!value || 'Обязательно.',
      value => (value && value.length >= 1) || 'Min 1 символ'
    ],
    rules: [
      value => !!value || 'Обязательно.',
      value => (value && value.length >= 3) || 'Min 3 characters'
    ],
    rulesPhone:
      [
        value => !!value || 'Обязательно.',
        value => (value && value.length >= 9) || 'Min 9 characters'
      ],
    rulesEmail: [
      value => !!value || 'Обязательно.',
      value => (value && value.length >= 3) || 'Min 3 characters'
    ]
  })
}
</script>

<style lang="scss">
  .payment-first{
    width: 190px;
  }
  .payment-second{
    width: 256px;
  }
  .payment-third{
    width: 321px;
  }
  .info__dev{
    margin: 26px 0 21px 0;
    font-size: 16px;
    line-height: 16px;
  }
  .dev-middle{
    margin: 0 129px 0 122px;
  }
  .dev-item{
    cursor: pointer;
    color: #CBCBCB;
    stroke: #CBCBCB;
  }
  .dev-item:hover{
    cursor: pointer;
    color: #D7B256;
    stroke: #D7B256;
  }
  .dev-select{
    cursor: pointer;
    color: #D7B256;
    stroke: #D7B256;
  }
  .dev-price{
   color: #B4B4B4;
    align-content: center;
   text-align: center;
  }
  .input-entrance{
    margin-left: 11px;
    width: 114px;
    .v-input__slot{
      width: 114px !important;
    }
  }
  .input-house{
    margin-left: 11px;
    width: 135px;
    .v-input__slot{
      width: 135px !important;
    }
  }
  .input-street{
    width: 336px;
    .v-input__slot{
      width: 336px !important;
    }
  }
  .city__items__input {
    .v-label {
      left: 20px !important;
      top: 16px;
    }
    .v-input__slot{
      width: 754px;
    }
    .v-input input {
      max-height: 60px;
      color: #434343;
      padding-left: 10px;
    }
  }

 .block-order{
    padding-left: 10px !important;
   margin: 60px 0 0 0;
  }
  .big-btn-order{
    margin: 20px 0 60px 0 ;
    width: 865px;
    height: 53px;
    background: #D7B256;
    border-radius: 2px;
    color: #FFFFFF;
    font-size: 20px;
    line-height: 136.5%;
    /* or 27px */

    text-align: center;
    text-transform: uppercase;

  }
  .contact-delivery{
    margin: 114px 0 0 0;
  }
  .v-form-input{
    margin: 110px 0 0 0;
    padding: 0 0 0 390px;
    .basket-h1{
      font-size: 25px;
      line-height: 113.5%;
      /* or 28px */

     text-transform: uppercase;
      font-weight: normal;
      color: #0C0C0C;
    }
    .black-around{
      width: 27px;
      height: 27px;
      background: #000000;
      line-height: 27px;
      color: #FFFFFF;
      border-radius: 50%;
      vertical-align: center;
    }
  .contact-info{
    margin: 0 0 0 13px;
    font-size: 15px;
    line-height: 113.5%;
    /* or 17px */
   text-transform: uppercase;
    color: #0C0C0C;
  }
    .string-tittle{
      margin: 74px 0 0 3px;
    }
    .contact-info__items{
      margin: 43px 0 0 2px;
    }
    .all-input .v-input input {
      max-height: 60px;
      color: #434343;
      padding-left: 10px;
    }
    .all-input .v-input__slot{
      width: 232px;
    }
    .all-input .theme--light.v-label {
      color: rgba(0, 0, 0, 0.3);
    }
    .contact-info__items__middle{
      margin: 0 32px 0 32px;
    }
    .all-input .v-label {
      left: 20px !important;
      top: 16px;
    }
    .v-text-field__slot{
      height: 50px;
      border: 1px solid #bbbbbb;
    }
    .contact-info__phone{
      margin: 20px 0 0 0;
    }
    .contact-info__mail{
      margin: 1px 0 0 209px;
    }

    .check-confirm{
      input[type="checkbox"]{
        outline:2px solid #5b5a5a;
        background-color: #8E8E8E;
      }
      margin: 17px 0 0 5px;
      .confirm-checkbox{
        height: 20px;
        width: 20px;
      }
      .confirm-label{
        color: #BDBDBD;
        width: 390px;
        font-size: 13px;
        line-height: 122.2%;
        padding-left: 36px;
      }
    }
    $color-green: #3b3c3b;
    .check-confirm {
      width: 100%;
      margin: 15px auto;
      position: relative;
      display: block;
      label {
        position: relative;
        min-height: 34px;
        display: block;
        padding-left: 40px;
        margin-bottom: 0;
        font-weight: normal;
        cursor: pointer;
        span {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          margin: 4px;
          width: 22px;
          height: 22px;
          transition: transform 0.28s ease;
          border-radius: 3px;
          border: 2px solid $color-green;
        }
        &:after {
          content: '';
          display: block;
          width: 10px;
          height: 5px;
          border-bottom: 2px solid $color-green;
          border-left: 2px solid $color-green;
          transform: rotate(-45deg) scale(0);
          transition: transform ease 0.25s;
          position: absolute;
          top: 12px;
          left: 10px;
        }
      }
      input[type="checkbox"] {
        width: auto;
        opacity: 0.00000001;
        position: absolute;
        left: 0;
        margin-left: -20px;
        &:checked ~ label{
          &:before {
            border: 2px solid $color-green;
          }
          &:after {
            transform: rotate(-45deg) scale(1);
          }
        }
        &:focus + label::before {
          outline: 0;
        }
      }
    }
  }
</style>
