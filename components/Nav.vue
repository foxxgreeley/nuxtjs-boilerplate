<template>
    <nav class="flex flex-row items-baseline justify-between py-4">
        <div class="logo flex flex-row">
            <nuxt-link to="/"><img class="block w-28" src="https://nuxt.com/assets/design-kit/logo/full-logo-black.png" alt="nuxt-logo" v-show="$colorMode && $colorMode.preference === 'light'" /></nuxt-link>
            <nuxt-link to="/"><img class="block w-28" src="https://nuxt.com/assets/design-kit/logo/full-logo-white.png" alt="nuxt-logo" v-show="$colorMode && $colorMode.preference === 'dark'" /></nuxt-link>
        </div>
        <ul class="flex flex-row justify-center gap-10 text-center font-medium">
            <li class="hover:underline" v-for="link in navLinks" :key="link.title">
                <nuxt-link :to="link.path">{{ link.title }}</nuxt-link>
            </li>
        </ul>
        <div class="toggler min-w-max">
            <a @click="$colorMode.preference = 'light'" v-show="$colorMode && $colorMode.preference === 'dark'" href="#" class="">
                <Icon size="24" name="heroicons:moon" color="white" />
            </a>
            <a @click="$colorMode.preference = 'dark'" v-show="$colorMode && $colorMode.preference === 'light'" href="#" class="">
                <Icon size="24" name="heroicons:sun" color="black" />
            </a>
        </div>
    </nav>
</template>

<style scoped>
li .router-link-active {
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
