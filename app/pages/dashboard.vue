<script lang="ts" setup>
const isSidebarCollapsed = ref(false)

onMounted(() => {
    isSidebarCollapsed.value = localStorage.getItem('isSidebarCollapsed') === 'true'
})

const toggleSidebar = () => {
    isSidebarCollapsed.value = !isSidebarCollapsed.value

    localStorage.setItem('isSidebarCollapsed', isSidebarCollapsed.value.toString())
}
</script>

<template>
    <div class="flex-1 flex">
        <div :class="{
            'w-64': !isSidebarCollapsed,
            'w-16': isSidebarCollapsed
        }" class="bg-base-200" v-auto-animate>
            <div class="flex justify-end p-2">
                <button class="btn btn-ghost btn-square" @click="toggleSidebar">
                    <Icon name="tabler:chevron-left" size="42" :class="{
                        'rotate-180': isSidebarCollapsed
                    }" />
                </button>
            </div>

            <div class="flex flex-col">
                <AppSidebarButton :icon-only="isSidebarCollapsed" to="/dashboard" label="Locations" icon="tabler:map" />
                <AppSidebarButton :icon-only="isSidebarCollapsed" to="/dashboard/add" label="Add location"
                    icon="tabler:circle-plus" />

                <div class="divider my-0" />

                <AppSidebarButton :icon-only="isSidebarCollapsed" to="/sign-out" label="Logout"
                    icon="tabler:logout-2" />
            </div>
        </div>

        <div class="flex-1">
            <NuxtPage />
        </div>
    </div>
</template>
