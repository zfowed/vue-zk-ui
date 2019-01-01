<template>
  <app-page title="Input 输入框" description="通过鼠标或键盘输入字符">

    <app-case title="基础用法">
      <zk-input class="demo-input" placeholder="请输入内容" />
    </app-case>

    <app-case title="禁用状态">
      <zk-input class="demo-input" placeholder="请输入内容" disabled />
    </app-case>

    <app-case title="可清空">
      <zk-input class="demo-input" placeholder="请输入内容" clearable />
    </app-case>

    <app-case title="带 icon 的输入框">
      <zk-input class="demo-input" placeholder="请选择日期" suffix-icon="el-icon-date"></zk-input>
      <zk-input class="demo-input" placeholder="请输入内容" prefix-icon="el-icon-search"></zk-input>
    </app-case>

    <app-case title="文本域" description="用于输入多行文本信息，通过将 type 属性的值指定为 textarea。">
      <zk-input class="demo-textarea" type="textarea" :rows="2" placeholder="请输入内容"></zk-input>
    </app-case>

    <app-case title="可自适应文本高度的文本域">
      <zk-input class="demo-textarea" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容"></zk-input>
    </app-case>

    <app-case title="复合型输入框">
      <el-row>
        <zk-input placeholder="请输入内容">
          <template slot="prepend">Http://</template>
        </zk-input>
      </el-row>
      <el-row>
        <zk-input placeholder="请输入内容">
          <template slot="append">.com</template>
        </zk-input>
      </el-row>
      <el-row>
        <zk-input placeholder="请输入内容">
          <zk-select style="width: 120px;" value="1" slot="prepend" placeholder="请选择">
            <zk-option label="餐厅名" value="1"></zk-option>
            <zk-option label="订单号" value="2"></zk-option>
            <zk-option label="用户电话" value="3"></zk-option>
          </zk-select>
          <zk-button slot="append" icon="el-icon-search"></zk-button>
        </zk-input>
      </el-row>
    </app-case>

    <app-case title="不同尺寸">
      <zk-input class="demo-input" placeholder="默认输入框" suffix-icon="el-icon-date"></zk-input>
      <zk-input class="demo-input" size="medium" placeholder="中等输入框" suffix-icon="el-icon-date"></zk-input>
      <zk-input class="demo-input" size="small" placeholder="小型输入框" suffix-icon="el-icon-date"></zk-input>
      <zk-input class="demo-input" size="mini" placeholder="超小输入框" suffix-icon="el-icon-date"></zk-input>
    </app-case>

    <app-case title="带输入建议" description="根据输入内容提供对应的输入建议">
      <zk-autocomplete
        class="demo-input"
        placeholder="激活即列出输入建议"
        :fetch-suggestions="(s, c) => c([{value: '三全鲜食（北新泾店）', address: '长宁区新渔路144号' }, { value: '首尔炸鸡（仙霞路）', address: '上海市长宁区淞虹路661号' }])">
      </zk-autocomplete>
      <zk-autocomplete
        class="demo-input"
        placeholder="自定义模板"
        :fetch-suggestions="(s, c) => c([{value: '三全鲜食（北新泾店）', address: '长宁区新渔路144号' }, { value: '首尔炸鸡（仙霞路）', address: '上海市长宁区淞虹路661号' }])">
        <template slot-scope="{ item }">
          <div>{{ item.value }}</div>
          <span style="font-size: 12px;color: #b4b4b4;">{{ item.address }}</span>
        </template>
      </zk-autocomplete>
      <zk-autocomplete
        class="demo-input"
        placeholder="远程搜索"
        :fetch-suggestions="() => null">
      </zk-autocomplete>
    </app-case>

  </app-page>
</template>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
}
.demo-input {
  width: 180px;
  margin: 0 10px 10px 0;
}
.demo-textarea {
  width: 414px;
  margin: 0 10px 10px 0;
}
</style>
