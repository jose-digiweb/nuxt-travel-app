<script lang="ts" setup>
const auth = useAuthStore()
await auth.init()
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <main class="flex-1 flex flex-col">
      <AppNavBar />

      <slot />
    </main>
  </div>
</template>
