<template>
  <q-page class="phone-page-margin phone-background">
    <div class="scroll-container">
      <div class="fixed">
        <!-- header -->
        <div class="row page-header">
          <div class="col-12 header-container">
            <div class="row" style="line-height: 3em">
              <div class="col">Available balance</div>
              <div class="col text-right">
                <q-img src="/img/Logo.svg" />
              </div>
            </div>
          </div>

          <div class="col-auto currency-box">S$</div>
          <div class="col-6 amount">3,000</div>
          <div class="col text-right new-card-btn">
            <q-btn no-caps @click="showAddCardDialog = true">
              <q-img left src="/img/box.png" />
              <span class="text-accent">New Card</span>
            </q-btn>
          </div>
        </div>

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

        <Cards />
      </div>

      <div class="scrollable">
        <q-card>
          <q-card-section>
            <CardOptions />
            <div class="list-container">
              <CardDetails />
              <RecentTransactions />
            </div>
            <!-- offset for fixed mobile nav menu -->
            <div style="height: 80px"></div>
          </q-card-section>
        </q-card>

        <PhoneMenu />
      </div>
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
import PhoneMenu from "../components/PhoneMenu.vue";
import NewCardForm from "../components/NewCardForm.vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    Cards,
    CardOptions,
    CardDetails,
    RecentTransactions,
    PhoneMenu,
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
.phone-page-margin {
  margin: 0px;
}

.phone-background {
  background-color: #0c365a;
}

.q-btn:before {
  box-shadow: unset;
}

.q-tab {
  color: white;
}

.q-tabs {
  padding: 15px 25px 0px 25px;
}
</style>
