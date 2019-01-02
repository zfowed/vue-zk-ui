<template>
  <el-col v-bind="$attrs" v-on="$listeners">
    <slot v-for="($slot, key) in $slots" :slot="key" :name="key"></slot>
  </el-col>
</template>

<script>
import 'element-ui/lib/theme-chalk/col.css'
import Col from 'element-ui/lib/col'

export default {
  name: 'Col',
  components: {
    'el-col': Col
  }
}
</script>
