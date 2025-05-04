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
    }" class="flex items-center gap-x-4 p-4 hover:bg-base-300 cursor-pointer flex-nowrap" :data-tip="props.label">

        <Icon :name="props.icon" size="24" />

        <Transition name="grow">
            <span v-if="!props.iconOnly">
                {{ props.label }}
            </span>
        </Transition>
    </NuxtLink>
</template>

<style scoped>
.grow-enter-active {
    animation: grow 0.1s;
}

.grow-leave-active {
    animation: grow 0.1s reverse;
}

@keyframes grow {
    0% {
        transform: scale(0);
        opacity: 0;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}
</style>
