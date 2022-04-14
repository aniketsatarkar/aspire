<template>
  <q-page :class="{ 'phone-margin phone-background': isPhone, 'web-margin': !isPhone }">
    <!-- page header -->
    <template v-if="!isPhone">
      <div class="row">
        <div class="col-12" style="font-size: 14px; margin-bottom: 18px;">Available balance</div>
        <div class="col-auto" style="padding: 2px 13px 2px 13px; background-color: #01D167; color: #FFFFFF; display: inline-block; border-radius: 4px; align-self: center;">S$</div>
        <div class="col-6" style="font-size: 26px; display: inline-block; font-weight: 700; padding: 2px 13px 2px 13px">3,000</div>
        <div class="col text-right">
          <q-btn no-caps style="background-color: #325BAF;" @click="addCard">
            <q-img left src="/img/box_1.svg" style="width: 16px; height: 16px; : #fff" />
            <span style="margin-left: 10px; color: #fff">New Card</span>
          </q-btn>
        </div>
      </div>
    </template>

    <template v-if="isPhone">
      <div class="row">
        <div class="col-12" style="font-size: 14px; margin-bottom: 18px;">
          <div class="row" style="line-height: 3em;">
            <div class="col">Available balance</div>
            <div class="col text-right">
              <q-img src="/img/Logo.svg" style="width: 25px; height: 25px; padding: 0px; 10px 10px 0px;" />
            </div>
          </div>
        </div>
        <div class="col-auto" style="padding: 2px 13px 2px 13px; background-color: #01D167; color: #FFFFFF; display: inline-block; border-radius: 4px; align-self: center;">S$</div>
        <div class="col-6" style="font-size: 26px; display: inline-block; font-weight: 700; padding: 2px 13px 2px 13px">3,000</div>
        <div class="col text-right">
          <q-btn no-caps style="background-color: #325BAF;" @click="addCard">
            <q-img left src="/img/box_1.svg" style="width: 16px; height: 16px; : #fff" />
            <span style="margin-left: 10px; color: #fff">New Card</span>
          </q-btn>
        </div>
      </div>
    </template>

    <!-- tabs -->
    <template v-if="!isPhone">
      <div class="row q-mt-md">
        <q-tabs
          v-model="tab"
          dense
          indicator-color="accent"
          align="left"
          class="col-12"
        >
          <q-tab :ripple="false" no-caps name="my_debit_cards" label="My debit cards" />
          <q-tab :ripple="false" disable no-caps name="all_company_cards" label="All company cards" />
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
    </template>

    <template v-if="isPhone">
        <Cards />
        <div class="card">
          <CardOptions />
          <CardDetails />
          <RecentTransactions />
        </div>
    </template>

    <PhoneMenu v-if="isPhone" style="position: fixed; bottom: 0; width: 100%;" />

    <!-- ----------------------- -->

    <q-dialog v-model="showAddCardDialog">
      <q-card style="min-width: 350px;">
        <q-card-section>
          <div class="text-h6 text-primary" style="font-size: 16px;">Add Card</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-form ref="form" class="q-gutter-md">
            <q-input
              filled
              v-model="card.name"
              label="Name"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please enter your name' ]"
            />
            <q-input
              filled
              v-model="card.cardNumber"
              label="Card"
              mask="#### #### #### ####"
              fill-mask="#"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please enter your card number' ]"
            />
            <q-input
              filled
              v-model="card.thru"
              label="Expiry"
              mask="##/##"
              fill-mask="#"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please enter expiry date' ]"
            />
          </q-form>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="default" v-close-popup />
          <q-btn flat label="Add" color="primary" @click="submit" />
        </q-card-actions>

      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Cards from '../components/Cards.vue';
import CardOptions  from '../components/CardOptions.vue';
import CardDetails from '../components/CardDetails.vue';
import RecentTransactions from '../components/RecentTransactions.vue';
import PhoneMenu from '../components/PhoneMenu.vue';
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'PageIndex',
  components: {
    Cards,
    CardOptions,
    CardDetails,
    RecentTransactions,
    PhoneMenu,
  },
  setup() {
    const defaultCard = ref({
      name: '',
      cardNumber: null,
      freez: false,
      thru: null,
      cardLogo: 'visa',
    });

    return {
      showAddCardDialog: ref(false),
      tab: 'my_debit_cards',
      card: defaultCard,
    }
  },
  computed: {
    isPhone () {
      const $q = useQuasar()
      return ($q.platform.is.mobile !== undefined && $q.platform.is.mobile)
    }
  },
  watch: {
    showAddCardDialog (value) {
      if (!value) {
        this.card = {
          name: '',
          cardNumber: null,
          freez: false,
          thru: null,
          cardLogo: 'visa',
        }
      }
    }
  },
  methods: {
    addCard () {
      this.card.cardNumber = this.getRandomCardNumber()
      this.card.thru = this.getRandomExpiryDate()

      this.showAddCardDialog = true;
    },
    randomNumber (start = 1, end = 9) {
      return Math.floor(Math.random() * end) + start
    },
    getRandomCardNumber () {
      let count = 16;
      let number = ``

      while (count !== 0) {
        number += this.randomNumber()
        count -= 1
      }

      return number;
    },
    getRandomExpiryDate () {
      const month = String(this.randomNumber(1, 12)).padStart(2, '0')
      const year = this.randomNumber(20, 40);

      return `${month}/${year}`
    },
    submit () {
      this.$refs.form.validate().then(isValid => {
        if (isValid) {
          this.$store.dispatch('app/addCard', this.card);
          this.showAddCardDialog = false;
        }
      })
    },
  }
});
</script>

<style lang="scss" scoped>
  .phone-margin {
    margin: 0px;
  }

  .web-margin {
    margin: 40px;
  }

  .phone-background {
    // background-color: #0C365A;
  }

</style>