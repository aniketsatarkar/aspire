<template>
  <div class="row phone-menu">
    <div v-for="(option, index) in options" :key="index" class="col">
      <div class="menu-img">
        <q-img class="cursor-pointer" :src="option.image" />
      </div>
      <div class="menu-title">
        <span :class="{ active: option.isActive }">{{ option.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

const options = [
  {
    title: "Home",
    image: "img/Logo_1.svg",
    isActive: false,
  },
  {
    title: "Cards",
    image: "img/pay.svg",
    isActive: true,
  },
  {
    title: "Payments",
    image: "img/Payments.svg",
    isActive: false,
  },
  {
    title: "Credit",
    image: "img/Credit_1.svg",
    isActive: false,
  },
  {
    title: "Profile",
    image: "img/Account.svg",
    isActive: false,
  },
];

export default defineComponent({
  setup() {
    return {
      options: ref(options),
    };
  },
});
</script>
