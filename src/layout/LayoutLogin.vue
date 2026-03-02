<script setup lang="ts">
import { toRefs } from 'vue'

const props = withDefaults(
  defineProps<{
    showLogo?: boolean
  }>(),
  { showLogo: true },
)
const { showLogo } = toRefs(props)
</script>

<template>
  <main
    class="loginLayoutBackground bg-tertiary relative flex h-screen w-full items-center justify-center bg-cover bg-center p-6 py-10 bg-blend-soft-light"
  >
    <div class="absolute top-0 left-0 z-5 h-full w-full overflow-hidden backdrop-blur-[6px]" />
    <div class="z-10 flex w-full max-w-md flex-col rounded-3xl bg-white p-8 shadow-2xl">
      <span v-if="showLogo" class="mb-6 text-center text-2xl font-semibold">文章生成系統模板</span>
      <slot name="form" />
    </div>
  </main>
</template>
