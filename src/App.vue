<template>
  <div class="app">
    <div class="top-section">
      <div class="selected-user-items">
        <div
          v-for="item in selectedUserItems"
          :key="item.id"
          class="selected-item"
          @click="removeSelectedUserItem(item)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="selected-available-item">
        <div v-if="selectedAvailableItem" class="selected-item">
          {{ selectedAvailableItem.name }}
        </div>
      </div>
    </div>

    <div class="bottom-section">
      <div class="user-items">
        <h2>User Items</h2>
        <ItemGrid
          :items="userItems"
          :selected-items="selectedUserItems"
          :multi-select="true"
          @select="addSelectedUserItem"
          @deselect="removeSelectedUserItem"
        />
      </div>
      <div class="available-items">
        <h2>Available Items</h2>
        <ItemGrid
          :items="availableItems"
          :selected-items="selectedAvailableItem ? [selectedAvailableItem] : []"
          :multi-select="false"
          @select="setSelectedAvailableItem"
          @deselect="() => setSelectedAvailableItem(null)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import ItemGrid from '@/components/ItemGrid.vue'
import { useItemsStore } from './stores/items'

const {
  userItems,
  availableItems,
  selectedUserItems,
  selectedAvailableItem,
  addSelectedUserItem,
  removeSelectedUserItem,
  setSelectedAvailableItem
} = useItemsStore()
</script>

<style>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.top-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  min-height: 200px;
}

.bottom-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.selected-user-items,
.selected-available-item {
  border: 2px solid #000;
  padding: 1rem;
  min-height: 200px;
}

.selected-item {
  border: 1px solid #000;
  padding: 0.5rem;
  margin: 0.5rem;
  display: inline-block;
  cursor: pointer;
}

.user-items,
.available-items {
  border: 2px solid #000;
  padding: 1rem;
}

h2 {
  margin-top: 0;
  margin-bottom: 1rem;
}
</style> 