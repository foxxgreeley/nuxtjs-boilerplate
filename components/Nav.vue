<template>
    <nav class="py-2">
        <nuxt-link to="/"><h1 class="w-full pb-2 pt-2 text-center text-3xl font-black text-green-800 hover:underline">Nuxt Essentials</h1></nuxt-link>
        <ul class="font-xs flex flex-row justify-center gap-6 text-center text-base">
            <li class="hover:underline" v-for="link in navLinks" :key="link.title">
                <nuxt-link :to="link.path">{{ link.title }}</nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
li .router-link-active {
    text-decoration: underline !important;
    color: #166534;
}
</style>

<script setup lang="ts">
const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
]
</script>
```
