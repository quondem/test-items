import type { Item } from '@/types/Item'
import { ref } from 'vue'

export const userItems: Item[] = [
    { id: 1, name: "Shoes 1" },
    { id: 2, name: "Shoes 2" },
    { id: 3, name: "Shoes 3" },
    { id: 4, name: "Shoes 4" },
    { id: 5, name: "T-shirt 1" },
    { id: 6, name: "T-shirt 2" },
    { id: 7, name: "T-shirt 3" },
    { id: 8, name: "T-shirt 4" }
]

export const availableItems: Item[] = [
    { id: 11, name: "Jacket 1" },
    { id: 12, name: "Jacket 2" },
    { id: 13, name: "Jacket 3" },
    { id: 14, name: "Jacket 4" },
    { id: 15, name: "Hoodie 1" },
    { id: 16, name: "Hoodie 2" },
    { id: 17, name: "Hoodie 3" },
    { id: 18, name: "Hoodie 4" }
]

export const useItemsStore = () => {
    const selectedUserItems = ref<Item[]>([])
    const selectedAvailableItem = ref<Item | null>(null)

    const addSelectedUserItem = (item: Item) => {
        if (selectedUserItems.value.length < 6 && !selectedUserItems.value.find(i => i.id === item.id)) {
            selectedUserItems.value.push(item)
        }
    }

    const removeSelectedUserItem = (item: Item) => {
        selectedUserItems.value = selectedUserItems.value.filter(i => i.id !== item.id)
    }

    const setSelectedAvailableItem = (item: Item | null) => {
        selectedAvailableItem.value = item
    }

    return {
        userItems,
        availableItems,
        selectedUserItems,
        selectedAvailableItem,
        addSelectedUserItem,
        removeSelectedUserItem,
        setSelectedAvailableItem
    }
} 