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
  MessageBox
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
    Vue.prototype.$msgbox = MessageBox
    Vue.prototype.$alert = MessageBox.alert
    Vue.prototype.$confirm = MessageBox.confirm
    Vue.prototype.$prompt = MessageBox.prompt
  })
}

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
  MessageBox
}

export default {
  install
}
