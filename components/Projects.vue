<template>
	<div id="stack" class="w-2/3 h-96 relative mr-[10%]">

		<div v-for="project in projects"
		class="flip-card card text-center absolute bg-base-200 border-4 border-primary h-[100%] w-10/12
		p-1 sm:p-10 sm:card-side sm:items-center">

			<div class="flex flex-col gap-3">
				<h2 class="text-center bold text-lg lg:text-3xl">{{ project.name }}</h2>
				<p class="text-sm lg:text-xl">{{ project.description }}</p>

				<div class="flex gap-2 self-center">
					<a v-if="project.link != '' " class="btn btn-secondary p-3" :href="project.link">Visit</a>
					<a v-if="project.codeLink != '' " class="btn btn-secondary p-3" :href="project.codeLink">Code</a>
				</div>	

			</div>

			<figure><ImageWithDetails :details="project.details" :img="project.img" /></figure>
			
		</div>
		
	</div>
	
</template>

<script setup>
	const cards = ref(null)

	const props = defineProps({
		projects: Array
	})

	const sleep = ms => new Promise(r => setTimeout(r, ms))

	// use newly sorted array to set absolute positions
	// and z-index of elements to make stack effect
	const rePosition = (array) => {

		for (const el of array) {
			// calculate positions by index
			const index = array.indexOf(el)
			const top = index * 10
			const right = 0 - top

			// apply positions
			el.style.top = top + 'px'
			el.style.right = right + 'px'
			el.style.zIndex = 10 - index
		}
	}

	// re-order array of elements forward/backward
	const flip = async (dir) => {
		const array = cards.value
		let el = null

		if (dir === 'forward') {
			el = array.shift()
			array.push(el)
		} else {
			el = array.pop()
			array.unshift(el)
		}

		el.style.transform = 'translateX(150%)'
		await sleep(500)

		rePosition(array)

		el.style.transform = 'translateX(0)'

	}

	defineExpose({
        // must expose methods to be called by parent
        flip
    })

	onMounted(() => {
		// get array of card elements
		cards.value = Array.from(document.querySelectorAll('.flip-card'))

		// run once on load to give stack initial positions
		rePosition(cards.value)
	})
</script>

<style scoped>
	.flip-card {
		transition: transform .5s;
	}
</style>