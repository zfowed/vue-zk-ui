<template>
  <app-page title="Tag 标签" description="用于标记和选择。">

    <app-case title="基础用法">
      <zk-tag>标签一</zk-tag>
      <zk-tag type="primary">标签二</zk-tag>
      <zk-tag type="success">标签二</zk-tag>
      <zk-tag type="info">标签三</zk-tag>
      <zk-tag type="warning">标签四</zk-tag>
      <zk-tag type="danger">标签五</zk-tag>
    </app-case>

    <app-case title="可移除标签">
      <zk-tag closable>标签一</zk-tag>
      <zk-tag closable type="primary">标签二</zk-tag>
      <zk-tag closable type="success">标签二</zk-tag>
      <zk-tag closable type="info">标签三</zk-tag>
      <zk-tag closable type="warning">标签四</zk-tag>
      <zk-tag closable type="danger">标签五</zk-tag>
    </app-case>

  </app-page>
</template>

<script>
import Tag from '@/packages/tag'

export default {
  components: {
    'zk-tag': Tag
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
