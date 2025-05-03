<script lang="ts" setup>
const auth = useAuthStore()
</script>

<template>
  <div class="hero bg-base-300 container mx-auto mt-4">
    <div class="hero-content text-center min-h-96">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          Travel App
        </h1>
        <p class="py-6">
          Keep track of your travels and manage your itineraries. It's easy and
          intuitive. Add your travels, manage your itineraries, and stay organized.
        </p>

        <AuthLoginButton v-if="!auth.user" />

        <NuxtLink v-else to="/dashboard" class="btn btn-primary">
          <span>
            Manage your travels
          </span>

          <Icon name="tabler:map-2" size="24" class="ml-2" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
