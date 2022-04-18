<template>
  <div class="row transaction">
    <div class="col text-left" style="text-align: -webkit-center">
      <div class="storage">
        <q-img :src="iconSrc" />
      </div>
    </div>
    <div class="col-6">
      <span class="title">{{ title }}</span>
      <span class="date">{{ date }}</span>
      <span class="info">
        <span>
          <q-img src="img/business-and-finance.svg" />
        </span>
        {{ infoText }}
      </span>
    </div>
    <div
      :class="{
        'col-4 text-right amount': true,
        'text-primary': type === 'credit',
      }"
    >
      {{ sign }} S$ {{ amount }}
      <q-img src="img/next.svg" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Transaction",
  props: {
    title: {
      type: String,
      default: null,
    },
    date: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
    card: {
      type: String,
      default: null,
    },
    amount: {
      type: Number,
      default: 0,
    },
    icon: {
      type: String,
      default: null,
    },
  },
  setup() {
    // ...
  },
  computed: {
    infoText() {
      if (this.type === "credit") {
        return `Refund on ${this.card} card`;
      } else if (this.type === "debit") {
        return `Charged to ${this.card} card`;
      } else {
        return "N/A";
      }
    },
    sign() {
      if (this.type === "credit") {
        return "+";
      } else if (this.type === "debit") {
        return "-";
      } else {
        return "";
      }
    },
    iconSrc() {
      switch (this.icon) {
        case "storage":
          return "img/file-storage.svg";
        case "flight":
          return "img/flights.svg";
        case "megaphone":
          return "img/megaphone.svg";
        default:
          return "img/file-storage.svg";
      }
    },
  },
});
</script>
