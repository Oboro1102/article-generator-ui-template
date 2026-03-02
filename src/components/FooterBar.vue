<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-white px-4 py-2.5 text-center text-xs">
    &copy; 2026{{ currentYear > 2026 ? ` - ${currentYear}` : null }} Design & Coding by
    ツキノリュウ.
  </footer>
</template>
