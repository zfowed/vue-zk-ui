<template>
  <div
    :class="['zk-textarea', {
      'is-disabled': disabled
    }]">
    <textarea
      class="zk-textarea__inner"
      :style="{
        'min-height': rows ? `${ 12 + (rows * 21) }px` : '33px',
        'height': rows && `${ 12 + (rows * 21) }px`
      }"
      v-model="currentValue"
      :maxlength="maxlength"
      :minlength="minlength"
      :placeholder="placeholder"
      :clearable="clearable"
      :disabled="disabled"
      :prefixIcon="prefixIcon"
      :suffixIcon="suffixIcon"
      :rows="rows"
      :autosize="autosize"
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
      :validateEvent="validateEvent"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'ZkTextarea',
  props: {
    value: { type: String },
    maxlength: { type: Number },
    minlength: { type: Number },
    placeholder: { type: String },
    clearable: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    prefixIcon: { type: String },
    suffixIcon: { type: String },
    rows: { type: Number, default: 2 },
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
.zk-textarea {
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
  font-size: 14px;
}

.zk-textarea__inner {
  display: block;
  resize: vertical;
  padding: 5px 15px;
  line-height: 1.5;
  box-sizing: border-box;
  width: 100%;
  font-size: inherit;
  color: #656565;
  background-color: #fff;
  background-image: none;
  border: 1px solid #AAAAAA;
  outline: none;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
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

.is-disabled .zk-textarea__inner {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}
</style>
