<script lang="ts" setup>
const auth = useAuthStore()

onMounted(() => {
  auth.signOut()
})
</script>

<template>
    <div class="card bg-base-300 container mt-4 min-h-72 mx-auto flex flex-col items-center justify-center">
        <span class="loading loading-spinner loading-xl" />
    </div>
</template>
