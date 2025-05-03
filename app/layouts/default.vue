<script lang="ts" setup>
const auth = useAuthStore()

await auth.init()
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <main>
      <AppNavBar />

      <slot />
    </main>
  </div>
</template>
