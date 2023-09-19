<template>
    <h1 class="w-full py-2 text-center text-2xl font-black text-green-800">Nuxt Essentials</h1>
    <nav class="pb-2">
        <ul class="flex flex-row justify-center gap-4 text-center font-medium">
            <li class="hover:underline">
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li class="hover:underline">
                <nuxt-link to="/about">About</nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.router-link-active {
    text-decoration: underline !important;
}
</style>
