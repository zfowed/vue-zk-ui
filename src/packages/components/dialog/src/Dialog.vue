<template>
  <el-dialog :width="width" :center="center" v-bind="$attrs" v-on="$listeners">
    <slot v-for="($slot, key) in $slots" :slot="key" :name="key"></slot>
  </el-dialog>
</template>

<script>
import Dialog from 'element-ui/lib/dialog'

export default {
  name: 'ZkDialog',
  components: {
    'el-dialog': Dialog
  },
  props: {
    center: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: '660px'
    }
  }
}
</script>

<style lang="scss">
@import '../../../theme-chalk/variables.scss';
@import "~element-ui/packages/theme-chalk/src/dialog";

.el-dialog {
  border-radius: 0;
  .el-dialog__header {
    text-align: left;
    padding-top: 15px;
    border-bottom: 1px solid $--border-color-base;
    .el-dialog__title {
      text-align: left;
      display: inline;
    }
    .el-message-box__headerbtn {
      font-size: 22px;
      top: 13px;
    }
  }
  .el-dialog__btns {
    direction: rtl;
    .el-button {
      margin-left: 10px;
      &:last-child {
        margin-left: 0;
      }
    }
  }
}
</style>
