<template>
  <zk-layout
    :title="title"
    :nav-data="nav"
    :breadcrumb-data="breadcrumb">
    <router-view />
  </zk-layout>
</template>

<script>
import Layout from '@/packages/components/layout'

import { createNamespacedHelpers } from 'vuex'
const { mapState: appState } = createNamespacedHelpers('app')

export default {
  name: 'App',
  components: {
    'zk-layout': Layout
  },
  computed: {
    ...appState(['title', 'nav']),
    breadcrumb () {
      return this.$route.matched.filter(route => {
        return route.meta.title
      }).map(route => {
        return {
          label: route.meta.title,
          href: route.path
        }
      })
    }
  }
}
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  &-track-piece {
    background: #eee;
  }
  &-thumb {
    background-color: #A5A5A5;
  }
  &-thumb:hover {
    background-color: #bbb;
  }
}
</style>

<style lang="scss">
body {
  margin: 0 !important;
  overflow: auto !important;
}
body {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
}
</style>
