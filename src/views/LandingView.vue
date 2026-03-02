<script setup lang="ts">
import { defineAsyncComponent, onBeforeMount } from 'vue'
import { useArticleStore } from '@/stores/article'
import LoadingArea from '@/components/LoadingArea.vue'
import LayoutPages from '@/layout/LayoutPages.vue'
const TypeAnimation = defineAsyncComponent({
  loader: () => import('@/components/TypeAnimation.vue'),
  loadingComponent: LoadingArea,
})
const SearchBar = defineAsyncComponent({
  loader: () => import('@/components/SearchBar.vue'),
  loadingComponent: LoadingArea,
})

const articleStore = useArticleStore()

onBeforeMount(() => {
  articleStore.resetSearch()
  articleStore.resetGenerateConfig()
  articleStore.getHotTrend()
})
</script>

<template>
  <LayoutPages root-class="max-w-440 items-center">
    <h1 class="my-auto flex flex-col text-center">
      <TypeAnimation
        use-blink-animate
        content="今天想寫什麼文章？"
        root-class="text-4xl sm:text-[10vw] md:text-[6vw] sm:leading-relaxed font-extrabold"
      />
      <TypeAnimation
        content="請於下方搜尋列中輸入想找的主題"
        root-class="text-sm lg:text-[1.5vw] font-medium leading-relaxed text-black/50"
      />
    </h1>
    <SearchBar root-class="w-full lg:max-w-screen-lg shadow-divide/50 shadow-md" />
  </LayoutPages>
</template>
