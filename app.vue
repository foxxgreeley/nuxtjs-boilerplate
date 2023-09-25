<template>
    <div class="min-h-screen bg-white text-base text-black transition-colors duration-150 dark:bg-black dark:text-white">
        <div class="container mx-auto max-w-screen-xl px-6 py-2">
            <Nav />

            <div class="py-6">
                <NuxtPage />
            </div>

            <Footer />
        </div>
    </div>
</template>

<script setup lang="ts"></script>
