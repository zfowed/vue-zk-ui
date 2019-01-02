<template>
  <app-page title="Button 按钮">

    <app-case title="基础用法" description="常用的操作按钮。">
      <app-row>
        <zk-button>默认按钮</zk-button>
        <zk-button type="primary">主要按钮</zk-button>
        <zk-button type="success">成功按钮</zk-button>
        <zk-button type="info">信息按钮</zk-button>
        <zk-button type="warning">警告按钮</zk-button>
        <zk-button type="danger">危险按钮</zk-button>
      </app-row>
      <app-row>
        <zk-button plain>朴素按钮</zk-button>
        <zk-button type="primary" plain>主要按钮</zk-button>
        <zk-button type="success" plain>成功按钮</zk-button>
        <zk-button type="info" plain>信息按钮</zk-button>
        <zk-button type="warning" plain>警告按钮</zk-button>
        <zk-button type="danger" plain>危险按钮</zk-button>
      </app-row>
      <app-row>
        <zk-button raised>凸起按钮</zk-button>
        <zk-button type="primary" raised>主要按钮</zk-button>
        <zk-button type="success" raised>成功按钮</zk-button>
        <zk-button type="info" raised>信息按钮</zk-button>
        <zk-button type="warning" raised>警告按钮</zk-button>
        <zk-button type="danger" raised>危险按钮</zk-button>
      </app-row>
      <app-row>
        <zk-button round>圆角按钮</zk-button>
        <zk-button type="primary" round>主要按钮</zk-button>
        <zk-button type="success" round>成功按钮</zk-button>
        <zk-button type="info" round>信息按钮</zk-button>
        <zk-button type="warning" round>警告按钮</zk-button>
        <zk-button type="danger" round>危险按钮</zk-button>
      </app-row>
      <app-row>
        <zk-button icon="el-icon-search" circle></zk-button>
        <zk-button type="primary" icon="el-icon-edit" circle></zk-button>
        <zk-button type="success" icon="el-icon-check" circle></zk-button>
        <zk-button type="info" icon="el-icon-message" circle></zk-button>
        <zk-button type="warning" icon="el-icon-star-off" circle></zk-button>
        <zk-button type="danger" icon="el-icon-delete" circle></zk-button>
      </app-row>
    </app-case>

    <app-case title="禁用状态" description="按钮不可用状态。">
      <zk-button disabled>默认按钮</zk-button>
      <zk-button type="primary" disabled>主要按钮</zk-button>
      <zk-button type="success" disabled>成功按钮</zk-button>
      <zk-button type="info" disabled>信息按钮</zk-button>
      <zk-button type="warning" disabled>警告按钮</zk-button>
      <zk-button type="danger" disabled>危险按钮</zk-button>
    </app-case>

    <app-case title="文字按钮" description="没有边框和背景色的按钮。">
      <zk-button type="text">文字按钮</zk-button>
      <zk-button type="text" disabled>文字按钮</zk-button>
    </app-case>

    <app-case title="图标按钮" description="带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。">
      <zk-button type="primary" icon="el-icon-edit"></zk-button>
      <zk-button type="primary" icon="el-icon-share"></zk-button>
      <zk-button type="primary" icon="el-icon-delete"></zk-button>
      <zk-button type="primary" icon="el-icon-search">搜索</zk-button>
      <zk-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></zk-button>
    </app-case>

    <app-case title="按钮组" description="以按钮组的方式出现，常用于多项类似操作。">
      <zk-button-group>
        <zk-button type="primary" icon="el-icon-arrow-left">上一页</zk-button>
        <zk-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></zk-button>
      </zk-button-group>
      <zk-button-group>
        <zk-button type="primary" icon="el-icon-edit"></zk-button>
        <zk-button type="primary" icon="el-icon-share"></zk-button>
        <zk-button type="primary" icon="el-icon-delete"></zk-button>
      </zk-button-group>
    </app-case>

    <app-case title="加载中" description="点击按钮后进行数据加载操作，在按钮上显示加载状态。">
      <zk-button type="primary" :loading="true">加载中</zk-button>
    </app-case>

    <app-case title="不同尺寸" description="Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。">
      <app-row>
        <zk-button>默认按钮</zk-button>
        <zk-button size="medium">中等按钮</zk-button>
        <zk-button size="small">小型按钮</zk-button>
        <zk-button size="mini">超小按钮</zk-button>
      </app-row>
      <app-row>
        <zk-button round>默认按钮</zk-button>
        <zk-button size="medium" round>中等按钮</zk-button>
        <zk-button size="small" round>小型按钮</zk-button>
        <zk-button size="mini" round>超小按钮</zk-button>
      </app-row>
    </app-case>

  </app-page>
</template>

<script>
import Button from '@/packages/button'
import ButtonGroup from '@/packages/button-group'

export default {
  components: {
    'zk-button': Button,
    'zk-button-group': ButtonGroup
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
}
</style>
