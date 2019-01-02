import MessageBox from 'element-ui/lib/message-box'

import './scss/message-box.scss'

MessageBox.setDefaults({
  center: true
})

function M (options = {}, callback) {
  options.customClass = 'zk-message-box ' + (options.customClass || '')
  return MessageBox(options, callback)
}

M.setDefaults = function (defaults = {}) {
  defaults.customClass = 'zk-message-box ' + (defaults.customClass || '')
  return MessageBox.setDefaults(defaults)
}

M.alert = function (message, title, options = {}) {
  options.customClass = 'zk-message-box ' + (options.customClass || '')
  return MessageBox.alert(message, title, options)
}

M.confirm = function (message, title, options = {}) {
  options.customClass = 'zk-message-box ' + (options.customClass || '')
  return MessageBox.confirm(message, title, options)
}

M.prompt = function (message, title, options = {}) {
  options.customClass = 'zk-message-box ' + (options.customClass || '')
  return MessageBox.prompt(message, title, options)
}

M.close = function () {
  return MessageBox.close()
}

export default M
