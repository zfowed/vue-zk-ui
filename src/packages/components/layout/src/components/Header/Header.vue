<template>
  <div class="header-container">
    <img class="header-logo" v-if="logo" :src="logo" alt="logo">
    <span class="header-title">{{ title }}</span>
    <div class="header-user" v-if="userName">
      <span class="header-user-welcome">欢迎你</span>
      <span class="header-user-name">{{ userName }}</span>
      <span class="header-user-logout" @click="$emit('logout')">
        <img src="./assets/logout.png" alt="">
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    logo: {
      type: String
    },
    title: {
      type: String
    },
    userName: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 90px;
  line-height: 90px;
  overflow: hidden;
  background-color: #0B7AFB;
  padding: 0 33px;
  box-sizing: border-box;
  font-size: 16px;
  color: #FFFFFF;
}
.header-logo {
  height: 35px;
  vertical-align: middle;
  margin-right: 76px;
}
.header-title {
  // margin-left: 76px;
}
.header-user {
  float: right;
  .header-user-welcome {
    vertical-align: middle;
  }
  .header-user-name {
    margin-left: 36px;
    vertical-align: middle;
  }
  .header-user-logout {
    margin-left: 18px;
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    img {
      width: 20px;
      height: 20px;
      display: block;
    }
  }
}
</style>
