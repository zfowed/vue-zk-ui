<template>
  <div class="breadcrumb">
    <div class="breadcrumb-item">当前位置：</div>
    <template v-for="(item, index) in data">
      <template v-if="index < data.length - 1">
        <div class="breadcrumb-item" :key="'t_' + item.href">
          <router-link :to="item.href">{{ item.label }}</router-link>
        </div>
        <div class="breadcrumb-item" :key="'f_' + item.href">
          <img class="icon-img" src="./assets/i.png" alt=">">
        </div>
      </template>
      <template v-else>
        <div class="breadcrumb-item" :key="'t_' + item.href">{{ item.label }}</div>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  height: 18px;
  line-height: 18px;
  border-left: 4px solid #0B7AFB;
  padding-left: 10px;
  color: #656565;
  font-size: 14px;
  .breadcrumb-item {
    display: inline-block;
    margin-right: 10px;
    a {
      color: #0B7AFB;
      text-decoration: none;
      &:hover {
        color: #0B7AFB;
      }
    }
  }
}
.icon-img {
  width: 7px;
  height: 10px;
  display: block;
}
</style>
