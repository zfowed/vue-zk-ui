<template>
  <el-tag :type="type" v-bind="$attrs" v-on="$listeners">
    <slot v-for="($slot, key) in $slots" :slot="key" :name="key"></slot>
  </el-tag>
</template>

<script>
import Tag from 'element-ui/lib/tag'
import '../../select'

export default {
  name: 'ZkTag',
  components: {
    'el-tag': Tag
  },
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style lang="scss">
@import '../../theme-chalk/variables.scss';
@import "~element-ui/packages/theme-chalk/src/tag";

.el-tag + .el-tag {
  margin-left: 10px;
}
.el-tag {
  border-radius: 0;
}
.el-tag--default {
  color: $--color-text-regular;
  background: none;
  border-color: $--border-color-extra-light;
  .el-tag__close {
    color: $--color-text-regular;
    &:hover {
      background: $--color-text-regular;
      color: #ffffff;
    }
  }
}
</style>
