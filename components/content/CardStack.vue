<template>
	<div class="flex flex-col items-center justify-center overflow-x-hidden overflow-y-hidden">

		<div class="flex gap-5 mb-10">
			<button @click="flip('back')" class="text-3xl">Prev</button>
			<button @click="flip('forward')" class="text-3xl">Next</button>
		</div>

		<div class="my-stack relative w-1/2 min-h-[400px]">

			<div v-for="item in items" :key="item" 
			class="my-card w-full bg-primary border-4 border-white text-center text-lg md:text-xl absolute"
			style="transition: transform .5s;">
				<h1 class="my-12 md:my-32">{{ item }}</h1>
			</div>

		</div>
	</div>
	
</template>

<script setup>

	const items = [
		'item 1',
		'item 2',
		'item 3',
	]

	let cards = []

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

	const flip = async (direction) => {

		let el = null

		if (direction === 'forward') {
			el = cards.shift()
			cards.push(el)
		} else {
			el = cards.pop()
			cards.unshift(el)
		}

		el.style.transform = 'translateX(150%)'
		await sleep(500)

		rePosition(cards)

		el.style.transform = 'translateX(0)'

	}

	onMounted(() => {
		setTimeout(() => {
			cards = Array.from(document.querySelectorAll('.my-card'))

			rePosition(cards)
		}, 100)
	})

</script>