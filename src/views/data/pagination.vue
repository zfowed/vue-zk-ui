<template>
  <app-page title="Pagination 分页" description="当数据量过多时，使用分页分解数据。">

    <app-case title="基础用法">
      <zk-pagination
        layout="prev, pager, next"
        :total="1000">
      </zk-pagination>
    </app-case>

    <app-case title="完整功能">
      <zk-pagination
        :current-page="1"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </zk-pagination>
      <zk-pagination
        background
        :current-page="1"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </zk-pagination>
    </app-case>

  </app-page>
</template>

<script>
import Pagination from '@/packages/pagination'

export default {
  components: {
    'zk-pagination': Pagination
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
