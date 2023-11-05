<template>
	<div class="w-9/12 lg:w-2/3 flex bg-base-300 rounded-lg border-4 border-primary items-center
	flex-col p-5 gap-5
	sm:flex-row sm:p-10">

			<NuxtImg class="mask mask-circle w-32 sm:self-start" src="/images/tony.jpg" />

			<div class="flex flex-col w-full">

				<div class="w-full flex flex-row justify-between text-center">
					<p v-for="obj in textOptions" @click="makeActive(obj.id)" :id="obj.id" class="about-tab p-2 rounded-t-lg text-base-content hover:cursor-pointer">{{ obj.title }}</p>
				</div>

				<div class="bg-neutral p-2 flex flex-col gap-2">
					<p class="lg:text-xl text-neutral-content" v-for="line in text">{{ line }}</p>
				</div>
				
			</div>
		</div>
</template>

<script setup>
	// text to display
	const text = ref(null)

	const textOptions = [

		{	
			id: "coding-life",
			title: "Coding life",
			bodyArray: [
				"I began my coding journey with 'Python Crash Course' by Eric Matthes. Once I finished the book I signed up for a web developer course where I learned Html, CSS, PHP, and Javascript.",
				"While working through all these steps I had been building projects. From CLI games with python, to web pages with vanilla JS and PHP, to web apps using frameworks like Laravel and Vue/Nuxt.",
				"Today I continue to expand my coding skillset with new projects and plenty of research."
			]
		},

		{
			id: "personal-life",
			title: "Personal life",
			bodyArray: [
				"I am a Washington born, husband and father of two.",
				"I highly value my time with family and friends. Good conversation is worth it's weight in gold.",
				"I seek challenges in sports like skydiving and martial arts."
			]
		},

		{	
			id: "work-life",
			title: "Work life",
			bodyArray: [
				"I am a self taught developer with plenty of general work experience. Over my years in the work force I have aquired a classic work ethic, worked independently and with highly trained teams, and trained others to be effective and efficient.",
				"I enjoy being challenged and learning new things."
			]
		},		
	]

	// 
	// Utilities
	// 

	const selectDialog = (id) => {
		const selection = textOptions.filter(obj => obj.id === id)

		text.value = selection[0].bodyArray
	}

	const makeActive = (id) => {
		// remove backgrounds from all
		let tabs = Array.from(document.querySelectorAll('.about-tab'))

		for (let tab of tabs) {
			tab.classList.remove('bg-neutral', 'text-neutral-content')
		}

		// add background for active
		const el = document.getElementById(id)
		el.classList.add('bg-neutral', 'text-neutral-content')

		selectDialog(id)
		
	}

	onMounted(() => {
		makeActive("coding-life")
	})
</script>