import './scss/message-box.scss'

import { MessageBox } from 'element-ui'

MessageBox.setDefaults({
  center: true
})

function M (options = {}, callback) {
  options.customClass = 'zk-message-box ' + (options.customClass || '')
  return MessageBox(options, callback)
}

M.setDefaults = function (defaults = {}) {
  const self = this === M ? MessageBox : this
  defaults.customClass = 'zk-message-box ' + (defaults.customClass || '')
  return MessageBox.setDefaults.call(self, defaults)
}

M.alert = function (message, title, options = {}) {
  const self = this === M ? MessageBox : this
  options.customClass = 'zk-message-box ' + (options.customClass || '')
  return MessageBox.alert.call(self, message, title, options)
}

M.confirm = function (message, title, options = {}) {
  const self = this === M ? MessageBox : this
  options.customClass = 'zk-message-box ' + (options.customClass || '')
  return MessageBox.confirm.call(self, message, title, options)
}

M.prompt = function (message, title, options = {}) {
  const self = this === M ? MessageBox : this
  options.customClass = 'zk-message-box ' + (options.customClass || '')
  return MessageBox.prompt.call(self, message, title, options)
}

M.close = function () {
  const self = this === M ? MessageBox : this
  return MessageBox.close.call(self)
}

export default M
