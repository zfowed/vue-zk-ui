<template>
  <el-pagination :prev-text="prevText" :next-text="nextText" v-bind="$attrs" v-on="$listeners">
    <slot v-for="($slot, key) in $slots" :slot="key" :name="key"></slot>
  </el-pagination>
</template>

<script>
import Pagination from 'element-ui/lib/pagination'
import '../../select'

export default {
  name: 'ZkPagination',
  components: {
    'el-pagination': Pagination
  },
  props: {
    prevText: {
      type: String,
      default: '上一页'
    },
    nextText: {
      type: String,
      default: '下一页'
    }
  }
}
</script>

<style lang="scss">
@import '../../theme-chalk/variables.scss';
@import "~element-ui/packages/theme-chalk/src/pagination";
.el-pagination {
  font-weight: normal;
  .el-pager {
    .number {
      border: 1px solid $--color-text-placeholder;
      margin: 0 5px;
      color: $--color-text-regular;
      min-width: 30px;
      background: none;
      &.active {
        border-color: $--color-primary
      }
    }
    .btn-next {

    }
  }
  &.is-background {
    .btn-prev,
    .btn-next {
      padding: 0 8px;
    }
    .el-pager {
      .number {
        border: none;
      }
    }
  }
  .el-pagination__sizes .el-input {
    width: 120px;
    .el-input__inner {
      padding-right: 33px;
      border-radius: 0;
    }
    .el-input__suffix {
      transform: none;
    }
  }
  .el-pagination__jump .el-input__inner {
    border-radius: 0 !important;
  }
}
</style>
