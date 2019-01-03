<script>
import Cascader from 'element-ui/lib/cascader'

Cascader.name = 'ZkCascader'

export default Cascader
</script>

<style lang="scss">
@import '../../theme-chalk/variables.scss';
@import "~element-ui/packages/theme-chalk/src/icon";
@import "~element-ui/packages/theme-chalk/src/cascader";

.el-cascader {
  input {
    border-radius: 0;
  }
}
</style>
