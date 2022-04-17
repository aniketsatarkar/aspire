<template>
  <div class="row transactions">
    <div class="col-1">
      <q-img src="img/Group_11889_1.svg" />
    </div>
    <div class="col-10">Recent transactions</div>
    <div class="col-1">
      <q-img class="cursor-pointer" src="img/down-arrow.svg" />
    </div>
  </div>
  <div style="padding: 0px 20px 0px 20px">
    <Transaction
      v-for="(transaction, index) in transactions"
      :key="index"
      :title="transaction.title"
      :date="transaction.date"
      :type="transaction.type"
      :card="transaction.card"
      :amount="transaction.amount"
      :icon="transaction.icon"
    />
    <div class="view-all-btn">View all card transactions</div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Transaction from "../components/Transaction.vue";

export default defineComponent({
  components: {
    Transaction,
  },
  created() {
    this.$axios
      .get("/transactions")
      .then((response) => {
        const transactions = response.data;
        if (transactions.length === 0) {
          console.error("NO DATA!");
          return;
        }
        this.transactions = transactions;
      })
      .catch((error) => {
        console.error("Failed to get data!", error);
      });
  },
  setup() {
    const transactions = ref([]);

    return {
      transactions,
    };
  },
});
</script>

<style lang="scss" scoped>
.transactions {
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

.view-all-btn {
  padding: 15px;
  background-color: #edfff5;
  text-align: center;
  border: 1px solid #ddffec;
  color: #01d167;
  font-weight: 500;
}
</style>
