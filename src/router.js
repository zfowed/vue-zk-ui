import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/basic/color'
    },

    {
      path: '/basic/color',
      component: () => import(/* webpackChunkName: "views_basic_color" */ './views/basic/color.vue')
    },
    {
      path: '/basic/typography',
      component: () => import(/* webpackChunkName: "views_basic_typography" */ './views/basic/typography.vue')
    },
    {
      path: '/basic/button',
      component: () => import(/* webpackChunkName: "views_basic_button" */ './views/basic/button.vue')
    },

    {
      path: '/form/input',
      component: () => import(/* webpackChunkName: "views_form_input" */ './views/form/input.vue')
    },
    {
      path: '/form/select',
      component: () => import(/* webpackChunkName: "views_form_select" */ './views/form/select.vue')
    },
    {
      path: '/form/cascader',
      component: () => import(/* webpackChunkName: "views_form_cascader" */ './views/form/cascader.vue')
    },

    {
      path: '/data/pagination',
      component: () => import(/* webpackChunkName: "views_data_pagination" */ './views/data/pagination.vue')
    },
    {
      path: '/data/tag',
      component: () => import(/* webpackChunkName: "views_data_tag" */ './views/data/tag.vue')
    },

    {
      path: '/notice/message-box',
      component: () => import(/* webpackChunkName: "views_notice_message-box" */ './views/notice/message-box.vue')
    },
    {
      path: '/notice/loading',
      component: () => import(/* webpackChunkName: "views_notice_loading" */ './views/notice/loading.vue')
    },

    {
      path: '/others/dialog',
      component: () => import(/* webpackChunkName: "views_others_dialog" */ './views/others/dialog.vue')
    },

    {
      path: '/**',
      redirect: '/'
    }
  ]
})
