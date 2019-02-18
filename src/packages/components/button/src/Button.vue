<template>
  <button
    :class="['zk-button', {
      [`zk-button--${type}`]: type,
      [`zk-button--${size}`]: size,
      'is-disabled': disabled,
      'is-round': round
    }]"
    :disabled="disabled"
    v-bind="$attrs"
    v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ZkButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String
    },
    round: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.zk-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid #DCDCDC;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  -webkit-transition: .1s;
  transition: .1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  padding: 12px 20px;
  font-size: 14px;
  min-width: 100px;
  color: #fff;
  background-color: #2d76ed;
  border-color: #2d76ed;
  & + .zk-button {
    margin-left: 7px;
  }

  &.is-round {
    border-radius: 20px;
  }

  &--link {
    &,
    &:hover,
    &:active,
    &.is-disabled {
      background-color: transparent;
      border-color: transparent;
      color: #2D76ED;
    }
    &:hover {
      text-decoration: underline;
    }
    &.is-disabled {
      cursor: not-allowed;
    }
  }

  &--text {
    &,
    &:hover,
    &:active,
    &.is-disabled {
      color: #656565;
      background-color: transparent;
      border-color: transparent;
    }
    &:hover,
    &:active {
      color: #2D76ED;
    }
    &.is-disabled {
      cursor: not-allowed;
    }
  }

  &--default {
    color: #FFFFFF;
    &:hover {
      background-color: #0960EE;
      border-color: #0960EE;
    }
    &:active {
      background-color: #0C52C4;
      border-color: #0C52C4;
    }
    &.is-disabled {
      background-color: #AAAAAA;
      border-color: #AAAAAA;
      color: #656565;
      cursor: not-allowed;
    }
  }

  &--small {
    padding: 8px 15px;
    font-size: 12px;
    min-width: 90px;
  }

}
</style>
