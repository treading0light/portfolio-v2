<template>
	<div id="projects" class="w-full flex flex-col items-center">

		<TitleBanner title="My Projects" />

		<div style="z-index: 11;" class="text-xl flex w-full justify-center items-center gap-5 md:gap-20 mb-6">

			<button @click="flip('back')" class="btn btn-circle btn-secondary">
				<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z"/></svg>
			</button>

			<button @click="flip('forward')" class="btn btn-circle btn-secondary">
				<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
			</button>
      
		</div>

		<Projects ref="proj" :projects="projects" />
	</div>
	
</template>

<script setup>
	const proj = ref(null)

	const projects = [
    {
      name: 'Healthy Fleet',
      description: "An app designed to intelligently track a fleet's vehicle maintenance schedule. Demo available.",
      img: "/images/hf-logo-edit.png",
      // link: "https://www.healthyfleet.org",
      link: '',
      codeLink: "https://github.com/treading0light/healthy-fleet",
      details: [
        "PHP/Laravel",
        "jQuery",
        "TailwindCSS",
        "MongoDB"
      ],
    },
    {
      name: 'The Brothers Green',
      description: "A tech blog created by my brother and I. Inside you can find code tutorials I created, including how I made these cards. ",
      img: "/images/dall-e-1.png",
      link: "https://brothers-green.vercel.app/",
      codeLink: "https://github.com/treading0light/brothers-green",
      details: [
        "Nuxt 3",
        "Content v2",
        "TailwindCSS"
        
      ],
    },
    {
      name: 'My Portfolio',
      description: "The website you are looking at right now!",
      img: "/images/og-image-resize.png",
      link: "",
      codeLink: "https://github.com/treading0light/portfolio",
      details: [
        "Vue3/Nuxt3",
        "TailwindCSS",
        "Vanilla JS"
      ],
    },
    {
      name: 'Your new webapp!',
      description: "Hire me and we will make something amazing.",
      img: "/images/space-needle-edit.png",
      link: "",
      codeLink: "",
      details: [
        "Javascript",
        "PHP",
        "Python",
        "And more!"
      ],
    }
  ]

  // call method from child component
  const flip = (direction) => {
  	proj.value?.flip(direction)
  }

</script>

<style scoped>
	h1 {
		background: linear-gradient(to right, rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 1.0), rgba(255, 255, 255, 0.0));
	}
</style>