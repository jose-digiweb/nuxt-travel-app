<script lang="ts" setup>
const auth = useAuthStore()
</script>

<template>

    <div v-if="!auth.loading && auth.user" class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div v-if="auth.user.image" class="w-10 rounded-full">
                <img :src="auth.user.image" :alt="auth.user.name" />
            </div>

        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
                <NuxtLink to="/sign-out">
                    <span>Sign out</span>
                    <Icon name="tabler:logout-2" size="18" class="ml-auto" />
                </NuxtLink>
            </li>
        </ul>
    </div>



    <button v-else :disabled="auth.loading" class="btn btn-accent" @click="auth.signIn">
        <span>Sign in</span>

        <span v-if="auth.loading" class="loading loading-spinner loading-xs"></span>

        <Icon v-else name="tabler:brand-github" size="24" />

    </button>
</template>
