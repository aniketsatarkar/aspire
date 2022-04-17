<template>
  <div class="row card-details">
    <div class="col-1">
      <q-img src="img/Group_11889.svg" />
    </div>
    <div class="col-10">Card details</div>
    <div class="col-1">
      <q-img class="cursor-pointer" src="img/down-arrow.svg" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    // ...
  },
});
</script>

<style lang="scss" scoped>
@media (min-width: 767px) {
  .option-card {
    border-radius: 15px;
  }
}

@media (max-width: 767px) {
  .option-card {
    border-radius: 15px 15px 0px 0px;
    margin: 0px !important;
  }
}

.card-details {
  margin: 10px;
  padding: 25px;
  border-radius: 15px;
  background-color: #f5f9ff;
  box-shadow: 0px 0px 8px 0px #00000014;

  .q-img {
    width: 24px;
    height: 24px;
  }
}
</style>
