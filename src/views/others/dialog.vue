<template>
  <app-page title="Dialog 对话框" description="在保留当前页面状态的情况下，告知用户并承载相关操作。">

    <app-case title="基础用法" description="Dialog 弹出一个对话框，适合需要定制性更大的场景。">
      <zk-button type="text" @click="dialogVisible = true">点击打开 Dialog</zk-button>
    </app-case>

    <app-case title="自定义内容" description="Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 Element Table 和 Form 组件的两个样例。">
      <zk-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</zk-button>
      <zk-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</zk-button>
    </app-case>

    <zk-dialog
      title="提示"
      :visible.sync="dialogVisible">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <zk-button @click="dialogVisible = false">取 消</zk-button>
        <zk-button type="primary" @click="dialogVisible = false">确 定</zk-button>
      </span>
    </zk-dialog>

    <zk-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </zk-dialog>

    <zk-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <zk-input v-model="form.name" autocomplete="off"></zk-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <zk-select v-model="form.region" placeholder="请选择活动区域">
            <zk-option label="区域一" value="shanghai"></zk-option>
            <zk-option label="区域二" value="beijing"></zk-option>
          </zk-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <zk-button @click="dialogFormVisible = false">取 消</zk-button>
        <zk-button type="primary" @click="dialogFormVisible = false">确 定</zk-button>
      </div>
    </zk-dialog>

  </app-page>
</template>

<script>

import 'element-ui/lib/theme-chalk/table.css'
import 'element-ui/lib/theme-chalk/table-column.css'
import 'element-ui/lib/theme-chalk/form.css'
import { Table, TableColumn, Form, FormItem } from 'element-ui'

import Button from '@/packages/button'
import Input from '@/packages/input'
import Select from '@/packages/select'
import Option from '@/packages/option'
import Dialog from '@/packages/dialog'

export default {
  components: {
    'zk-input': Input,
    'zk-dialog': Dialog,
    'zk-button': Button,
    'zk-select': Select,
    'zk-option': Option,
    'el-table': Table,
    'el-table-column': TableColumn,
    'el-form': Form,
    'el-form-item': FormItem
  },
  data () {
    return {
      dialogVisible: false,
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
