<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :breakpoint="1300" style="background-color: #0C365A;">

      <div style="margin-left: 40px; margin-top:40px; padding-right: 20px;">
        <q-img src="img/Aspire_Logo.svg" style="width: 125px; height: 35px;" />
        <p class="q-mt-md" style="font-size: 15px; color: #FFFFFF; opacity: 0.3; font-weight: 300;">
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </p>
      </div>

      <q-list style="margin-top: 65px">
        <main-menu
          v-for="link in menuLinks"
          :key="link.title"
          v-bind="link"
        />
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
