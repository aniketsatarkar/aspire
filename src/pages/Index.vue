<template>
  <Phone v-if="$isPhone" />
  <Web v-else />
</template>

<script>
import { defineComponent, ref } from "vue";
import Web from "../pages/IndexWeb.vue";
import Phone from "../pages/IndexPhone.vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    Web,
    Phone,
  },
  setup() {
    // ...
  },
});
</script>
