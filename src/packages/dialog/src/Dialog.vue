<template>
  <el-dialog :custom-class="'zk-dialog ' + customClass" :center="center" v-bind="$attrs" v-on="$listeners">
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
    customClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../theme-chalk/variables.scss';
@import "~element-ui/packages/theme-chalk/src/dialog";
</style>

<style lang="scss">
@import '../../theme-chalk/variables.scss';
.zk-dialog {
  /deep/ {
    .el-dialog__header {
      // text-align: center;
      color: #FFFFFF;
      padding: 0 20px;
      height: 44px;
      line-height: 44px;
      // background: linear-gradient(180deg, $--color-primary, #0b54fb);
      background: linear-gradient(180deg, $--color-primary, mix($--color-primary, black, 80%));
      .el-dialog__title {
        color: #FFFFFF;
        font-size: 16px;
      }
      .el-dialog__headerbtn {
        top: 14px;
        .el-dialog__close {
          color: #FFFFFF;
        }
      }
    }
  }
}
</style>
