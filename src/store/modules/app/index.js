
export default {
  namespaced: true,
  state: {
    title: '基于 Element 的 UI',
    windowWidth: 0,
    windowHeight: 0,
    collapse: true,
    nav: [
      {
        label: '基本',
        index: '/basic',
        childers: [
          {
            label: '布局',
            index: '/basic/layout'
          },
          {
            label: '颜色',
            index: '/basic/color'
          },
          {
            label: '字体',
            index: '/basic/typography'
          },
          {
            label: '按钮',
            index: '/basic/button'
          }
        ]
      },
      {
        label: '表单',
        index: '/form',
        childers: [
          {
            label: '输入框',
            index: '/form/input'
          },
          {
            label: '下拉框',
            index: '/form/select'
          }
        ]
      },
      {
        label: '通知',
        index: '/notice',
        childers: [
          {
            label: '加载层',
            index: '/notice/loading'
          },
          {
            label: '弹框',
            index: '/notice/message-box'
          }
        ]
      },
      {
        label: '其他',
        index: '/others',
        childers: [
          {
            label: '对话框',
            index: '/others/dialog'
          }
        ]
      }
    ]
  },
  getters: {
  },
  mutations: {
    setWindowWidth (state, windowWidth) {
      state.windowWidth = windowWidth
    },
    setWindowHeight (state, windowHeight) {
      state.windowHeight = windowHeight
    },
    setCollapse (state, collapse) {
      state.collapse = collapse
    }
  },
  actions: {
  }
}
