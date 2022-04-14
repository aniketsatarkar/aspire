<template>
  <q-item clickable tag="a" target="_blank">

    <q-item-section v-if="icon" avatar>
      <q-img :src="icon" class="item-icon" />
    </q-item-section>

    <q-item-section class="item-section">
      <q-item-label :class="{ 'item-lable': true, 'item-lable-active': active } ">{{ title }}</q-item-label>
    </q-item-section>

  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainMenu",
  props: {
    title: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped>
.item-section {
  margin-top: 25px;
  margin-bottom: 25px;
}
.item-lable {
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 400;
}
.item-lable-active {
  color: #01D167;
}
.item-icon {
  width: 24px;
  height: 24px;
  margin-left: 30px;
}
</style>