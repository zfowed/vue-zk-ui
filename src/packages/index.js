import Icon from './icon'
import Button from './button'
import ButtonGroup from './button-group'
import Input from './input'
import Autocomplete from './autocomplete'
import Select from './select'
import Option from './option'
import OptionGroup from './option-group'
import Cascader from './cascader'
import Dialog from './dialog'
import Pagination from './pagination'
import Tag from './tag'
import MessageBox from './message-box'
import Loading from './loading'

const components = [
  Icon,
  Button,
  ButtonGroup,
  Input,
  Autocomplete,
  Select,
  Option,
  OptionGroup,
  Cascader,
  Dialog,
  Pagination,
  Tag,
  MessageBox,
  Loading
]

const install = function (Vue, opts = {}) {
  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  }
  components.forEach(component => {
    if (component.install) {
      Vue.use(component)
    }
  })
  Vue.use(Loading.directive)
  Vue.prototype.$msgbox = MessageBox
  Vue.prototype.$alert = MessageBox.alert
  Vue.prototype.$confirm = MessageBox.confirm
  Vue.prototype.$prompt = MessageBox.prompt
  Vue.prototype.$loading = Loading.service
}
// Loading

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  Icon,
  Button,
  ButtonGroup,
  Input,
  Autocomplete,
  Select,
  Option,
  OptionGroup,
  Cascader,
  Dialog,
  Pagination,
  Tag,
  MessageBox,
  Loading
}

export default {
  install
}
