import Button from './Button'
import ButtonGroup from './ButtonGroup'
import Input from './Input'
import Autocomplete from './Autocomplete'
import Select from './Select'
import Option from './Option'
import OptionGroup from './OptionGroup'

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

/* istanbul ignore if */
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
