<template>
  <div class="row menu-card">
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

<style lang="scss" scoped>
.menu-card {
  padding: 10px 0px 10px 0px;
  margin: 0px;
  box-shadow: 0px 0px 8px 0px #00000014;
  background-color: white;
  position: fixed;
  bottom: 0;
  width: 100%;

  .menu-img {
    text-align: center;

    .q-img {
      width: 24px;
      margin: auto;
      display: block;
    }
  }

  .menu-title {
    text-align: -webkit-center;
    margin-top: 5px;

    span {
      word-break: break-word;
      width: 65px;
      display: block;
      font-size: 9px;
      color: #dddddd;
      font-weight: 500;
      cursor: pointer;
    }

    .active span {
      color: #01d167;
    }
  }
}
</style>
