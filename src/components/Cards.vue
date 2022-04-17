<template>
  <div>
    <!-- style="min-width: 415px; min-height: 380px" -->
    <q-carousel
      v-model="currentCardIndex"
      swipeable
      animated
      transition-prev="slide-right"
      transition-next="slide-left"
      :navigation="true"
      :padding="true"
      control-color="primary"
    >
      <q-carousel-slide
        v-for="(card, index) in cards"
        :key="index"
        :name="index"
        class="column no-wrap flex-center"
      >
        <Card
          :index="index"
          :name="card.name"
          :card-number="card.cardNumber"
          :freez="card.freez"
          :thru="card.thru"
          :card-logo="card.cardLogo"
        />
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import Card from "../components/Card.vue";

export default defineComponent({
  components: {
    Card,
  },
  created() {
    this.$axios
      .get("/cards")
      .then((response) => {
        const cards = response.data;

        if (cards.length === 0) {
          console.error("NO CARDS!");
          return;
        }

        this.$store.dispatch("app/setCards", cards);
        this.$store.dispatch("app/setCurrentCard", cards[0]);
      })
      .catch((error) => {
        console.error("Failed to get cards!", error);
      });
  },
  computed: {
    cards() {
      return this.$store.getters["app/getCards"];
    },
    cardIndex() {
      return this.$store.getters["app/getCurrentCardIndex"];
    },
  },
  watch: {
    currentCardIndex: {
      handler(cardIndex) {
        this.$store.dispatch("app/setCurrentCard", this.cards[cardIndex]);
      },
    },
    cards() {
      // reset carousel to first card
      this.currentCardIndex = 0;
    },
  },
  setup() {
    return {
      currentCardIndex: ref(0),
    };
  },
});
</script>

<style lang="scss">
@media (min-width: 767px) {
  .q-carousel {
    margin-top: -20px;
  }
}

@media (max-width: 767px) {
  .q-carousel {
    margin-top: 0px;
  }
}

.q-carousel {
  background-color: transparent;
  margin-bottom: -40px;

  button {
    font-size: 0.5em !important;
  }
  .q-carousel__slide {
    justify-content: unset !important;
  }
  .q-carousel__navigation--bottom {
    bottom: 50px !important;
  }
}
</style>
