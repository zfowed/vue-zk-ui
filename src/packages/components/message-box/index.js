import './scss/message-box.scss'

import { Input, Button, MessageBox } from 'element-ui'

MessageBox.__Input = Input
MessageBox.__Button = Button

MessageBox.setDefaults({
  customClass: 'zk-message-box',
  center: true
})

export default MessageBox
