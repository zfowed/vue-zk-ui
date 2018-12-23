<template>
  <el-container>
    <el-aside>
      <el-menu router>
        <el-submenu index="1">
          <span slot="title">组件</span>
          <el-menu-item index="/Button">Button 按钮</el-menu-item>
          <el-menu-item index="/Input">Input 输入框</el-menu-item>
          <el-menu-item index="/Select">Select 下拉框</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
}
</style>
