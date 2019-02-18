<template>
  <zk-textarea
    v-if="type === 'textarea'"
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
    :validateEvent="validateEvent">
  </zk-textarea>
  <zk-input
    v-else
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
    :validateEvent="validateEvent">
    <slot name="prepend" slot="prepend"></slot>
    <slot name="append" slot="append"></slot>
  </zk-input>
</template>

<script>
import Input from './Input'
import Textarea from './Textarea'

export default {
  name: 'ZkInput',
  components: {
    'zk-input': Input,
    'zk-textarea': Textarea
  },
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
