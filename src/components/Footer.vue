<template>
  <div class="mt-10 mb-6 prose m-auto opacity-50 flex">
    <span class="text-sm"><a target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" style="color:inherit">CC BY-NC-SA 4.0</a> {{currentYear}} © jokerlin </span>
    <div class="flex-auto" />
  </div>
</template>
<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());

</script>