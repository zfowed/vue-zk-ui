<template>
  <app-page title="Typography 字体" description="我们对字体进行统一规范，力求在各个操作系统下都有最佳展示效果。">
    <h2>中文字体</h2>
    <div>
      <div class="demo-typo-box typo-PingFang">
        <span>文本样例</span>
        <div class="name">PingFang SC</div>
      </div>
      <div class="demo-typo-box typo-Hiragino">
        <span>文本样例</span>
        <div class="name">Hiragino Sans GB</div>
      </div>
      <div class="demo-typo-box typo-Microsoft">
        <span>文本样例</span>
        <div class="name">Microsoft YaHei</div>
      </div>
    </div>
    <h2>英文／数字字体</h2>
    <div :gutter="20">
      <div class="demo-typo-box typo-Helvetica-neue">
        <span>Hello</span>
        <div class="name">Helvetica Neue</div>
      </div>
      <div class="demo-typo-box typo-Helvetica">
        <span>Hello</span>
        <div class="name">Helvetica</div>
      </div>
      <div class="demo-typo-box typo-Arial">
        <span>Hello</span>
        <div class="name">Arial</div>
      </div>
    </div>
    <h2>Font-family 代码</h2>
    <pre>
      <code>{{ 'font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;' }}</code>
    </pre>
    <h2>字体使用规范</h2>
    <table class="demo-typo-size">
      <tbody>
        <tr>
          <td class="h1">主标题</td>
          <td class="h1">示范文本样例</td>
          <td class="color-dark-light">20px Extra large</td>
        </tr>
        <tr>
          <td class="h2">标题</td>
          <td class="h2">示范文本样例</td>
          <td class="color-dark-light">18px large</td>
        </tr>
        <tr>
          <td class="h3">小标题</td>
          <td class="h3">示范文本样例</td>
          <td class="color-dark-light">16px Medium</td>
        </tr>
        <tr>
          <td class="text-regular">正文</td>
          <td class="text-regular">示范文本样例</td>
          <td class="color-dark-light">14px Small</td>
        </tr>
        <tr>
          <td class="text-small">正文（小）</td>
          <td class="text-small">示范文本样例</td>
          <td class="color-dark-light">13px Extra Small</td>
        </tr>
        <tr>
          <td class="text-smaller">辅助文字</td>
          <td class="text-smaller">示范文本样例</td>
          <td class="color-dark-light">12px Extra Extra Small</td>
        </tr>
      </tbody>
    </table>
  </app-page>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
pre {
  margin: 0;
  padding: 0;
}

code {
  line-height: 1.8;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
  font-size: 12px;
  padding: 18px 24px;
  background-color: #fafafa;
  border: 1px solid #eaeefb;
  margin-bottom: 25px;
  border-radius: 4px;
  -webkit-font-smoothing: auto;
  margin: 0;
  color: #000;
  display: block;
  overflow-x: auto;
}

table {
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
  font-size: 14px;
  margin-bottom: 45px;
  line-height: 1.5em;
  strong {
    font-weight: 400;
  }
  td {
    border-bottom: 1px solid #d8d8d8;
    padding: 15px;
    max-width: 250px;
  }
  th {
    border-bottom: 1px solid #d8d8d8;
    padding: 15px;
    max-width: 250px;
    text-align: left;
    white-space: nowrap;
    color: #666;
    font-weight: 400;
  }
  td {
    color: #333;
    &:first-child {
      padding-left: 10px;
    }
  }
  th:first-child {
    padding-left: 10px;
  }
}

.demo-typo-box {
  height: 200px;
  width: 200px;
  position: relative;
  border: 1px solid #eaeefb;
  font-size: 40px;
  color: #1f2d3d;
  text-align: center;
  line-height: 162px;
  padding-bottom: 36px;
  box-sizing: border-box;
  display: inline-block;
  margin-right: 17px;
  border-radius: 4px;
  .name {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 35px;
    border-top: 1px solid #eaeefb;
    font-size: 14px;
    color: #8492a6;
    line-height: 35px;
    text-align: left;
    text-indent: 10px;
    font-family: Helvetica Neue;
  }
}

.demo-typo-size {
  .h1 {
    font-size: 20px;
  }
  .h2 {
    font-size: 18px;
  }
  .h3 {
    font-size: 16px;
  }
  .text-regular {
    font-size: 14px;
  }
  .text-small {
    font-size: 13px;
  }
  .text-smaller {
    font-size: 12px;
  }
  .color-dark-light {
    color: #99a9bf;
  }
}

.typo-PingFang {
  font-family: PingFang SC;
}

.typo-Hiragino {
  font-family: Hiragino Sans GB;
}

.typo-Microsoft {
  font-family: Microsoft YaHei;
}

.typo-Helvetica-Neue {
  font-family: Helvetica Neue;
}

.typo-Helvetica {
  font-family: Helvetica;
}

.typo-Arial {
  font-family: Arial;
}
</style>
