<script lang="ts" setup>
const { signIn, loading } = useAuthStore()
</script>

<template>
    <button :disabled="loading" class="btn btn-accent" @click="signIn">
        <span>Sign in</span>

        <span v-if="loading" class="loading loading-spinner loading-xs"></span>

        <Icon v-else name="tabler:brand-github" size="24" />

    </button>
</template>
