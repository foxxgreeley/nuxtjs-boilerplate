<template>
    <div class="flex flex-col-reverse flex-wrap md:flex-row md:justify-between">
        <div class="text-content md:max-w-[65%]">
            <h1 class="pb-4 text-4xl font-bold">Nuxt Boilerplate+</h1>
            <p class="font-medium leading-7">Introducing Nuxt Boilerplate+: A carefully curated foundation for kickstarting your Nuxt 3 projects with essential tools like DevTools, Tailwind CSS, Prettier, ESLint, and TypeScript. Our fresh install includes only the most valuable Nuxt modules.</p>
            <div class="mt-6 flex flex-row flex-wrap gap-4 text-base transition-all duration-200">
                <button class="rounded-md border-2 border-gray-500 bg-white px-4 py-2 hover:bg-black hover:text-white">Get Started</button>
                <button class="bg-white px-4 py-2 text-black hover:underline">Learn more<Icon class="ms-1" size="24" name="heroicons:arrow-small-right-20-solid" color="black" /></button>
            </div>
        </div>
        <div class="flex min-w-[200px] items-center md:justify-center">
            <img class="block w-48" src="https://nuxt.com/assets/design-kit/logo/icon-black.png" alt="nuxt-logo" />
        </div>
    </div>
    <div class="my-16 flex-col flex-wrap">
        <h2 class="text-sm font-bold text-gray-600">Typography</h2>
        <h2 class="mb-2 text-2xl font-bold">Inter</h2>
        <p class="text-sm leading-6">
            Inter is the default font of Boilerplate+. Inter is a versatile and modern typeface that has gained popularity for its exceptional readability and aesthetic appeal. Designed by Rasmus Andersson, Inter strikes a harmonious balance between sans-serif simplicity and subtle geometric shapes, making it suitable for a wide range of digital and print applications. <br /><br />
            Inter's extensive character set also supports multiple languages, making it an inclusive and accessible choice for global audiences.
        </p>
    </div>
</template>
