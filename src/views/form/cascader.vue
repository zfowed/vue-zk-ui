<template>
  <app-page title="Cascader 级联选择器" description="当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。">

    <app-case title="基础用法" description="适用广泛的基础单选">
      <zk-cascader :options="options" v-model="selectedOptions"></zk-cascader>
    </app-case>

    <app-case title="禁用选项">
      <zk-cascader disabled :options="options" v-model="selectedOptions"></zk-cascader>
    </app-case>

    <app-case title="仅显示最后一级" description="可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。">
      <zk-cascader :show-all-levels="false" :options="options" v-model="selectedOptions"></zk-cascader>
    </app-case>

    <app-case title="选择即改变" description="点击或移入选项即表示选中该项，可用于选择任意一级菜单的选项。">
      <zk-cascader change-on-select :options="options" v-model="selectedOptions2"></zk-cascader>
    </app-case>

    <app-case title="可搜索" description="可以快捷地搜索选项并选择。">
      <zk-cascader filterable change-on-select :options="options" v-model="selectedOptions2" placeholder="试试搜索："></zk-cascader>
    </app-case>

  </app-page>
</template>

<script>
import Cascader from '@/packages/cascader'

export default {
  components: {
    'zk-cascader': Cascader
  },
  data () {
    return Object.assign({
      selectedOptions: [],
      selectedOptions2: []
    }, this.$mockjs.mock({
      'options|10': [{
        'value': '@guid',
        'label': '@province',
        'children|2': [{
          'value': '@guid',
          'label|+1': ['男', '女'],
          'children|20': [{
            'value': '@guid',
            'label': '@cname'
          }]
        }]
      }]
    }))
  }
}
</script>

<style lang="scss" scoped>
</style>
