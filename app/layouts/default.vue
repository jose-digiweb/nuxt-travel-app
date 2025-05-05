<script lang="ts" setup>
const auth = useAuthStore()
await auth.init()
</script>

<template>
  <div v-if="auth.loading" class="flex h-dvh items-center justify-center">
    <div class="loading loading-spinner text-primary" />
  </div>
  <div v-else class="flex min-h-dvh flex-col">
    <main class="flex-1 flex flex-col">
      <AppNavBar />

      <slot />
    </main>
  </div>
</template>
