import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const RouterView = { render: h => h('router-view') }

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/basic/color'
    },
    {
      path: '/basic',
      meta: { title: '基本' },
      component: RouterView,
      children: [
        {
          path: '',
          redirect: 'layout'
        },
        {
          path: 'layout',
          meta: { title: '布局' },
          component: () => import(/* webpackChunkName: "views_basic_layout" */ './views/basic/layout.vue')
        },
        {
          path: 'color',
          meta: { title: '颜色' },
          component: () => import(/* webpackChunkName: "views_basic_color" */ './views/basic/color.vue')
        },
        {
          path: 'typography',
          meta: { title: '字体' },
          component: () => import(/* webpackChunkName: "views_basic_typography" */ './views/basic/typography.vue')
        },
        {
          path: 'button',
          meta: { title: '按钮' },
          component: () => import(/* webpackChunkName: "views_basic_button" */ './views/basic/button.vue')
        }
      ]
    },
    {
      path: '/form',
      meta: { title: '表单' },
      component: RouterView,
      children: [
        {
          path: '',
          redirect: 'input'
        },
        {
          path: 'input',
          meta: { title: '输入框' },
          component: () => import(/* webpackChunkName: "views_form_input" */ './views/form/input.vue')
        },
        {
          path: 'select',
          meta: { title: '选择框' },
          component: () => import(/* webpackChunkName: "views_form_select" */ './views/form/select.vue')
        }
      ]
    },
    {
      path: '/notice',
      meta: { title: '通知' },
      component: RouterView,
      children: [
        {
          path: '',
          redirect: 'loading'
        },
        {
          path: 'loading',
          meta: { title: '加载层' },
          component: () => import(/* webpackChunkName: "views_notice_loading" */ './views/notice/loading.vue')
        },
        {
          path: 'message-box',
          meta: { title: '弹出层' },
          component: () => import(/* webpackChunkName: "views_notice_message-box" */ './views/notice/message-box.vue')
        }
      ]
    },
    {
      path: '/others',
      meta: { title: '其他' },
      component: RouterView,
      children: [
        {
          path: '',
          redirect: 'loading'
        },
        {
          path: 'dialog',
          meta: { title: '对话框' },
          component: () => import(/* webpackChunkName: "views_others_dialog" */ './views/others/dialog.vue')
        }
      ]
    },

    {
      path: '/**',
      redirect: '/'
    }
  ]
})
