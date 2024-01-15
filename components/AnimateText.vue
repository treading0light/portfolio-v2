<template>

	<div id="animate-window" ref="animateWindow" class="w-1/2 w-[0%] invisible sm:mx-auto relative border-x-4 border-primary rounded-3xl overflow-hidden

		text-lg
		md:text-2xl
		lg:text-5xl
		">

		<p id="static-text" ref="staticText" class="opacity-0 text-2xl md:text-4xl lg:text-6xl text-center">I build</p>


			<p v-for="word in row1Words" :key="word" :id="word"
		class="w-full text-center absolute invisible" 
		>{{ word }}</p>

		<!-- 
				invisible elements to give parent height due to absolute siblings
		-->
		<p class="invisible">Make this vanish</p>
		<p class="invisible">Make this vanish</p>
		<p class="invisible">Make this vanish</p>


	</div>
</template>

<script setup>
	//
	// Initialize
	// 

	const row1Words = [
    'Tailored Web Apps',
	'Beautiful Websites',
	'Custom Browser Plugins',
	'AI Integrations',
    'Task Automation Tools',
	'More!'
	]

	const animateWindow = ref(false)
	const staticText = ref(false)

	const emit = defineEmits(['finished'])

	//
	// Utility Functions
	//

	const isEven = (i) => i % 2 == 0
	const sleep = ms => new Promise(r => setTimeout(r, ms))
	const offsetBottom = (el) => el.offsetTop - el.offsetHeight
	const percent = (int, per) => (per / 100) * int

	//
	// Animation Logic
	//

	// main logic
	const animate = async (count, array, id) => {

		// animate out previous element if there is one
		if (count != 0) {
			const prevEl = document.getElementById(array[count - 1])
			fadeOut(prevEl)
			// await sleep(1000)
		}

		// get elements using count as index
		const el = document.getElementById(array[count])

		// if current el is the last in array
		if (count >= array.length - 1) {

			// final element slides in and grows in size
			slideIn(el, count, true) // grows=true

			await sleep(750)

			el.style.fontSize = '150%'
			await sleep(1000)
			animateWindow.value.classList.add('w-[0%]')
			staticText.value.classList.add('opacity-0')
			await sleep(500)
			animateWindow.value.classList.add('invisible')

			// emit event to parent
			emit('finished')
			

		} else { // if not last, animate in new element
			
			slideIn(el, count)

		}		
	}

	// 
	// Animation Functions
	// 

	const fadeOut = (el) => {
		el.style.opacity = 0
	}

	const slideIn = (el, index, grows) => {

		// optional flag for further animation
		if (grows === undefined) grows = false

		// get current height of element and parent,
		// calculate movement distance
		const h = el.offsetHeight
		const ph = el.parentElement.offsetHeight
		let distance = 0
		if (grows === true) {
			distance = ph / 2 + h / 2
		} 
		else {
			distance = ph / 2 + h / 2
		}


		// even=animate from bottom, odd=top
		if (isEven(index)) {

			// set initial position, make visible
			el.style.bottom = '-' + h.toString() + 'px'
			el.style.visibility = 'visible'

			// move to end position
			el.style.transform = 'translateY(-' + distance + 'px)'



		} else {

			el.style.top = '-' + h.toString() + 'px'
			el.style.visibility = 'visible'

			el.style.transform = 'translateY(' + distance + 'px)'

		}
	}
	// 
	// Hooks
	// 

	onMounted( async () => {


		animateWindow.value.classList.remove('invisible', 'w-[0%]')
		await sleep(700)
		staticText.value.classList.remove('opacity-0')

		let count = 0

		// use setInterval to loop animation
		let id = setInterval(() => { // id === int

			if (count > row1Words.length - 1)	{

				// end if exhausted array
				clearInterval(id)

			} else {

				// run main logic, increment count
				animate(count, row1Words)
				count ++

			}	
		}, 1500) // time between interval in ms

	})

</script>

<style scoped>
	p {
		transition: transform .5s ease-in,
		opacity .5s ease-in,
		font-size 1s;

		white-space: nowrap;
	}

	#animate-window {
		transition: width .6s ease-out;
	}

	#static-text {
		transition: opacity .5s ease-in;
	}
</style>