<script>
import Button from 'element-ui/lib/button'

Button.name = 'ZkButton'

export default Button
</script>

<style lang="scss">
@import '../../theme-chalk/variables.scss';
@import "~element-ui/packages/theme-chalk/src/icon";
@import "~element-ui/packages/theme-chalk/src/button";

.el-button {
  $class-color-list: $--color-primary $--color-success $--color-info $--color-warning $--color-danger;
  $class-name-list: primary success info warning danger;

  border-radius: 0 !important;

  &:not(.is-disabled) {
    &.el-button--default[raised] {
      $color: #FFFFFF;
      $color2: mix($color, black, 80%);

      border-color: mix($color, $color2, 50%);
      background: linear-gradient(180deg, $color, $color2);
      &:active {
        background: linear-gradient(180deg, $color2, $color);
      }
    }

    @each $name in $class-name-list {
      &.el-button--#{$name}[raised] {
        $i: index($class-name-list, $name);
        $color: nth($class-color-list, $i);
        $color2: mix($color, black, 80%);

        border-color: mix($color, $color2, 50%);
        background: linear-gradient(180deg, $color, $color2);
        &:active {
          background: linear-gradient(180deg, $color2, $color);
        }
      }
    }
  }
}
</style>
