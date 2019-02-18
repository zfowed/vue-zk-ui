<template>
  <div
    :class="['zk-input', {
      'is-disabled': disabled,
      [`zk-input--${size}`]: size,
      'zk-input-group': $slots.prepend || $slots.append
    }]">
    <div v-if="$slots.prepend" class="zk-input-group__prepend">
      <slot name="prepend"></slot>
    </div>
    <input
      class="zk-input__inner"
      v-model="currentValue"
      :type="type"
      :maxlength="maxlength"
      :minlength="minlength"
      :placeholder="placeholder"
      :clearable="clearable"
      :disabled="disabled"
      :size="size"
      :prefixIcon="prefixIcon"
      :suffixIcon="suffixIcon"
      :autocomplete="autocomplete"
      :name="name"
      :readonly="readonly"
      :max="max"
      :min="min"
      :step="step"
      :resize="resize"
      :autofocus="autofocus"
      :form="form"
      :label="label"
      :tabindex="tabindex"
      :validateEvent="validateEvent" />
    <div v-if="$slots.append" class="zk-input-group__append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZkInput',
  props: {
    type: { type: String, default: 'text' },
    value: { type: String },
    maxlength: { type: Number },
    minlength: { type: Number },
    placeholder: { type: String },
    clearable: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    size: { type: String },
    prefixIcon: { type: String },
    suffixIcon: { type: String },
    autosize: { type: [Object, Boolean], default: false },
    autocomplete: { type: String, default: 'off' },
    name: { type: String },
    readonly: { type: String },
    max: { },
    min: { },
    step: { },
    resize: { },
    autofocus: { type: Boolean, default: false },
    form: { type: String },
    label: { type: String },
    tabindex: { type: String },
    validateEvent: { type: Boolean, default: true }
  },
  data () {
    return {
      currentValue: ''
    }
  },
  watch: {
    value () {
      this.currentValue = this.value
    },
    currentValue () {
      this.$emit('input', this.currentValu)
    }
  }
}
</script>

<style lang="scss" scoped>
.zk-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
}
.zk-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border: 1px solid #AAAAAA;
  box-sizing: border-box;
  color: #656565;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  width: 100%;
  &::placeholder{
    color: #AAAAAA;
  }
  &:hover {
    border-color: #AAAAAA;
  }
  &:focus {
    outline: none;
    border-color: #2D76ED;
  }
}

.is-disabled .zk-input__inner {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}

.zk-input--large .zk-input__inner {
  height: 52px;
  line-height: 52px;
}
.zk-input--small .zk-input__inner {
  height: 30px;
  line-height: 30px;
}

.zk-input-group {
  line-height: normal;
  display: inline-table;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  .zk-input-group__prepend,
  .zk-input-group__append {
    background-color: #f5f7fa;
    color: #909399;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border: 1px solid #AAAAAA;
    padding: 0 20px;
    width: 1px;
    white-space: nowrap;
  }
  .zk-input-group__prepend {
    border-right: 0;
  }
  .zk-input-group__append {
    border-left: 0;
  }
  .zk-input__inner {
    vertical-align: middle;
    display: table-cell;
  }
}
</style>
