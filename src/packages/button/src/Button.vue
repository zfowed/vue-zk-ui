<script>
import Button from 'element-ui/lib/button'

Button.name = 'ZkButton'

export default Button
</script>

<style scoped lang="scss">
@import '../../theme-chalk/variables.scss';
@import "~element-ui/packages/theme-chalk/src/button";

.el-button {
  border-radius: 0;
}
</style>
