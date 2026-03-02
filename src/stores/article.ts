import { ref } from 'vue'
import { defineStore } from 'pinia'
import { API } from '@/api/index'

export const useArticleStore = defineStore('article', () => {
  // 搜索引擎相關功能
  const hotTrend = ref(sessionStorage.getItem('trend') && JSON.parse(sessionStorage.getItem('trend') as string) || [])
  const getHotTrend = async () => {
    const result = await API.ARTICLE.GET_HOT_TREND()
    if (result) {
      hotTrend.value = result.data.data.trendKeywords
      sessionStorage.setItem('trend', JSON.stringify(result.data.data.trendKeywords))
    }
  }
  const search = ref<{ keyword: string; }>({
    keyword: ''
  })
  const updateSearch = (value: string) => {
    Object.assign(search.value, value)
  }
  const resetSearch = () => {
    Object.assign(search.value, {
      keyword: ''
    })
  }
  const searchResult = ref([])
  const updateSearchResult = (data: []) => {
    searchResult.value = data
  }
  const resetSearchResult = () => {
    searchResult.value = []
  }
  // 文章生成相關功能
  const generateConfig = ref((sessionStorage.getItem('generateConfigCache') &&
    JSON.parse(sessionStorage.getItem('generateConfigCache') as string)) ||
  {
    generateTextSource: '',
    toneStyle: [],
    maxLength: 1000,
  }
  )
  const updateGenerateConfig = (source: {
    generateTextSource?: string
    toneStyle?: { id: string; name: string; description?: string }[] | string[] | []
    maxLength?: number
  }) => {
    if (source) {
      Object.assign(generateConfig.value, source)
    }
  }
  const resetGenerateConfig = () => {
    generateConfig.value = {
      generateTextSource: '',
      toneStyle: [],
      maxLength: 1000,
    }
  }
  // 生成結果相關功能
  const generateResult = ref(
    (sessionStorage.getItem('resultCache') &&
      JSON.parse(sessionStorage.getItem('resultCache') as string)) || ''
  )
  const updateGenerateResult = (content: string) => {
    generateResult.value = content
  }
  const resetGenerateResult = () => {
    generateResult.value = ''
  }
  // 文章重置相關
  const goToNewGenerate = (resetSearchKeyword: boolean = true) => {
    if (resetSearchKeyword) {
      resetSearch()
    }
    resetSearchResult()
    resetGenerateConfig()
    sessionStorage.removeItem('generateConfigCache')
    resetGenerateResult()
    sessionStorage.removeItem('resultCache')
  }

  return {
    search,
    updateSearch,
    resetSearch,
    searchResult,
    updateSearchResult,
    resetSearchResult,
    generateConfig,
    updateGenerateConfig,
    resetGenerateConfig,
    generateResult,
    updateGenerateResult,
    resetGenerateResult,
    goToNewGenerate, hotTrend, getHotTrend
  }
})
