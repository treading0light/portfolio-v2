<template>
	<!-- <div class="relative mt-5" @mouseover="handleHover('show')" @mouseleave="handleHover('hide')"> -->
	<div class="relative mt-5">


			<NuxtImg class="w-[300px] mask mask-parallelogram-3 m-auto" :src="img" />

			<!-- <div ref="detailBox" class="w-2/3 h-full bg-base-100 opacity-90 absolute top-0 right-1/4 rounded-xl flex flex-col p-2 invisible
			text-sm
			md:text-xl
			lg:text-2xl
			xl:text-3xl">

				<p class="font-bold">Stack:</p>

				<ul class="list">
					<li v-for="detail in details">{{ detail }}</li>
				</ul>

			</div> -->
		</div>
</template>

<script setup>
	const detailBox = ref(null)
	const props = defineProps({
		img: String,
		details: Array
	})


	const handleHover = (command) => {
		if (command === 'show') {
			detailBox.value.classList.remove('invisible')
		} else {
			detailBox.value.classList.add('invisible')
		}	
	}
</script>