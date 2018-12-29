<script>
import Autocomplete from 'element-ui/lib/autocomplete'

Autocomplete.name = 'ZkAutocomplete'

export default Autocomplete
</script>

<style scoped lang="scss">
@import '../../theme-chalk/variables.scss';
@import "~element-ui/packages/theme-chalk/src/autocomplete";

.el-autocomplete {
  /deep/ {
    input {
      border-radius: 0;
    }
  }
}
</style>
