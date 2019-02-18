<template>
  <section class="zk-layout" :style="{ height: `${windowHeight}px` }">
    <header class="zk-layout-header">
      <app-header
        class="layout-header-container"
        :title="title"
        :user-name="userName"
        @logout="$router.push('/login/index')">
      </app-header>
    </header>
    <section class="zk-layout-section">
      <aside class="zk-layout-aside">
        <app-menu class="layout-aside-menu" :nav-data="navData"></app-menu>
      </aside>
      <main class="zk-layout-main">
        <app-breadcrumb class="zk-layout-main-breadcrumb" :data="breadcrumbData"></app-breadcrumb>
        <div class="zk-layout-main-view">
          <slot></slot>
        </div>
      </main>
    </section>
  </section>
</template>

<script>
import Menu from './components/Menu.vue'
import Header from './components/Header'
import Breadcrumb from './components/Breadcrumb'

// 兼容addEventListener函数
function addEventListener (ele, event, fn) {
  if (ele.addEventListener) {
    ele.addEventListener(event, fn, false)
  } else {
    ele.attachEvent('on' + event, fn.bind(ele))
  }
}

// 兼容removeEventListener函数
function removeEventListener (ele, event, fn) {
  if (ele.removeEventListener) {
    ele.removeEventListener(event, fn, false)
  } else {
    ele.detachEvent('on' + event, fn.bind(ele))
  }
}

export default {
  name: 'ZkLayout',
  components: {
    'app-menu': Menu,
    'app-header': Header,
    'app-breadcrumb': Breadcrumb
  },
  props: {
    title: {
      type: String,
      default: '网站标题'
    },
    userName: {
      type: String,
      default: '用户名'
    },
    navData: {
      type: Array,
      default: () => []
    },
    breadcrumbData: {
      type: Array,
      default: () => []
    }
  },
  provide: function () {
    return {
      $Layout: this
    }
  },
  data () {
    return {
      windowWidth: 0,
      windowHeight: 0
    }
  },
  methods: {
    onresize () {
      this.windowWidth = document.documentElement.clientWidth
      this.windowHeight = document.documentElement.clientHeight
    }
  },
  created () {
    addEventListener(window, 'resize', this.onresize)
    this.onresize()
  },
  destroyed () {
    removeEventListener(window, 'resize', this.onresize)
  }
}
</script>

<style lang="scss" scoped>
.zk-layout {
  display: flex;
  flex: 1;
  -ms-flex-preferred-size: auto;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  .zk-layout-header {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    height: 90px;
    padding: 0;
    overflow: hidden;
    background-color: #0B7AFB;
    .layout-header-container {
      max-width: 1480px + 198px + 28px;
      padding-right: 0;
    }
  }
  .zk-layout-section {
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    flex: 1;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
  }
  .zk-layout-aside {
    overflow: auto;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    background-color: #FFFFFF;
    border-right: 1px solid #F8F8F8;
    box-sizing: border-box;
    width: 198px;
  }
  .zk-layout-main {
    display: block;
    flex: 1;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
    position: relative;
    background-color: #F8F8F8;
    padding: 20px 28px;
    .zk-layout-main-breadcrumb {
      margin-bottom: 10px;
    }
    .zk-layout-main-view {
      width: 1480px;
      background-color: #FFF;
      padding: 20px;
      box-sizing: border-box;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        right: -28px;
        width: 28px;
        height: 28px;
        top: 0;
        z-index: 1;
      }
    }
  }
}
</style>
