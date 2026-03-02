<script setup lang="ts">
import { ref, toRefs, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useArticleStore } from '@/stores/article'
import { API } from '@/api/index'
import { InputText, Button, useToast, Message } from 'primevue'

const props = withDefaults(
  defineProps<{
    rootClass?: string
  }>(),
  {},
)
const router = useRouter()
const { rootClass } = toRefs(props)
const toast = useToast()
const articleStore = useArticleStore()

const controller = ref<any>(null)
const search = computed({
  get: () => articleStore.search,
  set: (value: string) => {
    articleStore.updateSearch(value)
  },
})
const hotTrend = computed(() => articleStore.hotTrend)
const getSearchResult = async (keyword: string = '') => {
  try {
    controller.value = new AbortController()
    const respond = await API.ARTICLE.POST_REFER_CONTENT_LIST(
      {
        keyword: keyword.length > 0 ? keyword : search.value.keyword,
      },
      {
        signal: controller.value.signal,
      },
    )
    articleStore.updateSearchResult(respond.data.data.articles)
    return router.push({
      name: 'Article',
    })
  } catch (error: any) {
    const { response } = error
    if (response) {
      toast.add({
        severity: 'error',
        summary: '搜索異常',
        detail: response.data.message,
        life: 3000,
      })
    }
  }
}
const resetSearch = () => {
  articleStore.resetSearch()
}
const submitAction = () => {
  if (search.value.keyword.length < 1) {
    toast.add({
      severity: 'warn',
      summary: '搜索異常',
      detail: '請輸入想搜索的關鍵字',
      life: 3000,
    })
    return
  } else {
    getSearchResult()
  }
}
</script>

<template>
  <form
    class="radius flex w-full flex-col justify-center gap-1.5 overflow-hidden bg-white p-3 pb-1.5"
    :class="rootClass"
    @submit.prevent="submitAction"
  >
    <div class="flex items-center gap-2.5">
      <InputText
        size="small"
        name="keyword"
        type="text"
        placeholder="輸入想搜尋的關鍵字"
        minlength="1"
        fluid
        v-model="search.keyword"
      />
      <div class="flex gap-1.5">
        <Button size="small" type="submit" rounded icon="bi bi-search" v-tooltip.top="'搜尋'" />
        <Button
          size="small"
          severity="secondary"
          rounded
          outlined
          icon="bi bi-arrow-clockwise"
          v-tooltip.top="'清除輸入'"
          @click="resetSearch"
        />
      </div>
    </div>
    <Message
      size="small"
      severity="secondary"
      variant="simple"
      class="flex flex-wrap items-center gap-1 px-0.5"
      ><span class="mr-2 text-(--p-button-text-secondary-color)/75">熱門趨勢</span
      ><Button
        v-for="(item, index) in hotTrend"
        :key="index"
        size="small"
        severity="secondary"
        text
        rounded
        :label="item"
        @click="getSearchResult(item)"
    /></Message>
  </form>
</template>
