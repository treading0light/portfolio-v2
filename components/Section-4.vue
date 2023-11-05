<template>
	<div id="certs" class="w-full flex flex-col items-center mb-20">
		<TitleBanner title="Certificates" />

		<div class="w-9/12 lg:w-2/3 relative ">
			<div class="w-full h-full flex items-center justify-center bg-base-300 rounded-lg border-4 border-primary">
				<p class="my-52 invisible">Make vanish</p>
			</div>
			
			<img class="w-10 sm:w-12 xl:w-20 absolute top-[15%] left-[50%] centerWidth opacity-50 hover:opacity-100" 
			src="/images/certs/js-large.png" @click="openViewer('js-cert')">

			<img class="w-10 sm:w-12 xl:w-20 absolute top-[35%] left-[40%] centerWidth opacity-50 hover:opacity-100"
			 src="/images/certs/css-large.png" @click="openViewer('css-cert')">

			<img class="w-10 sm:w-12 xl:w-20 absolute top-[35%] left-[60%] centerWidth opacity-50 hover:opacity-100"
			 src="/images/certs/html-large.png" @click="openViewer('html-cert')">

			<img class="w-12 sm:w-12 xl:w-20 absolute top-[50%] left-[70%] centerWidth opacity-50 hover:opacity-100"
			 src="/images/certs/php-large.png" @click="openViewer('php-cert')">

			<img class="w-10 sm:w-12 xl:w-20 absolute top-[50%] left-[30%] centerWidth opacity-50 hover:opacity-100"
			 src="/images/certs/python-large.png" @click="openViewer('python-cert')">

			<h3 class="text-3xl absolute bottom-10 left-[50%] centerWidth text-center">Click one</h3>
		</div>

		<ImageViewer v-if="cert" @close="closeViewer" :cert="cert" ref="imageViewer" />




		
	</div>
</template>

<script setup>
	useHead({
		link: [
			{
				rel: "preload",
				as: "image",
				href: '/images/certs/js-cert.png'
			},
			{
				rel: "preload",
				as: "image",
				href: '/images/certs/css-cert.png'
			},
			{
				rel: "preload",
				as: "image",
				href: '/images/certs/html-cert.png'
			},
			{
				rel: "preload",
				as: "image",
				href: '/images/certs/php-cert.png'
			},
			{
				rel: "preload",
				as: "image",
				href: '/images/certs/python-cert.png'
			},
		]
	})

	const cert = ref(null)
	const imageViewer = ref(null)
	const certs = {
		'js-cert': '/images/certs/js-cert.png',
		'css-cert': '/images/certs/css-cert.png',
		'html-cert': '/images/certs/html-cert.png',
		'php-cert': '/images/certs/php-cert.png',
		'python-cert': '/images/certs/python-cert.png'
	}

	// ImageViewer is rendered only when cert.value is filled
	const openViewer = (name) => {
		cert.value = certs[name]
	}

	const closeViewer = () => {
		cert.value = null
	}
	
</script>

<style scoped>
	.centerWidth {
		transform: translateX(-50%);
	}
</style>