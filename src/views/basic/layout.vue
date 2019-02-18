<template>
  <app-case>
    <zk-layout
      :title="title"
      :nav-data="navData"
      :breadcrumb-data="breadcrumb">
      <span>视图</span>
    </zk-layout>
  </app-case>
</template>

<script>
import Layout from '@/packages/components/layout'

export default {
  name: 'App',
  components: {
    'zk-layout': Layout
  },
  data () {
    return Object.assign({
      title: '网站标题',
      breadcrumb: [
        { href: '#1', label: '首页' },
        { href: '#2', label: '标题1' },
        { href: '#3', label: '标题2' }
      ]
    }, this.$mockjs.mock({
      'navData|3': [{
        label: '分组',
        index: '@guid',
        icon: '@guid',
        'childers|5': [{
          label: '导航',
          index: '@guid',
          icon: '@guid'
        }]
      }]
    }))
  },
  computed: {
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
