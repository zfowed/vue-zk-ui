<template>
  <app-page title="Button 按钮">

    <app-case title="基础用法" description="常用的操作按钮。">
      <app-row>
        <zk-button>主要按钮</zk-button>
        <zk-button disabled>禁用按钮</zk-button>
      </app-row>
    </app-case>

    <app-case title="圆角按钮" description="圆角按钮。">
      <app-row>
        <zk-button round>圆角按钮</zk-button>
        <zk-button round disabled>禁用按钮</zk-button>
      </app-row>
    </app-case>

    <app-case title="文字按钮" description="没有边框和背景色的按钮。">
      <zk-button type="text">文字按钮</zk-button>
      <zk-button type="text" disabled>禁用按钮</zk-button>
    </app-case>

    <app-case title="链接按钮" description="没有边框和背景色的按钮。">
      <zk-button type="link">文字按钮</zk-button>
      <zk-button type="link" disabled>禁用按钮</zk-button>
    </app-case>

    <app-case title="不同尺寸" description="在不同场景下选择合适的按钮尺寸。">
      <zk-button>默认按钮</zk-button>
      <zk-button size="small">小型按钮</zk-button>
    </app-case>

  </app-page>
</template>

<script>
import Button from '@/packages/components/button'

export default {
  components: {
    'zk-button': Button
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
}
</style>
