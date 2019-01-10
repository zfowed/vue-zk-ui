<template>
  <el-select :popper-class="'zk-select-dropdown ' + popperClass" :value="value" v-bind="$attrs" v-on="$listeners">
    <slot v-for="($slot, key) in $slots" :slot="key" :name="key"></slot>
  </el-select>
</template>

<script>
import Select from 'element-ui/lib/select'

export default {
  name: 'ZkSelect',
  components: {
    'el-select': Select
  },
  props: {
    value: {},
    popperClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import '../../theme-chalk/variables.scss';
@import "~element-ui/packages/theme-chalk/src/icon";
@import "~element-ui/packages/theme-chalk/src/select";

.el-select {
  .el-input {
    .el-input__inner {
      border-radius: 0;
      padding-right: $--input-height;
    }
    .el-input__suffix {
      right: 0;
      background-color: #dcdfe6;
      width: $--input-height;
      transition: background-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      .el-select__caret {
        transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
      .el-icon-arrow-up {
        transform: rotate(90deg);
      }
      .el-icon-arrow-up.is-reverse {
        transform: rotate(180deg);
      }
    }
    &:not(.is-disabled) input:hover + .el-input__suffix,
    &:not(.is-disabled) .el-input__suffix:hover {
      background-color: #AAAAAA;
      .el-select__caret {
        color: #FFFFFF;
      }
    }
    input:focus + .el-input__suffix {
      background-color: $--color-primary !important;
      .el-select__caret {
        color: #FFFFFF;
      }
    }
    &.el-input--medium {
      input {
        padding-right: $--input-medium-height;
      }
      .el-input__suffix {
        width: $--input-medium-height;
      }
    }
    &.el-input--small {
      input {
        padding-right: $--input-small-height;
      }
      .el-input__suffix {
        width: $--input-small-height;
      }
    }
    &.el-input--mini {
      input {
        padding-right: $--input-mini-height;
      }
      .el-input__suffix {
        width: $--input-mini-height;
      }
    }
  }
  &[remote] {
    .el-input {
      input {
        padding: 0 15px;
      }
      .el-input__suffix {
        display: none;
      }
    }
  }
}

.el-select-dropdown.el-popper {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  border-radius: 0;
  border: none;
  .el-select-dropdown__list {
    padding: 0;
  }
  .el-select-dropdown__item {
    border-bottom: 1px solid $--border-color-extra-light;
    &.hover,
    &.selected {
      background: #FFFFFF !important;
      color: $--color-primary !important;
    }
    &:last-child {
      border-bottom: none;
    }
  }
  .popper__arrow {
    display: none;
  }
  .el-select-group__wrap {
    padding: 0;
    &::after {
      display: none;
    }
  }
}
</style>
