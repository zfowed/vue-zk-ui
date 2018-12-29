<template>
  <app-page title="Color 色彩" description="为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。">
    <h2>主色</h2>
    <p>主要品牌颜色</p>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="demo-color-box bg-primary">
          <span>主色</span>
          <div class="value">#0B7AFB</div>
        </div>
      </el-col>
    </el-row>
    <h2>辅助色</h2>
    <p>除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。</p>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="demo-color-box bg-success">
          <span>成功</span>
          <div class="value">#67C23A</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="demo-color-box bg-warning">
          <span>警告</span>
          <div class="value">#E6A23C</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="demo-color-box bg-danger">
          <span>危险</span>
          <div class="value">#F56C6C</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="demo-color-box bg-info">
          <span>信息</span>
          <div class="value">#909399</div>
        </div>
      </el-col>
    </el-row>
    <h2>中性色</h2>
    <p>中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。</p>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="demo-color-box bg-text-primary">
          <span>主要文字</span>
          <div class="value">#414141</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="demo-color-box bg-text-regular">
          <span>常规文字</span>
          <div class="value">#606266</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="demo-color-box bg-text-secondary">
          <span>次要文字</span>
          <div class="value">#909399</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="demo-color-box bg-text-placeholder">
          <span>占位文字</span>
          <div class="value">#aaaaaa</div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="demo-color-box bg-border-color-base">
          <span>一级边框</span>
          <div class="value">#dcdfe6</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="demo-color-box bg-border-color-light">
          <span>二级边框</span>
          <div class="value">#e4e7ed</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="demo-color-box bg-border-color-lighter">
          <span>三级边框</span>
          <div class="value">#ebeef5</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="demo-color-box bg-border-color-extra-light">
          <span>四级边框</span>
          <div class="value">#f2f6fc</div>
        </div>
      </el-col>
    </el-row>
  </app-page>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../packages/theme-chalk/variables.scss';

.demo-color-box {
  border-radius: 4px;
  padding: 20px;
  margin: 5px 0;
  height: 74px;
  box-sizing: border-box;
  color: #fff;
  font-size: 14px;
  .value {
    font-size: 12px;
    opacity: .69;
    line-height: 24px;
  }
}
.bg-primary {
  background-color: $--color-primary;
}
.bg-success {
  background-color: $--color-success;
}
.bg-warning {
  background-color: $--color-warning;
}
.bg-danger {
  background-color: $--color-danger;
}
.bg-info {
  background-color: $--color-info;
}

.bg-text-primary {
  background-color: $--color-text-primary;
}
.bg-text-regular {
  background-color: $--color-text-regular;
}
.bg-text-secondary {
  background-color: $--color-text-secondary;
}
.bg-text-placeholder {
  background-color: $--color-text-placeholder;
}
[class*=" bg-border-"] {
  color: $--color-text-primary;
}
.bg-border-color-base {
  background-color: $--border-color-base;
}
.bg-border-color-light {
  background-color: $--border-color-light;
}
.bg-border-color-lighter {
  background-color: $--border-color-lighter;
}
.bg-border-color-extra-light {
  background-color: $--border-color-extra-light;
}
</style>
