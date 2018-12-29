<script>
import ButtonGroup from 'element-ui/lib/button-group'

ButtonGroup.name = 'ZkButtonGroup'

export default ButtonGroup
</script>

<style scoped lang="scss">
@import '../../theme-chalk/variables.scss';
@import "~element-ui/packages/theme-chalk/src/button-group";
.el-button-group .el-button {
  border-radius: 0;
}
.el-button + .el-button-group {
  margin-left: 10px;
}
.el-button-group + .el-button-group {
  margin-left: 10px;
}
</style>
