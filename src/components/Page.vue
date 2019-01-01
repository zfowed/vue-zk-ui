<template>
  <section class="app-page">
    <h1 v-if="title">{{ title }}</h1>
    <p v-if="description">{{ description }}</p>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'Page',
  props: {
    title: String,
    description: String
  }
}
</script>

<style>

</style>
