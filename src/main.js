import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 初始 CSS 样式
import 'normalize.css'

import './plugins/element.js'
import './plugins/fontawesome.js'

import Components from './components'
import ZkUI from './packages/index'

Vue.use(Components)
Vue.use(ZkUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default undefined
