<template>
  <app-page title="Input 输入框" description="通过鼠标或键盘输入字符">

    <app-case title="基础用法">
      <zk-input class="demo-input" placeholder="请输入内容" />
    </app-case>

    <app-case title="禁用状态">
      <zk-input class="demo-input" placeholder="请输入内容" disabled />
    </app-case>

    <app-case title="文本域" description="用于输入多行文本信息">
      <zk-input class="demo-textarea" type="textarea" :rows="3" placeholder="请输入内容"></zk-input>
    </app-case>

    <app-case title="复合型输入框">
      <app-row>
        <zk-input placeholder="请输入内容">
          <template slot="prepend">Http://</template>
        </zk-input>
      </app-row>
      <app-row>
        <zk-input placeholder="请输入内容">
          <template slot="append">.com</template>
        </zk-input>
      </app-row>
    </app-case>

    <app-case title="不同尺寸">
      <zk-input class="demo-input" size="large" placeholder="大型输入框"></zk-input>
      <zk-input class="demo-input" placeholder="默认输入框"></zk-input>
      <zk-input class="demo-input" size="small" placeholder="小型输入框"></zk-input>
    </app-case>

  </app-page>
</template>

<script>
import Input from '@/packages/components/input'

export default {
  components: {
    'zk-input': Input
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
}
.demo-input {
  width: 180px;
  margin: 0 10px 10px 0;
}
.demo-textarea {
  width: 414px;
  margin: 0 10px 10px 0;
}
</style>
