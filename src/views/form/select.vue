<template>
  <app-page title="Select 下拉框" description="当选项过多时，使用下拉菜单展示并选择内容。">

    <app-case title="基础用法" description="适用广泛的基础单选">
      <zk-select class="demo-select" v-model="value" placeholder="请选择">
        <zk-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </zk-select>
    </app-case>

    <app-case title="禁用状态" description="选择器不可用状态">
      <zk-select class="demo-select" v-model="value" disabled placeholder="请选择">
        <zk-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </zk-select>
    </app-case>

    <app-case title="基础多选" description="包含清空按钮，可将选择器清空为初始状态">
      <zk-select class="demo-select" v-model="value2" multiple placeholder="请选择">
        <zk-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </zk-select>
      <zk-select class="demo-select" v-model="value2" multiple collapse-tags placeholder="请选择">
        <zk-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </zk-select>
    </app-case>

    <app-case title="不同尺寸">
      <zk-select class="demo-select" v-model="value" placeholder="请选择">
        <zk-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </zk-select>
      <zk-select class="demo-select" v-model="value" size="medium" placeholder="请选择">
        <zk-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </zk-select>
      <zk-select class="demo-select" v-model="value" size="small" placeholder="请选择">
        <zk-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </zk-select>
      <zk-select class="demo-select" v-model="value" size="mini" placeholder="请选择">
        <zk-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </zk-select>
    </app-case>

    <app-case title="自定义模板" description="可以自定义备选项">
      <zk-select class="demo-select" v-model="value" placeholder="请选择">
        <zk-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; font-size: 13px">{{ item.value }}</span>
        </zk-option>
      </zk-select>
    </app-case>

    <app-case title="可搜索" description="可以利用搜索功能快速查找选项">
      <zk-select class="demo-select" v-model="value" filterable placeholder="请选择">
        <zk-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </zk-select>
    </app-case>

    <app-case title="远程搜索" description="可以利用搜索功能快速查找选项">
      <zk-select class="demo-select" v-model="value" filterable remote :loading="true" placeholder="请选择">
        <zk-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </zk-select>
    </app-case>

    <app-case title="创建条目" description="可以创建并选中选项中不存在的条目">
      <zk-select class="demo-select" v-model="value3" allow-create default-first-option filterable multiple placeholder="请选择">
        <zk-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </zk-select>
    </app-case>

  </app-page>
</template>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
}
</style>

<script>
export default {
  data () {
    return Object.assign({
      value: '',
      value2: [],
      value3: []
    }, this.$mockjs.mock({
      'options|20': [{
        'value': '@email',
        'label': '@cname'
      }]
    }))
  }
}
</script>

<style lang="scss" scoped>
.demo-select {
  width: 180px;
  margin: 0 10px 10px 0;
}
</style>
