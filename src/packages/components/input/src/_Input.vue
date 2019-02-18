<script>
import Input from 'element-ui/lib/input'

Input.name = 'ZkInput'

export default Input
</script>

<style lang="scss" scoped>
@import '../../../theme-chalk/variables.scss';
@import "~element-ui/packages/theme-chalk/src/input";

.el-input,
.el-textarea {
  /deep/ {
    input,
    textarea {
      &::placeholder{
        color: #AAAAAA;
      }
      &:hover {
        border-color: #AAAAAA;
      }
      &:focus {
        outline: none;
        border-color: #2D76ED;
      }
    }
    input,
    textarea,
    .el-input-group__prepend,
    .el-input-group__append {
      border-radius: 0;
    }
  }
}
</style>
