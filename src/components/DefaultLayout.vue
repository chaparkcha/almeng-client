<template>
  <v-app>
    <side-navigation-type v-if="layoutType === 'side'" />
    <top-navigation-type v-if="layoutType === 'top'" />
    <!-- <v-app-bar></v-app-bar>
    <v-navigation-drawer></v-navigation-drawer> -->
    <v-navigation-drawer position="right"></v-navigation-drawer>
    <v-app-bar position="bottom"></v-app-bar>
    <v-main>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
import { computed, defineAsyncComponent } from 'vue';
import { useStore } from 'vuex';
export default {
  components: {
    SideNavigationType: defineAsyncComponent(() => import('./SideNavigationType.vue')),
    TopNavigationType: defineAsyncComponent(() => import('./TopNavigationType.vue')),
  },
  name: 'DefaultLayout',
  data() {
    return {};
  },
  setup() {
    const store = useStore();
    return {
      layoutType: computed(() => store.state.envs.layoutType),
    };
  },
};
</script>

<style></style>
