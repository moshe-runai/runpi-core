<template>
  <header class="runai-header">
    <slot />
  </header>
</template>

<!-- <script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // props: {},
  // components: {},
  data() {
    return {}
  }
})
</script> -->

<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';
@import '../../assets/scss/_colors.scss';

.runai-header {
  position: fixed;
  height: $header-height;
  background-color: $navy;
  width: 100%;
}
</style>
