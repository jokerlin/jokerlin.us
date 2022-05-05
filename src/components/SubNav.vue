<script setup lang="ts">
import { englishOnly } from '../utils'
</script>

<template>
  <div class="prose m-auto mb-8 select-none">
    <button flex="~ gap1" items-center mb2 op30 text-xs @click="englishOnly = !englishOnly">
      <div :i="englishOnly ? 'carbon-checkbox-checked' : 'carbon-checkbox'" />
      English Only
    </button>
  </div>
</template>
