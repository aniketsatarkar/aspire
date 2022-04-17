<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer
      v-if="!$isPhone"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :breakpoint="1300"
    >
      <div class="drawer-header">
        <q-img src="img/Aspire_Logo.svg" />
        <p class="q-mt-md">
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </p>
      </div>

      <q-list>
        <main-menu v-for="link in menuLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import MainMenu from "components/MainMenu.vue";

const linksList = [
  {
    title: "Home",
    icon: "/img/Home.svg",
    active: false,
  },
  {
    title: "Cards",
    icon: "/img/Card.svg",
    active: true,
  },
  {
    title: "Payments",
    icon: "/img/Payments.svg",
    active: false,
  },
  {
    title: "Credit",
    icon: "/img/Credit.svg",
    active: false,
  },
  {
    title: "Settings",
    icon: "/img/Account.svg",
    active: false,
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    MainMenu,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      menuLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="scss">
.q-drawer-container {
  aside > div {
    background-color: #0c365a !important;
  }

  .drawer-header {
    margin-left: 40px;
    margin-top: 40px;
    padding-right: 20px;

    .q-img {
      width: 125px;
      height: 35px;
    }

    p {
      font-size: 15px;
      color: #ffffff;
      opacity: 0.3;
      font-weight: 300;
    }
  }

  .q-list {
    margin-top: 65px;
  }
}
</style>
