<template>
  <div>

    <h1>Select 下拉框</h1>
    <p>当选项过多时，使用下拉菜单展示并选择内容。</p>

    <h2>基础用法</h2>
    <p>适用广泛的基础单选</p>
    <el-card>
      <zk-select v-model="value" placeholder="请选择">
        <zk-option label="黄金糕" value="选项1" />
        <zk-option label="双皮奶" value="选项2" />
      </zk-select>
    </el-card>

    <h2>禁用状态</h2>
    <p>选择器不可用状态</p>
    <el-card>
      <zk-select v-model="value" disabled placeholder="请选择">
        <zk-option label="黄金糕" value="选项1" />
        <zk-option label="双皮奶" value="选项2" />
      </zk-select>
    </el-card>

    <h2>基础多选</h2>
    <p>包含清空按钮，可将选择器清空为初始状态</p>
    <el-card>
      <zk-select v-model="value2" multiple placeholder="请选择">
        <zk-option label="黄金糕" value="选项1" />
        <zk-option label="双皮奶" value="选项2" />
      </zk-select>
    </el-card>

    <h2>不同尺寸</h2>
    <el-card>
      <el-row>
        <zk-select v-model="value2" placeholder="默认下拉框">
          <zk-option label="黄金糕" value="选项1" />
          <zk-option label="双皮奶" value="选项2" />
        </zk-select>
      </el-row>
      <el-row>
        <zk-select v-model="value2" size="medium" placeholder="中等下拉框">
          <zk-option label="黄金糕" value="选项1" />
          <zk-option label="双皮奶" value="选项2" />
        </zk-select>
      </el-row>
      <el-row>
        <zk-select v-model="value2" size="small" placeholder="小型下拉框">
          <zk-option label="黄金糕" value="选项1" />
          <zk-option label="双皮奶" value="选项2" />
        </zk-select>
      </el-row>
      <el-row>
        <zk-select v-model="value2" size="mini" placeholder="超小下拉框">
          <zk-option label="黄金糕" value="选项1" />
          <zk-option label="双皮奶" value="选项2" />
        </zk-select>
      </el-row>
    </el-card>

    <h2>自定义模板</h2>
    <p>可以自定义备选项</p>
    <el-card>
      <zk-select v-model="value" placeholder="请选择">
        <zk-option label="黄金糕" value="选项1">
          <span style="float: left">黄金糕</span>
          <span style="float: right; font-size: 13px">选项1</span>
        </zk-option>
        <zk-option label="双皮奶" value="选项2">
          <span style="float: left">双皮奶</span>
          <span style="float: right; font-size: 13px">选项2</span>
        </zk-option>
      </zk-select>
    </el-card>

    <h2>分组</h2>
    <p>备选项进行分组展示</p>
    <el-card>
      <zk-select v-model="value" placeholder="请选择">
        <zk-option-group label="好吃的">
          <zk-option label="黄金糕" value="选项1" />
        </zk-option-group>
        <zk-option-group label="不好吃的">
          <zk-option label="双皮奶" value="选项2" />
        </zk-option-group>
      </zk-select>
    </el-card>

  </div>
</template>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
}
</style>

<script>
export default {
  data () {
    return {
      value: '',
      value2: []
    }
  }
}
</script>
