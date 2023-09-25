<template>
    <div class="flex flex-col-reverse flex-wrap md:flex-row md:justify-between">
        <div class="text-content md:max-w-[65%]">
            <h1 class="text-4xl font-bold">Nuxt Boilerplate+</h1>
            <p class="font-medium leading-7">Introducing Nuxt Boilerplate+: A carefully curated foundation for kickstarting your Nuxt 3 projects with essential tools like DevTools, Tailwind CSS, Prettier, ESLint, and TypeScript. Our fresh install includes only the most valuable Nuxt modules.</p>
            <div class="mt-6 flex flex-row flex-wrap gap-4 text-base">
                <button class="border-gray-500 rounded-md border-2 px-4 py-2">Get Started</button>
                <button class="px-4 py-2 hover:underline">Learn more<Icon class="ms-1" size="24" name="heroicons:arrow-small-right-20-solid" color="black" /></button>
            </div>
        </div>
        <div class="flex min-w-[200px] items-center md:justify-center">
            <img class="block w-48" src="https://nuxt.com/assets/design-kit/logo/icon-black.png" alt="nuxt-logo" v-if="$colorMode && $colorMode.preference === 'light'" />
            <img class="block w-48" src="https://nuxt.com/assets/design-kit/logo/icon-white.png" alt="nuxt-logo" v-else />
        </div>
    </div>

    <div class="my-16 flex-col flex-wrap">
        <h2 class="text-gray-600 font-bold">Typography</h2>
        <h2 class="mb-2 mt-1 text-2xl font-bold">Inter</h2>
        <p class="leading-6">
            Inter is the default font of Boilerplate+. Inter is a versatile and modern typeface that has gained popularity for its exceptional readability and aesthetic appeal. Designed by Rasmus Andersson, Inter strikes a harmonious balance between sans-serif simplicity and subtle geometric shapes, making it suitable for a wide range of digital and print applications. <br /><br />
            Inter's extensive character set also supports multiple languages, making it an inclusive and accessible choice for global audiences.
        </p>
    </div>

    <div class="my-16 flex-col flex-wrap">
        <h2 class="text-gray-600 text-md font-bold">Template</h2>
        <h2 class="mb-2 mt-1 text-2xl font-bold">Blog Post</h2>
        <p class="leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales pharetra tellus vel varius. Quisque ultrices dignissim leo, tincidunt fermentum arcu blandit eu. <br /><br />Nunc mi arcu, sagittis a ex sit amet, eleifend efficitur ligula. Praesent nec interdum arcu. Aenean et pharetra velit, vitae eleifend diam. Maecenas tincidunt odio sit amet nibh maximus suscipit. Quisque tristique ligula ac elit congue tempus. Duis ut purus nec tellus aliquet aliquet id at magna. Phasellus bibendum condimentum lorem sagittis interdum. Nunc ultricies nulla eu auctor feugiat. Vestibulum
            venenatis imperdiet ipsum in suscipit.<br /><br />
            Nulla quis commodo odio. Praesent pretium facilisis imperdiet. Donec eu augue leo. Integer a ex dignissim, pretium sem pharetra, posuere libero. Phasellus ullamcorper tincidunt accumsan. Quisque fermentum ex vel libero pharetra, et suscipit nisi ultricies. Mauris ut vehicula tellus. Nullam vitae justo ac ipsum viverra ornare. Fusce non facilisis sem, id lacinia urna. Mauris mattis vehicula dolor, a tristique leo iaculis in. Donec tincidunt, est eu mollis scelerisque, augue arcu fermentum libero, eu lobortis dui leo ac odio. Quisque non erat eget erat euismod rhoncus. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce efficitur sapien ac semper porttitor.<br /><br />
            Donec faucibus semper felis, ac elementum risus lobortis vel. In interdum turpis a nunc condimentum commodo. Praesent congue, lorem sed dapibus malesuada, sapien nunc dictum sem, in posuere sapien nunc ac eros. Quisque tristique mattis ultrices. Sed sit amet hendrerit lacus. Suspendisse suscipit felis ac justo semper, non egestas lacus dictum. Donec mi lectus, tempor sed odio eget, sagittis iaculis sapien. Integer at erat at mauris volutpat imperdiet. Aenean scelerisque tristique enim vel ullamcorper. Praesent dictum, nibh quis ullamcorper pulvinar, lectus nunc porttitor ante,
            varius cursus metus elit eget velit. Morbi libero metus, finibus id ligula id, aliquam euismod elit. Mauris aliquam tortor nec tincidunt gravida.<br /><br />
            Aenean non mattis velit. Fusce pharetra diam sit amet lorem facilisis, at semper elit aliquet. Quisque dignissim nec eros et pellentesque. Suspendisse aliquet eu erat vitae malesuada. Duis blandit a quam sit amet eleifend. Pellentesque nibh libero, sodales non dolor a, auctor feugiat est.<br /><br />
            Nullam sagittis eu enim sed tempor. Mauris ut dolor malesuada, vehicula enim in, scelerisque ex.
        </p>
    </div>
</template>
