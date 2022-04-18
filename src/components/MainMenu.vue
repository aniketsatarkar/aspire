<template>
  <q-item clickable tag="a" target="_blank">
    <q-item-section v-if="icon" avatar>
      <q-img :src="icon" class="menu-item-icon" />
    </q-item-section>

    <q-item-section class="menu-item-section">
      <q-item-label
        :class="{ 'menu-item-lable': true, 'menu-item-lable-active': active }"
        >{{ title }}</q-item-label
      >
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
