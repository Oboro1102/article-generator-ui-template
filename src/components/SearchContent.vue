<script setup lang="ts">
import { toRefs, ref, computed } from 'vue'
import { Button, Drawer, useToast } from 'primevue'
import { useTextSelection } from '@vueuse/core'
import { useArticleStore } from '@/stores/article'

const props = withDefaults(
  defineProps<{
    title: string
    content: string
  }>(),
  {},
)
const { title, content } = toRefs(props)
const toast = useToast()
const articleStore = useArticleStore()
const selectionState = useTextSelection()
const active = ref(false)
const generateTextSource = computed(() => articleStore.generateConfig.generateTextSource)
const hasSelection = computed(() => selectionState.text.value.length > 0)

const insertSelectedText = (total: boolean = false) => {
  if (total) {
    const result = generateTextSource.value + content.value
    articleStore.updateGenerateConfig({
      generateTextSource: result,
    })
    toast.add({
      severity: 'success',
      summary: '添加內容',
      detail: '已加入所有內容',
      life: 3000,
    })
  } else {
    const result = generateTextSource.value + selectionState.text.value
    articleStore.updateGenerateConfig({
      generateTextSource: result,
    })
    toast.add({
      severity: 'success',
      summary: '添加內容',
      detail: '已加入選取內容',
      life: 3000,
    })
  }
}
</script>

<template>
  <div class="w-full pt-0.5 pb-1">
    <button
      type="button"
      @click="active = true"
      class="hover:text-main animate w-full text-left text-sm text-(--p-button-text-secondary-color)"
    >
      <i class="bi bi-book mr-1" /><span v-text="title" />
    </button>
    <Drawer v-model:visible="active" :header="title" class="w-full! max-w-2/5 min-w-75">
      <p class="whitespace-pre-wrap" v-text="content" />
      <template #footer>
        <div class="ml-auto flex flex-wrap justify-end gap-2.5">
          <Button
            severity="secondary"
            label="加入選取範圍"
            icon="bi bi-copy"
            size="small"
            :disabled="!hasSelection"
            @click="insertSelectedText(false)"
          />
          <Button
            label="加入全文"
            icon="bi bi-window-plus"
            size="small"
            @click="insertSelectedText(true)"
          />
        </div>
      </template>
    </Drawer>
  </div>
</template>
