<script lang="ts" setup>
const props = defineProps<{
    id: string
    as?: string
    name: string
    label: string
    type?: string
    placeholder: string
    error?: string
    disabled?: boolean
}>()
</script>

<template>
    <div class="flex flex-col gap-2" v-auto-animate>
        <label :for="props.id" class="fieldset-label">
            {{ props.label }}
        </label>
        <Field :as="props.as" :id='props.id' :type="props.type" :name="props.name" :placeholder="props.placeholder"
            :disabled="props.disabled" class="w-full shrink-0" :class="{
                'input-error': props.error,
                'input': props.as !== 'textarea',
                'textarea h-24': props.as === 'textarea'
            }" />
        <ErrorMessage :name="props.name" class="text-error" />
    </div>
</template>
