<template>
  <div :class="{ 'row card-ui': true, 'card-freez': freez }">
    <div class="text-primary show-card-number">
      <q-img src="img/remove_red_eye-24px.svg" />
      <span>Show Card Number</span>
    </div>

    <div class="col-12 card" style="">
      <div class="row card-freez">
        <div class="col-12 text-right aspire">
          <q-img src="img/aspire_logo_white.svg" />
        </div>
        <div class="col-12 card-name">{{ name }}</div>
        <div class="col-12 card-number">
          <span class="dot"></span><span class="dot"></span
          ><span class="dot"></span><span class="dot"></span> &nbsp;&nbsp;&nbsp;
          <span class="dot"></span><span class="dot"></span
          ><span class="dot"></span><span class="dot"></span> &nbsp;&nbsp;&nbsp;
          <span class="dot"></span><span class="dot"></span
          ><span class="dot"></span><span class="dot"></span> &nbsp;&nbsp;&nbsp;
          <span class="card-number-end">{{ getLastNumber }}</span>
        </div>
        <div class="col-8 card-date">
          <div class="row">
            <div class="col-6 date">Thru: {{ thru }}</div>
            <div class="col-6 card-cvv">
              CVV: <span class="cvv">&nbsp;&nbsp;* * *</span>
            </div>
          </div>
        </div>
        <div class="col-12 text-right card-logo">
          <q-img src="img/Visa_Logo.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",
  props: {
    index: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: null,
    },
    cardNumber: {
      type: String,
      default: null,
    },
    freez: {
      type: Boolean,
      default: false,
    },
    thru: {
      type: String,
      default: null,
    },
    cardLogo: {
      type: String,
      default: null,
    },
  },
  computed: {
    getLastNumber() {
      return this.cardNumber.substring(
        this.cardNumber.length - 4,
        this.cardNumber.length
      );
    },
  },
  setup() {
    // ...
  },
});
</script>
