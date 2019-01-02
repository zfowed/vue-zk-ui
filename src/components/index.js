import Layout from './Layout'
import Page from './Page'
import Case from './Case'
import Row from './Row'
import Col from './Col'

const components = [
  Layout,
  Page,
  Case,
  Row,
  Col
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component('app' + component.name, component)
  })
}

export {
  Layout,
  Page,
  Case,
  Row,
  Col
}

export default {
  install
}
