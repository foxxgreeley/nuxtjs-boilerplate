<template>

    <NuxtPage />

</template>

<script setup lang="ts">

  const route = useRoute()
  console.log(route.meta.title) // My home page

</script>