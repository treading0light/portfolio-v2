<template>
  <div id="top" class="min-h-screen w-screen flex flex-col items-center gap-64 md:gap-96">

      <Section-1 />

      <Section-2 />

      <Section-3 />

      <Section-4 />

  </div>

</template>

<script setup>
defineOgImageComponent('Frame', {
  title: 'Tony Green',
  description: 'A showcase of my work',
  colorMode: 'dark',
  image: '/images/matrix.jpg'
})
</script>