<script>
import Input from 'element-ui/lib/input'

Input.name = 'ZkInput'

export default Input
</script>

<style lang="scss">
@import '../../theme-chalk/variables.scss';
@import "~element-ui/packages/theme-chalk/src/icon";
@import "~element-ui/packages/theme-chalk/src/input";

.el-input,
.el-textarea {
  input,
  textarea,
  .el-input-group__prepend,
  .el-input-group__append {
    border-radius: 0;
  }
}
</style>
