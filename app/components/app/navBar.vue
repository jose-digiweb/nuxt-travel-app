<template>
    <div class="navbar bg-primary text-primary-content">
        <div class="navbar-start">
            <NuxtLink to="/" class="btn-ghost text-xl">Travel App</NuxtLink>
        </div>

        <div class="navbar-end">
            <AppThemeColor />

            <NuxtLink to="/login" class="btn btn-accent">
                <span>Sign in</span>
                <Icon name="tabler:brand-github" class="text-lg" />
            </NuxtLink>
        </div>
    </div>
</template>
