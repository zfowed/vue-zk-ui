<template>
  <el-row v-bind="$attrs" v-on="$listeners">
    <slot v-for="($slot, key) in $slots" :slot="key" :name="key"></slot>
  </el-row>
</template>

<script>
import 'element-ui/lib/theme-chalk/row.css'
import Row from 'element-ui/lib/row'

export default {
  name: 'Row',
  components: {
    'el-row': Row
  }
}
</script>
