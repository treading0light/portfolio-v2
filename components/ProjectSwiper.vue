<template>
    <swiper-container ref="swiper" class="w-2/3"
     speed="500" 
     loop="true"
    :slides-per-view="1.25"
    :space-between="spaceBetween"
    :centered-slides="true"
    :pagination="{
      hideOnClick: true
    }"
    :breakpoints="{
      768: {
        slidesPerView: 1,
      },
    }"
    scrollbar="true"
    @swiperprogress="onProgress"
    @swiperslidechange="onSlideChange">

    <swiper-slide v-for="project in projects" class="card md:card-side w-full h-max text-center bg-base-200 border-4 border-primary items-center">

			<div class="flex flex-col gap-3">
				<h2 class="text-center bold text-lg lg:text-3xl">{{ project.name }}</h2>
				<p class="text-sm lg:text-xl">{{ project.description }}</p>

				<div class="flex gap-2 self-center">
					<a v-if="project.link != '' " class="btn btn-secondary p-3" :href="project.link">Visit</a>
					<a v-if="project.codeLink != '' " class="btn btn-secondary p-3" :href="project.codeLink">Code</a>
				</div>	

			</div>

			<figure><ImageWithDetails :details="project.details" :img="project.img" /></figure>
			
        
    </swiper-slide>

</swiper-container>
</template>

<script setup>
    const props = defineProps({
            projects: Array
        })

 

    const swiper = ref(null)

    const spaceBetween = ref(10)

    const onProgress = (e) => {
    const [swiper, progress] = e.detail;
    console.log(progress)
    }

    const onSlideChange = (e) => {
    console.log('slide changed')
    }

    const nextSlide = () => {
    swiper.value.swiper.slideNext();
    }

    const prevSlide = () => {
    swiper.value.swiper.slidePrev();
    }

    defineExpose({
            nextSlide,
            prevSlide
        })



</script>