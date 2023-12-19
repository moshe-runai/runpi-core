<template>
  <button class="runai-btn" :class="btnClasses" @click="$emit('btn-clicked')"><slot /></button>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

type bgColorName = 'positive' | 'negative' | 'info' | 'warning' | 'success'

export default defineComponent({
  emits: ['btn-clicked'],
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
    btnClasses(): Array<string> {
      const btnClasses: Array<string> = []
      btnClasses.push(this.color)
      return btnClasses
    }
  }
})
</script>
<style lang="scss" scoped>
@import '../../assets/scss/_colors.scss';

.runai-btn {
  display: inline-flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  outline: 0;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  color: $white;
  transition: background-color .3s cubic-bezier(.25,.8,.5,1),opacity .4s cubic-bezier(.25,.8,.5,1);
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  width: auto;
  height: auto;
  cursor: pointer;
  padding: 4px 16px;
  border-radius: 3px;

  &:hover {
    background: currentColor;
    opacity: 0.75;
  }

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
