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
export default {
  name: 'Case',
  props: {
    title: String,
    description: String
  }
}
</script>

<style>

</style>
