<template>
  <div class="runai-chip" :class="chipClasses"><slot /></div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

type bgColorName = 'positive' | 'negative' | 'info' | 'warning' | 'success'

export default defineComponent({
  props: {
    color: {
      type: String as PropType<bgColorName>,
      default: 'info'
    }
    // textColor: {

    // },
    // size: {},
    // square: {},
    // outline: {},
    // disable: {}
  },
  components: {},
  data() {
    return {}
  },
  computed: {
    chipClasses(): Array<string> {
      const chipClasses: Array<string> = []
      chipClasses.push(this.color)
      return chipClasses
    }
  }
})
</script>
<style lang="scss" scoped>
@import '../../assets/scss/_colors.scss';

.runai-chip {
  display: inline-block;
  margin: 4px;
  padding: 7px 12px;
  border-radius: 16px;
  color: $white;
  &.positive {
    background-color: $positive;
  }

  &.negative {
    background-color: $negative;
  }

  &.info {
    background-color: $info;
  }

  &.warning {
    background-color: $warning;
  }

  &.success {
    background-color: $success;
  }
}
</style>
