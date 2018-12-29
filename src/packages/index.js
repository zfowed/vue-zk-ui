import Button from './button'
import ButtonGroup from './button-group'
import Input from './input'
import Autocomplete from './autocomplete'
import Select from './select'
import Option from './option'
import OptionGroup from './option-group'

const components = [
  Button,
  ButtonGroup,
  Input,
  Autocomplete,
  Select,
  Option,
  OptionGroup
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  Button,
  ButtonGroup,
  Input,
  Autocomplete,
  Select,
  Option,
  OptionGroup
}

export default {
  install
}
