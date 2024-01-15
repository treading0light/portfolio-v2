<template>
  <div data-theme="night" id="main">
    <Head>
      <Meta name="og:image" content="/images/og-image.PNG" />
      <Meta name="og:image:type" content="image/PNG" />
      <Meta name="og:image:width" content="200" />
      <Meta name="og:image:height" content="200" />

    </Head>

    <GoodNav ref="nav" />

    <NuxtPage />

    <MyFooter />
  </div>
</template>

<script setup>
  // nav = template ref
  // scrollTop can pass current window scrollTop
  // to child components

  useHead({
    link: [
    {
				rel: "preload",
				as: "image",
				href: '/images/background-dark.jpg'
			},
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js',
        type: 'text/javascript'
      }
    ],
  })
  
  const nav = ref(null)
  const scrollTop = ref(0)
  let scrolling = false

  const handleScroll = () => {
    // determine scroll direction and call all
    // scroll child methods from here

    let newScrollTop = document.documentElement.scrollTop

    if (newScrollTop >= scrollTop.value) {
      nav.value?.scrollDown()
    } else {
      nav.value?.scrollUp()
    }

    scrollTop.value = newScrollTop
  }

  onMounted(() => {
    document.addEventListener('scroll', () => scrolling = true)

    setInterval(() => {
      // throttle scroll event

      if (scrolling) {
        scrolling = false

        handleScroll()
      }
    }, 300)
  })
  


</script>

<style scoped>
  #main {
    background-image: url('/images/background-dark.jpg');
    /*background: center cover no-repeat;*/
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;

    overflow-x: hidden;
  }
</style>