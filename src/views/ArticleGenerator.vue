<script setup lang="ts">
import { computed, ref, defineAsyncComponent, onBeforeMount } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import {
  InputNumber,
  useToast,
  MultiSelect,
  Button,
  FloatLabel,
  Textarea,
  Panel,
  Divider,
} from 'primevue'
import { useGlobalStore } from '@/stores/index'
import { useArticleStore } from '@/stores/article'
import { API } from '@/api'
import LayoutPages from '@/layout/LayoutPages.vue'
import LoadingArea from '@/components/LoadingArea.vue'
import LoadingFullscreen from '@/components/LoadingFullscreen.vue'
const SearchBar = defineAsyncComponent({
  loader: () => import('@/components/SearchBar.vue'),
  loadingComponent: LoadingArea,
})
const SearchContent = defineAsyncComponent({
  loader: () => import('@/components/SearchContent.vue'),
  loadingComponent: LoadingArea,
})

const globalStore = useGlobalStore()
const articleStore = useArticleStore()
const toast = useToast()
const controller = ref<any>(null)
const loadingFullscreen = ref(false)
const searchResult = computed({
  get: () => articleStore.searchResult,
  set: (value: []) => {
    articleStore.updateSearchResult(value)
  },
})
const generateConfig = computed({
  get: () => articleStore.generateConfig,
  set: (value) => {
    articleStore.updateGenerateConfig(value)
  },
})

// 撰文語氣風格
const toneList = ref([])
const toneListDataLoading = ref(false)
const getToneList = async () => {
  try {
    toneListDataLoading.value = true
    const respond = await API.ARTICLE.GET_TONE_STYLE()
    if (respond.data) {
      toneList.value = respond.data.data.tone
    }
  } catch (error: any) {
    const { response } = error
    toast.add({
      severity: 'error',
      summary: '取得撰文風格異常',
      detail: response.data.message,
      life: 3000,
    })
  } finally {
    toneListDataLoading.value = false
  }
}

// 文章生成
const generateResult = computed(() => articleStore.generateResult)
const getGenerateResult = async () => {
  if (
    generateConfig.value.generateTextSource.length < 1 ||
    generateConfig.value.toneStyle.length < 1 ||
    !generateConfig.value.maxLength
  ) {
    toast.add({
      severity: 'warn',
      summary: '無法改寫',
      detail:
        generateConfig.value.generateTextSource.length < 1
          ? '請輸入基底文章素材'
          : generateConfig.value.toneStyle.length < 1
            ? '請選擇撰文語氣風格'
            : '請輸入生成字數',
      life: 3000,
    })
    return
  }

  try {
    loadingFullscreen.value = true
    controller.value = new AbortController()
    const response = await API.ARTICLE.POST_GENERATE_CONTENT(
      {
        generateTextSource: generateConfig.value.generateTextSource,
        toneStyle: generateConfig.value.toneStyle,
        maxLength: generateConfig.value.maxLength,
      },
      {
        signal: controller.value.signal,
      },
    )

    if (response) {
      const result = response.data.data.article
      articleStore.updateGenerateResult(result)
      sessionStorage.setItem('resultCache', JSON.stringify(result))
      sessionStorage.setItem(
        'generateConfigCache',
        JSON.stringify({
          ...generateConfig.value,
        }),
      )
    }
  } catch (error: any) {
    toast.add({
      severity: 'error',
      summary: '生成失敗',
      detail: '請重新生成',
      life: 3000,
    })
  }
}

onBeforeMount(() => {
  getToneList()
})
onBeforeRouteLeave((to, from) => {
  const { name } = from
  if (name === 'Article') {
    controller.value && controller.value.abort()
  }
})
</script>

<template>
  <LayoutPages>
    <LoadingFullscreen v-model:loading-start="loadingFullscreen" />
    <div class="mainStretchWrap flex flex-wrap items-start gap-2 lg:flex-nowrap">
      <Panel
        header="文章搜索"
        :pt="{
          root: { class: 'w-full lg:max-w-150 border-divide!' },
          header: { class: 'text-sm' },
        }"
      >
        <SearchBar root-class="p-0!" />
        <Divider align="left" class="my-1!">
          <b class="text-xs">搜索結果</b>
        </Divider>
        <p
          v-if="searchResult.length < 1"
          class="text-note/60 flex items-center justify-center font-medium"
        >
          尚無查詢結果
        </p>
        <div v-else class="divide-divide flex w-full grow flex-col items-start divide-y">
          <SearchContent
            v-for="({ title, content }, index) in searchResult"
            :key="index"
            :title="title"
            :content="content"
          />
        </div>
      </Panel>
      <Panel
        header="素材設定"
        :pt="{
          root: { class: 'w-full border-divide!' },
          header: { class: 'text-sm' },
        }"
      >
        <FloatLabel variant="on" class="w-full">
          <Textarea
            size="small"
            id="contentBase"
            fluid
            autoResize
            rows="30"
            v-model="generateConfig.generateTextSource"
          />
          <label for="contentBase"><i class="bi bi-journal-text mr-1" />基底文章素材</label>
        </FloatLabel>
        <div class="mt-4 flex w-full flex-wrap items-start gap-4">
          <FloatLabel class="w-full sm:max-w-[12em]" variant="on">
            <MultiSelect
              id="tone"
              v-model="generateConfig.toneStyle"
              :options="toneList"
              option-label="label"
              option-value="prompt_hint"
              :selectionLimit="3"
              fluid
              :loading="toneListDataLoading"
              size="small"
            >
              <template #option="slotProps">
                <div v-tooltip.top="slotProps.option.description" v-text="slotProps.option.label" />
              </template>
              <template #footer>
                <p class="px-1 py-0.5 text-xs">
                  請選擇<span class="text-info mx-0.5">至多三項</span>風格
                </p>
              </template>
            </MultiSelect>
            <label for="tone"><i class="bi bi-chat-dots mr-1" />撰文語氣風格</label>
          </FloatLabel>
          <FloatLabel class="w-full sm:max-w-[12em]" variant="on">
            <InputNumber
              id="contentLength"
              size="small"
              fluid
              :useGrouping="false"
              :min="100"
              :max="3000"
              v-model="generateConfig.maxLength"
            />
            <label for="contentLength"><i class="bi bi-123 mr-1" />生成字數</label>
          </FloatLabel>
          <Button
            size="small"
            fluid
            class="sm:max-w-[15.5em]"
            label="開始改寫文章"
            @click="getGenerateResult"
          />
        </div>
      </Panel>
      <Panel
        v-show="generateResult.length > 0 && !loadingFullscreen"
        header="改寫結果（模擬資料）"
        :pt="{
          root: { class: 'w-full lg:max-w-150 border-divide!' },
          header: { class: 'text-sm' },
        }"
      >
        <p
          class="whitespace-pre-wrap text-(--p-button-text-secondary-color)"
          v-text="generateResult"
        />
      </Panel>
    </div>
  </LayoutPages>
</template>
