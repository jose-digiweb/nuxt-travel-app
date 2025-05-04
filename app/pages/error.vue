<script lang="ts" setup>
const route = useRoute()

const error = route.query.error || 'An unknown error occurred'
</script>

<template>
    <div class="card bg-base-300 container mt-4 min-h-72 mx-auto flex flex-col items-center justify-center">
        <div role="alert" class="alert flex flex-col alert-error">
            <span>
                Oh no! {{ error }}
            </span>

            <NuxtLink to="/" class="btn btn-sm">
                <span>
                    Go back home
                </span>

                <Icon name="tabler:home-move" size="18" class="ml-2" />
            </NuxtLink>
        </div>
    </div>
</template>
