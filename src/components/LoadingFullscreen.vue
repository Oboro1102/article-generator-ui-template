<script setup lang="ts">
import { ref, onBeforeUnmount, onMounted, watch } from 'vue'
import { ProgressSpinner } from 'primevue'
import { useTimeoutFn } from '@vueuse/core'

const loadingStart = defineModel('loadingStart', { default: false })
const progress = ref(0)
const interval = ref()
const { start } = useTimeoutFn(() => {
  progress.value = 0
  loadingStart.value = false
  startProgress()
}, 500)
const startProgress = () => {
  if (interval.value) clearInterval(interval.value)
  interval.value = setInterval(() => {
    let newValue = progress.value + Math.floor(Math.random() * 10) + 1
    if (newValue >= 100) {
      progress.value = 100
      clearInterval(interval.value)
      start()
      return
    } else {
      progress.value = newValue
    }
  }, 250)
}
const endProgress = () => {
  clearInterval(interval.value)
  interval.value = null
}

watch(loadingStart, (value) => {
  if (value) {
    document.querySelector('html')?.classList.add('overflow-hidden')
    startProgress()
  } else {
    document.querySelector('html')?.classList.remove('overflow-hidden')
    endProgress()
  }
})
</script>

<template>
  <Transition name="fade" mode="out-in">
    <div
      v-if="loadingStart"
      class="fixed top-0 left-0 z-60 flex h-screen w-screen flex-col items-center justify-center bg-white/55 backdrop-blur-sm"
    >
      <div class="relative">
        <span
          class="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 font-bold"
          v-text="`${progress}%`"
        />
        <ProgressSpinner :value="progress" />
      </div>
    </div>
  </Transition>
</template>
