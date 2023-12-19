<template>
  <div
    class="runai-radio"
    @click="checked = !checked"
    tabindex="0"
    role="radio"
    aria-label="Line"
    aria-checked="true"
  >
    <div class="runai-radio__inner" :class="radioClasses" aria-hidden="true">
      <input class="ruani-radio__native" v-model="checked" type="radio" />
      <svg class="ruani-radio__bg" viewBox="0 0 24 24">
        <path
          d="M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"
        ></path>
        <path
          class="runai-radio__check"
          d="M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"
        ></path>
      </svg>
    </div>
    <span class="no-outline" tabindex="-1"></span>
    <div class="runai-radio__label q-anchor--skip"><slot /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

type colorName = 'positive' | 'negative' | 'info' | 'warning' | 'success'

export default defineComponent({
  props: {
    color: {
      type: String as PropType<colorName>,
      default: 'info'
    }
  },
  components: {},
  data() {
    return {
      checked: true
    }
  },
  computed: {
    radioClasses(): Array<string> {
      const btnClasses: Array<string> = []
      if (this.checked) {
        btnClasses.push('ruani-radio__inner--truthy')
        btnClasses.push(this.color)
      } else {
        btnClasses.push('ruani-radio__inner--falsy')
      }

      return btnClasses
    }
  }
})
</script>
<style lang="scss" scoped>
@import '../../assets/scss/_colors.scss';

.runai-radio {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;

  .runai-radio__inner {
    font-size: 40px;
    width: 1em;
    min-width: 1em;
    height: 1em;
    outline: 0;
    border-radius: 50%;
    position: relative;

    &.ruani-radio__inner--truthy {
      &.positive {
        color: $positive;
      }

      &.negative {
        color: $negative;
      }

      &.info {
        color: $info;
      }

      &.warning {
        color: $warning;
      }

      &.success {
        color: $success;
      }

      .runai-radio__check {
        transform: scaleZ(1);
      }
    }
  }

  .ruani-radio__native {
    width: 1px;
    height: 1px;
    margin: 0;
    padding: 0;
    display: none;
  }

  .ruani-radio__bg {
    position: absolute;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    user-select: none;

    path {
      fill: currentColor;
    }
  }

  .runai-radio__check {
    transform-origin: 50% 50%;
    transform: scale3d(0, 0, 1);
    transition: transform 0.22s cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  .runai-radio__label {
    user-select: none;
  }

  .no-outline {
    outline: 0;
  }
}
</style>
