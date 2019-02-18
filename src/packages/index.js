import Button from './components/button'
import Input from './components/input'
import Select from './components/select'
import Option from './components/option'
import OptionGroup from './components/option-group'
import Dialog from './components/dialog'
import MessageBox from './components/message-box'
import Loading from './components/loading'

const installs = [
  Button,
  Input,
  Select,
  Option,
  OptionGroup,
  Dialog,
  MessageBox,
  Loading
]

const install = function (Vue, opts = {}) {

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  }
  installs.forEach(item => {
    if (item.install) {
      Vue.use(item)
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
  Button,
  Input,
  Select,
  Option,
  OptionGroup,
  Dialog,
  MessageBox,
  Loading
}

export default {
  install,
  Button,
  Input,
  Select,
  Option,
  OptionGroup,
  Dialog,
  MessageBox,
  Loading
}
