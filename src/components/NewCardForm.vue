<template>
  <q-dialog
    :model-value="modelValue"
    class="card-form"
    @before-show="handleBeforeShow"
    @before-hide="handleBeforeHide"
    @update:model-value="handleValueChange"
  >
    <q-card>
      <q-card-section>
        <div class="text-h6 text-primary">Add Card</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form ref="form" class="q-gutter-md">
          <q-input
            filled
            v-model="card.name"
            label="Name"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please enter your name',
            ]"
          />
          <q-input
            filled
            v-model="card.cardNumber"
            label="Card"
            mask="#### #### #### ####"
            fill-mask="#"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Please enter your card number',
            ]"
          />
          <q-input
            filled
            v-model="card.thru"
            label="Expiry"
            mask="##/##"
            fill-mask="#"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please enter expiry date',
              (val) => validateThru(val) || 'Expiry date is invalid',
            ]"
          />
        </q-form>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="default" v-close-popup />
        <q-btn flat label="Add" color="primary" @click="handleSubmit" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent, ref } from "vue";

const cardObject = {
  name: "",
  cardNumber: null,
  freez: false,
  thru: null,
  cardLogo: "visa",
};

export default defineComponent({
  name: "PageIndex",
  model: {
    event: "show-dialog",
    prop: "show",
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      show: ref(false),
      tab: "my_debit_cards",
      card: ref(Object.assign({}, cardObject)),
    };
  },
  methods: {
    randomNumber(start = 1, end = 9) {
      return Math.floor(Math.random() * end) + start;
    },
    getRandomCardNumber() {
      let count = 16;
      let number = ``;

      while (count !== 0) {
        number += this.randomNumber();
        count -= 1;
      }

      return number;
    },
    getRandomExpiryDate() {
      const month = String(this.randomNumber(1, 12)).padStart(2, "0");
      const year = this.randomNumber(20, 40);

      return `${month}/${year}`;
    },
    validateThru(value) {
      if (value === "##/##") {
        return false;
      }

      const date = value.split("/");
      const month = date[0];
      const year = date[1];

      if (month > 12 || month < 0) {
        return false;
      }

      if (year <= 21) {
        return false;
      }

      return true;
    },
    handleSubmit() {
      this.$refs.form.validate().then((isValid) => {
        if (isValid) {
          this.$store.dispatch("app/addCard", this.card);
          this.$emit("update:modelValue", false);
        }
      });
    },
    handleBeforeShow() {
      this.card.cardNumber = this.getRandomCardNumber();
      this.card.thru = this.getRandomExpiryDate();
    },
    handleBeforeHide() {
      this.card = Object.assign({}, cardObject);
    },
    handleValueChange(value) {
      this.$emit("update:modelValue", value);
    },
  },
});
</script>
