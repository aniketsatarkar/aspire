<template>
  <q-page class="web-margin">
    <div class="row">
      <div class="col-12" style="font-size: 14px; margin-bottom: 18px">
        Available balance
      </div>
      <div
        class="col-auto"
        style="
          padding: 2px 13px 2px 13px;
          background-color: #01d167;
          color: #ffffff;
          display: inline-block;
          border-radius: 4px;
          align-self: center;
        "
      >
        S$
      </div>
      <div
        class="col-6"
        style="
          font-size: 26px;
          display: inline-block;
          font-weight: 700;
          padding: 2px 13px 2px 13px;
        "
      >
        3,000
      </div>
      <div class="col text-right">
        <q-btn
          no-caps
          style="background-color: #325baf"
          @click="showAddCardDialog = true"
        >
          <q-img
            left
            src="/img/box_1.svg"
            style="width: 16px; height: 16px; :#fff "
          />
          <span style="margin-left: 10px; color: #fff">New Card</span>
        </q-btn>
      </div>
    </div>

    <div class="row q-mt-md">
      <q-tabs
        v-model="tab"
        dense
        indicator-color="accent"
        align="left"
        class="col-12"
      >
        <q-tab
          :ripple="false"
          no-caps
          name="my_debit_cards"
          label="My debit cards"
        />
        <q-tab
          :ripple="false"
          disable
          no-caps
          name="all_company_cards"
          label="All company cards"
        />
      </q-tabs>

      <q-tab-panels class="col-12" v-model="tab" animated no-padding no-margin>
        <q-tab-panel name="my_debit_cards" no-padding no-margin>
          <q-card class="my-card">
            <q-card-section>
              <div class="row">
                <div class="col-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <Cards />
                  <CardOptions />
                </div>
                <div class="col-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div>
                    <CardDetails />
                  </div>
                  <div>
                    <RecentTransactions />
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-tab-panel>
      </q-tab-panels>
    </div>

    <NewCardForm v-model="showAddCardDialog" />
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import Cards from "../components/Cards.vue";
import CardOptions from "../components/CardOptions.vue";
import CardDetails from "../components/CardDetails.vue";
import RecentTransactions from "../components/RecentTransactions.vue";
import NewCardForm from "../components/NewCardForm.vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    Cards,
    CardOptions,
    CardDetails,
    RecentTransactions,
    NewCardForm,
  },
  setup() {
    return {
      showAddCardDialog: ref(false),
      tab: "my_debit_cards",
    };
  },
});
</script>

<style lang="scss" scoped>
.phone-margin {
  margin: 0px;
}

.web-margin {
  margin: 40px;
}

.card-form {
  min-width: 350px;

  .q-btn {
    font-size: 16px;
  }
}

.phone-background {
  background-color: #0c365a;
}
</style>
