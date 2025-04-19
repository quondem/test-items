<template>
  <div class="item-grid">
    <div
      v-for="item in items"
      :key="item.id"
      class="item"
      :class="{ selected: isSelected(item) }"
      @click="onItemClick(item)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Item } from '@/types/Item'

const props = defineProps<{
  items: Item[]
  selectedItems?: Item[]
  multiSelect?: boolean
}>()

const emit = defineEmits<{
  (e: 'select', item: Item): void
  (e: 'deselect', item: Item): void
}>()

const isSelected = (item: Item) => {
  if (props.multiSelect && props.selectedItems) {
    return props.selectedItems.some(selectedItem => selectedItem.id === item.id)
  }
  return props.selectedItems?.[0]?.id === item.id
}

const onItemClick = (item: Item) => {
  if (isSelected(item)) {
    emit('deselect', item)
  } else {
    emit('select', item)
  }
}
</script>

<style scoped>
.item-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.item {
  border: 2px solid #000;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
}

.item.selected {
  background-color: #e0e0e0;
}
</style> 