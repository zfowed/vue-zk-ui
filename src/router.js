import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Button',
      name: 'Button',
      component: () => import('./views/Button.vue')
    },
    {
      path: '/Input',
      name: 'Input',
      component: () => import('./views/Input.vue')
    },
    {
      path: '/Select',
      name: 'Select',
      component: () => import('./views/Select.vue')
    }
  ]
})
