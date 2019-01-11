<template>
  <app-page title="Loading 加载" description="加载数据时显示动效。">

    <app-case title="区域加载" description="在表格等容器中加载数据时显示。">
      <div
        class="case"
        v-loading="true">
        <p v-for="i in 5" :key="i">假装有内容</p>
      </div>
    </app-case>

    <app-case title="自定义" description="可自定义加载文案、图标和背景色。">
      <div
        class="case"
        v-loading="true"
        element-loading-text="拼命加载中"
        element-loading-background="rgba(0, 0, 0, 0.8)">
        <p v-for="i in 5" :key="i">假装有内容</p>
      </div>
    </app-case>

    <app-case title="整页加载" description="页面数据加载时显示。">
      <zk-button type="text" @click="open">点击加载</zk-button>
    </app-case>

  </app-page>
</template>

<script>
import Vue from 'vue'
import Loading from '@/packages/loading'
import Button from '@/packages/button'

Vue.use(Loading)

export default {
  components: {
    'zk-button': Button
  },
  methods: {
    open () {
      const loading = Loading.service({
        lock: true,
        text: 'Loading'
      })
      setTimeout(() => {
        loading.close()
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.case {
  height: 300px;
}
</style>
