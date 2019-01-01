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
      path: '/others/dialog',
      component: () => import(/* webpackChunkName: "views_others_dialog" */ './views/others/dialog.vue')
    },

    {
      path: '/**',
      redirect: '/'
    }
  ]
})
