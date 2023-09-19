<template>
    <div class="px-24">
        <Nav />

        <NuxtPage />

        <Footer />
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
console.log(route.meta.title) // My home page
</script>
