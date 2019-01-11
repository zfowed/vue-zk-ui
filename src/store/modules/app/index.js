
export default {
  namespaced: true,
  state: {
    title: '基于 Element 的 UI',
    windowWidth: 0,
    windowHeight: 0,
    collapse: true,
    nav: [
      {
        label: 'Basic 基本',
        index: '/basic',
        icon: 'fa fa-lg fa-fw fa-bars',
        childers: [
          {
            label: 'Color 颜色',
            index: '/basic/color'
          },
          {
            label: 'Typography 字体',
            index: '/basic/typography'
          },
          {
            label: 'Button 按钮',
            index: '/basic/button'
          }
        ]
      },
      {
        label: 'Form 表单',
        index: '/form',
        icon: 'fa fa-lg fa-fw fa-bars',
        childers: [
          {
            label: 'Input 输入框',
            index: '/form/input'
          },
          {
            label: 'Select 下拉框',
            index: '/form/select'
          },
          {
            label: 'Cascader 级联选择器',
            index: '/form/cascader'
          }
        ]
      },
      {
        label: 'Data 数据',
        index: '/data',
        icon: 'fa fa-lg fa-fw fa-bars',
        childers: [
          {
            label: 'Tag 标签',
            index: '/data/tag'
          },
          {
            label: 'Pagination 分页',
            index: '/data/pagination'
          }
        ]
      },
      {
        label: 'Notice 通知',
        index: '/notice',
        icon: 'fa fa-lg fa-fw fa-bars',
        childers: [
          {
            label: 'Loading 加载层',
            index: '/notice/loading'
          },
          {
            label: 'MessageBox 弹框',
            index: '/notice/message-box'
          }
        ]
      },
      {
        label: 'Others 其他',
        index: '/others',
        icon: 'fa fa-lg fa-fw fa-bars',
        childers: [
          {
            label: 'Dialog 对话框',
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
