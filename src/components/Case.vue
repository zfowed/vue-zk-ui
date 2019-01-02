<template>
  <div class="app-case">
    <h2 v-if="title">{{ title }}</h2>
    <p v-if="description">{{ description }}</p>
    <el-card>
      <slot></slot>
    </el-card>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/card.css'
import { Card } from 'element-ui'

export default {
  name: 'Case',
  components: {
    'el-card': Card
  },
  props: {
    title: String,
    description: String
  }
}
</script>

<style>

</style>
