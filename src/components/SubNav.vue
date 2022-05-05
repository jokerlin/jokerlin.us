<script setup lang="ts">
import { useRoute } from 'vue-router'
import { englishOnly } from '../utils'

const inactiveStyle = 'opacity-20 hover:opacity-50'

const route = useRoute()
</script>

<template>
  <div class="prose m-auto mb-8 select-none">
    <button flex="~ gap1" items-center mb2 op30 text-xs @click="englishOnly = !englishOnly">
      <div :i="englishOnly ? 'carbon-checkbox-checked' : 'carbon-checkbox'" />
      English Only
    </button>
  </div>
</template>
