<template>
  <ul class="menu">
    <template v-for="navSubmenu in navData">
      <li
        :key="navSubmenu.index"
        v-if="!navSubmenu.hide"
        :class="['menu-submenu', {
          'menu-submenu-active': submenuActives[navSubmenu.index]
        }]">
        <div
          class="menu-submenu-title"
          @click="toggleSubmenu(navSubmenu)">
          <span>{{ navSubmenu.label }}</span>
        </div>
        <ul
          class="menu-submenu-children">
          <template v-for="navItem in navSubmenu.childers">
            <li
              v-if="!navItem.hide"
              :key="navItem.index"
              :class="['menu-item', {
                'menu-item-active': getMenuItemIsActive(navItem)
              }]">
              <router-link :to="navItem.index">{{ navItem.label }}</router-link>
            </li>
          </template>
        </ul>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    navData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      submenuActives: {}
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler () {
        for (let index = 0; index < this.navData.length; index++) {
          const navSubmenu = this.navData[index]
          if (this.$route.path.startsWith(navSubmenu.index)) {
            this.toggleSubmenu(navSubmenu, true)
            break
          }
        }
      }
    },
    navData: {
      deep: true,
      immediate: true,
      handler () {
        const submenuActives = {}
        for (let index = 0; index < this.navData.length; index++) {
          const navSubmenu = this.navData[index]
          submenuActives[navSubmenu.index] = this.submenuActives[navSubmenu.index] || false
        }
        this.submenuActives = submenuActives
      }
    }
  },
  methods: {
    getMenuItemIsActive (menuItem) {
      return this.$route.path.startsWith(menuItem.index)
    },
    toggleSubmenu (navSubmenu, value) {
      this.submenuActives[navSubmenu.index] = typeof value !== 'undefined' ? value : !this.submenuActives[navSubmenu.index]
      for (const key of Object.keys(this.submenuActives)) {
        if (navSubmenu.index !== key) {
          this.submenuActives[key] = false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  padding: 16px 19px;
  margin: 0;
  .menu-submenu {
    list-style-type: none;
    padding: 0;
    margin: 0 0 22px 0;
    &:last-child {
      margin-bottom: 0;
    }
    .menu-submenu-title {
      height: 30px;
      line-height: 30px;
      border-radius: 15px;
      padding: 0 14px;
      background-color: #F8F8F8;
      box-sizing: border-box;
      color: #656565;
      font-size: 14px;
      position: relative;
      cursor: pointer;
      transition: color .2s, background-color .2s;
      &:hover {
        background: mix(#F8F8F8, #2D76ED, 90);
      }
      &::before,
      &::after {
        content: '';
        position: absolute;
        background-color: #656565;
        z-index: 1;
        transition: background-color .2s;
      }
      &::before {
        right: 16px;
        top: 16px;
        width: 9px;
        height: 1px;
      }
      &::after {
        right: 20px;
        top: 12px;
        width: 1px;
        height: 9px;
      }
    }
    .menu-submenu-children {
      padding: 0 0 0 44px;
      list-style-type: none;
      .menu-item {
        padding: 0;
        margin: 0;
        height: 0;
        line-height: 0;
        overflow: hidden;
        font-size: 14px;
        color: #656565;
        opacity: 0;
        transition: opacity .2s, margin .2s, height .2s, line-height .2s, color .2s;
        position: relative;
        a {
          color: #656565;
          text-decoration: none;
          &::before {
            content: '';
            position: absolute;
            background-color: #656565;
            z-index: 1;
            left: -13px;
            top: 8px;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            transition: background-color .2s;
          }
          &:hover {
            color: #2D76ED;
            &::before {
              background-color: #2D76ED;
            }
          }
        }
        &.menu-item-active a {
          color: #2D76ED;
          &::before {
            background-color: #2D76ED;
          }
        }
      }
    }
    &.menu-submenu-active {
      .menu-submenu-title {
        color: #FFFFFF;
        background-color: #2D76ED;
        &::before {
          background-color: #FFFFFF;
        }
        &::after {
          display: none;
        }
      }
      .menu-item {
        overflow: visible;
        margin: 22px 0;
        height: 20px;
        line-height: 20px;
        opacity: 1;
      }
    }
  }
}
</style>
