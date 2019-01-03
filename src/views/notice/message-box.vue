<template>
  <app-page title="MessageBox 弹框" description="模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。">

    <app-case title="消息提示" description="当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。">
      <zk-button type="text" @click="open">点击打开 Message Box</zk-button>
    </app-case>

    <app-case title="确认消息" description="提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。">
      <zk-button type="text" @click="open2">点击打开 Message Box</zk-button>
    </app-case>

    <app-case title="提交内容" description="当用户进行操作时会被触发，中断用户操作，提示用户进行输入的对话框。">
      <zk-button type="text" @click="open3">点击打开 Message Box</zk-button>
    </app-case>

  </app-page>
</template>

<script>
import MessageBox from '@/packages/message-box'
import Button from '@/packages/button'

export default {
  components: {
    'zk-button': Button
  },
  data () {
    return {
      gridData: []
    }
  },
  methods: {

    open () {
      MessageBox.alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {}
      })
    },

    open2 () {
      MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {}, () => {})
    },

    open3 () {
      MessageBox.prompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '邮箱格式不正确'
      }).then(() => {}, () => {})
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
