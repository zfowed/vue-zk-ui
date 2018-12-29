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
      component: () => import('./views/basic/color.vue')
    },
    {
      path: '/basic/button',
      component: () => import('./views/basic/button.vue')
    },
    {
      path: '/form/input',
      component: () => import('./views/form/input.vue')
    },
    {
      path: '/form/select',
      component: () => import('./views/form/select.vue')
    },
    {
      path: '/**',
      redirect: '/'
    }
  ]
})
