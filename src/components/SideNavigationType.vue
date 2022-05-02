<template>
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon variant="text" @click.stop="toggleSideNav"></v-app-bar-nav-icon>

    <v-toolbar-title>My files</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn variant="text" icon="mdi-magnify"></v-btn>

    <v-btn variant="text" icon="mdi-filter"></v-btn>

    <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" bottom>
    <v-list :items="navigationList" nav>
      <template v-for="depth1 in navigationList" :key="depth1.path">
        <v-list-group v-if="depth1.children">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" :prepend-icon="depth1.icon" :title="depth1.title"></v-list-item>
          </template>
          <v-list-item v-for="depth2 in depth1.children" :key="depth2.path" :prepend-icon="depth2.icon" :title="depth2.title"></v-list-item>
        </v-list-group>
        <v-list-item v-if="!depth1.children" :prepend-icon="depth1.icon" :title="depth1.title"></v-list-item>
      </template>
    </v-list>
    <!-- <v-list v-model:opened="open">
      <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>

      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Users" value="Users"></v-list-item>
        </template>

        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Admin" value="Admin"></v-list-item>
          </template>

          <v-list-item v-for="([title, icon], i) in admins" :key="i" :value="title" :title="title" :prepend-icon="icon"></v-list-item>
        </v-list-group>

        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Actions" value="Users"></v-list-item>
          </template>

          <v-list-item v-for="([title, icon], i) in cruds" :key="i" :value="title" :title="title" :prepend-icon="icon"></v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list> -->
  </v-navigation-drawer>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  name: 'SideNavigationType',
  data: () => ({
    navigationList: [
      {
        title: 'Home',
        path: '/home',
        icon: 'mdi-plus-outline',
        children: [
          { title: 'children1', path: '/1', icon: 'mdi-account-multiple-outline' },
          { title: 'children2', path: '/2', icon: 'mdi-account-multiple-outline' },
          { title: 'children3', path: '/3', icon: 'mdi-account-multiple-outline' },
        ],
      },
      { title: 'Hello', path: '/hello', icon: 'mdi-file-outline' },
      { title: 'Fizz', path: '/4', icon: 'mdi-update' },
      { title: 'Buzz', path: '/5', icon: 'mdi-delete' },
    ],
  }),
  setup() {
    const store = useStore();
    return {
      layoutType: computed(() => store.state.envs.layoutType),
      drawer: computed(() => store.state.envs.drawer),
      toggleSideNav: () => store.dispatch('envs/toggleDrawer'),
    };
  },
};
</script>

<style></style>
