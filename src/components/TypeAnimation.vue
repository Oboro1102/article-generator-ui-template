<script setup lang="ts">
import { onMounted, ref, toRefs } from 'vue'

const props = withDefaults(
  defineProps<{
    useBlinkAnimate?: boolean
    content: string
    rootClass?: string
    loop?: boolean
    loopDelay?: number
    duration?: number
  }>(),
  {
    useBlinkAnimate: false,
    loop: false,
    loopDelay: 1000,
    duration: 100
  }
)
const { content, rootClass, loop, loopDelay, duration, useBlinkAnimate } = toRefs(props)

const typeContent = ref('')

const typeEffect = () => {
  if (typeContent.value.length < content.value.length) {
    typeContent.value += content.value.charAt(typeContent.value.length)
    setTimeout(typeEffect, duration.value)
  } else {
    const repeatDelay = setTimeout(() => {
      if (loop.value) {
        typeContent.value = ''
      }
      clearTimeout(repeatDelay)
    }, duration.value * content.value.length)
  }
}

onMounted(() => {
  if (loop.value) {
    setInterval(
      () => {
        typeEffect()
      },
      duration.value * content.value.length + loopDelay.value
    )
  } else {
    const delay = setTimeout(() => {
      typeEffect()
      clearTimeout(delay)
    }, 250)
  }
})
</script>

<template>
  <div class="mx-auto max-w-fit" :class="[rootClass]">
    <span v-text="typeContent" />
    <span v-if="useBlinkAnimate" class="h-full animate-[blink_1s_linear_infinite] border-r-2" />
  </div>
</template>
