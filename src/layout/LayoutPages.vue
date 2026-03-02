<script setup lang="ts">
import { toRefs } from 'vue'
import MenuTop from '@/components/MenuTop.vue'
import FooterBar from '@/components/FooterBar.vue'

const props = withDefaults(
  defineProps<{
    rootClass?: string
  }>(),
  {},
)
const { rootClass } = toRefs(props)
</script>

<template>
  <MenuTop />
  <main class="mx-auto flex min-h-full w-full grow flex-col px-3.5 py-6 md:px-4" :class="rootClass">
    <slot />
  </main>
  <FooterBar />
</template>
