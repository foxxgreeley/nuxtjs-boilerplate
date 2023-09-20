<template>
    <h1 class="w-full py-2 text-center text-2xl font-black text-green-800">Nuxt Essentials</h1>
    <nav class="pb-2">
        <ul class="flex flex-row justify-center gap-4 text-center font-medium">
            <li class="hover:underline" v-for="link in navLinks" :key="link.title">
                <nuxt-link :to="link.path">{{ link.title }}</nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.router-link-active {
    text-decoration: underline !important;
}
</style>

<script setup lang="ts">
const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
]
</script>
```
