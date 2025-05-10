<script lang="ts" setup>
const props = defineProps<{
    label: string
    icon: string
    to?: string
    iconOnly?: boolean
}>()

const route = useRoute()
</script>

<template>
    <NuxtLink :to="props.to" :class="{
        'bg-base-300': route.path === props.to,
        'justify-center': props.iconOnly,
        'justify-start': !props.iconOnly,
        'tooltip tooltip-right': props.iconOnly,
    }" class="flex items-center gap-x-4 p-4 hover:bg-base-300 cursor-pointer flex-nowrap" :data-tip="props.label"
        v-auto-animate>

        <Icon :name="props.icon" size="24" />

        <span v-if="!props.iconOnly" v-auto-animate>
            {{ props.label }}
        </span>

    </NuxtLink>
</template>
