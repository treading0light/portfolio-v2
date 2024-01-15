<template>
	<div class="w-full mt-36 flex flex-col gap-10 lg:gap-10 h-screen items-center justify-start">

		<div id="content" class="w-1/2 text-base-content text-left ">
			<p class="text-2xl md:text-3xl lg:text-7xl">Tony Green</p>
	        <h1 class="m-auto ml-5 text-xl md:text-2xl lg:text-6xl text-center">App Developer</h1>
        </div>

		<div class="w-full flex flex-col items-center">
			<AnimateText v-if="animationFinished == false" @finished="handleFinished" />

			<div ref="arrowIcon" class="m-auto mt-20 opacity-0">
				<Icon name="subway:down-2" size="6em" color="#3abff8" />		
			</div>
			
		</div>


	</div>
</template>

<script setup>

const arrowIcon = ref(null)
const animationFinished = ref(false)
const bgPrimary = ref(false)

const sleep = ms => new Promise(r => setTimeout(r, ms))


const handleFinished = async () => {
	animationFinished.value = true

	arrowIcon.value.classList.add('opacity-100', 'down-arrow')
}
	
</script>

<style scoped>
	.down-arrow {
		animation-name: hithere;
		/* ease in property */
		animation-timing-function: ease;
		animation-duration: .5s;
		animation-iteration-count: 1;
		animation-delay: 1s;
		transition: opacity 1s ease-in;
	}

	@keyframes hithere {
		30% { transform: scale(1.2); }
		40%, 60% { transform: rotate(-20deg) scale(1.2); }
		50% { transform: rotate(20deg) scale(1.2); }
		70% { transform: rotate(0deg) scale(1.2); }
		100% { transform: scale(1); }
	}
</style>