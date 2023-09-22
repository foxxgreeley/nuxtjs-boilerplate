<template>
    <div class="min-h-screen bg-white px-6 text-black transition-colors duration-150 dark:bg-black dark:text-white">
        <div class="container mx-auto max-w-screen-xl">
            <Nav />

            <h1 class="pb-4 text-4xl font-bold">{{ $colorMode.preference }}</h1>

            <div class="my-10">
                <NuxtPage />
            </div>

            <Footer />
        </div>
    </div>
</template>

<script setup lang="ts"></script>
