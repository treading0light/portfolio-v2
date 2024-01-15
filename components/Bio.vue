<template>
	<div class="card min-h-screen md:card-side">

		<figure><NuxtImg class="mask mask-circle md:ml-24" src="/images/tony.jpg" /></figure>

		<div class="card-body md:w-1/2">

			<div class="card-title md:mt-[20%] justify-start">
				<h2 v-for="obj in textOptions" @click="makeActive(obj.id)" :id="obj.id" class="about-tab p-2 rounded-t-lg text-neutral-content hover:cursor-pointer">{{ obj.title }}</h2>
			</div>

			<p class="md:text-2xl text-neutral-content w-2/3 mx-auto mt-10" >{{ text }}</p>			
		</div>
	</div>
</template>

<script setup>
	// text to display
	const text = ref(null)

	const textOptions = [

		{	
			id: "coding-life",
			title: "Who I am",
			body: `I am a Web Developer local to Washington State. I started the company Tech Artisans in 2024 with the goal of leveraging
			modern technology to bring complete and affordable web solutions to small businesses.`
		},

		{
			id: "personal-life",
			title: "What I do",
			body: `With every project I seek to learn as much as possible about my client's business and their unique requirements. 
					I then use that information to create a product that is both functional and beautiful. Whether it's a website,
					a mobile app, or a custom web application, I am always looking to deliver high quaility solutions.`
		},
	
	]

	// 
	// Utilities
	// 

	const selectDialog = (id) => {
		const selection = textOptions.filter(obj => obj.id === id)

		text.value = selection[0].body
	}

	const makeActive = (id) => {
		// remove backgrounds from all
		let tabs = Array.from(document.querySelectorAll('.about-tab'))

		for (let tab of tabs) {
			tab.classList.remove('border-b-2', 'border-primary')
		}

		// add background for active
		const el = document.getElementById(id)
		el.classList.add('border-b-2', 'border-primary')

		selectDialog(id)
		
	}

	onMounted(() => {
		makeActive("coding-life")
	})
</script>