<template>
  <div>

    <h1>Input 输入框</h1>
    <p>通过鼠标或键盘输入字符</p>

    <h2>基础用法</h2>
    <el-card>
      <zk-input placeholder="请输入内容" />
    </el-card>

    <h2>禁用状态</h2>
    <el-card>
      <zk-input placeholder="请输入内容" disabled />
    </el-card>

    <h2>可清空</h2>
    <el-card>
      <zk-input placeholder="请输入内容" clearable />
    </el-card>

    <h2>带 icon 的输入框</h2>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="12">
          <zk-input
            placeholder="请选择日期"
            suffix-icon="el-icon-date">
          </zk-input>
        </el-col>
        <el-col :span="12">
          <zk-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search">
          </zk-input>
        </el-col>
      </el-row>
    </el-card>

    <h2>文本域</h2>
    <p>用于输入多行文本信息，通过将 type 属性的值指定为 textarea。</p>
    <el-card>
      <zk-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容">
      </zk-input>
    </el-card>

    <h2>可自适应文本高度的文本域</h2>
    <el-card>
      <zk-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容">
      </zk-input>
    </el-card>

    <h2>复合型输入框</h2>
    <el-card>
      <zk-input placeholder="请输入内容">
        <template slot="prepend">Http://</template>
      </zk-input>
      <zk-input style="margin-top: 20px;" placeholder="请输入内容">
        <template slot="append">.com</template>
      </zk-input>
      <zk-input style="margin-top: 20px;" placeholder="请输入内容">
        <el-select value="1" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <zk-button slot="append" icon="el-icon-search"></zk-button>
      </zk-input>
    </el-card>

    <h2>不同尺寸</h2>
    <el-card>
      <el-row>
        <zk-input placeholder="默认输入框" suffix-icon="el-icon-date" style="width: 200px;"></zk-input>
      </el-row>
      <el-row>
        <zk-input size="medium" placeholder="中等输入框" suffix-icon="el-icon-date" style="width: 200px;"></zk-input>
      </el-row>
      <el-row>
        <zk-input size="small" placeholder="小型输入框" suffix-icon="el-icon-date" style="width: 200px;"></zk-input>
      </el-row>
      <el-row>
        <zk-input size="mini" placeholder="超小输入框" suffix-icon="el-icon-date" style="width: 200px;"></zk-input>
      </el-row>
    </el-card>

    <h2>带输入建议</h2>
    <p>根据输入内容提供对应的输入建议</p>
    <el-card>
      <el-row>
        <zk-autocomplete
          placeholder="激活即列出输入建议"
          :fetch-suggestions="(s, c) => c([{value: '三全鲜食（北新泾店）', address: '长宁区新渔路144号' }, { value: '首尔炸鸡（仙霞路）', address: '上海市长宁区淞虹路661号' }])">
        </zk-autocomplete>
      </el-row>
      <el-row>
        <zk-autocomplete
          placeholder="自定义模板"
          :fetch-suggestions="(s, c) => c([{value: '三全鲜食（北新泾店）', address: '长宁区新渔路144号' }, { value: '首尔炸鸡（仙霞路）', address: '上海市长宁区淞虹路661号' }])">
          <template slot-scope="{ item }">
            <div>{{ item.value }}</div>
            <span style="font-size: 12px;color: #b4b4b4;">{{ item.address }}</span>
          </template>
        </zk-autocomplete>
      </el-row>
      <el-row>
        <zk-autocomplete
          placeholder="远程搜索"
          :fetch-suggestions="() => null">
        </zk-autocomplete>
      </el-row>
    </el-card>

  </div>
</template>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
}
</style>
