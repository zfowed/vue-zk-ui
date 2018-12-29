import Page from './Page'
import Case from './Case'

const components = [
  Page,
  Case
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component('app' + component.name, component)
  })
}

export {
  Page,
  Case
}

export default {
  install
}
