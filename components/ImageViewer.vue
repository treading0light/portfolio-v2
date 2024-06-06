<template>

	<dialog @close="handleClose" id="image-modal" ref="imageModal" class="w-3/4 lg:w-1/2">
		<div >
			<!-- <form method="dialog">
				<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
			</form> -->
			<button @click="imageModal.close()" class="btn btn-sm btn-circle btn-ghost bg-black hover:bg-gray-500 absolute right-2 top-2">✕</button>
			<NuxtImg v-if="cert" :src="cert" />
		</div>
	</dialog>
</template>

<script setup>

// useHead({
// 		link: [
// 			{
// 				rel: "preload",
// 				as: "image",
// 				href: '/images/certs/js-cert.png'
// 			},
// 			{
// 				rel: "preload",
// 				as: "image",
// 				href: '/images/certs/css-cert.png'
// 			},
// 			{
// 				rel: "preload",
// 				as: "image",
// 				href: '/images/certs/html-cert.png'
// 			},
// 			{
// 				rel: "preload",
// 				as: "image",
// 				href: '/images/certs/php-cert.png'
// 			},
// 			{
// 				rel: "preload",
// 				as: "image",
// 				href: '/images/certs/python-cert.png'
// 			},
// 		]
// 	})

	const certs = {
		'js-cert': '/images/certs/js-cert.png',
		'css-cert': '/images/certs/css-cert.png',
		'html-cert': '/images/certs/html-cert.png',
		'php-cert': '/images/certs/php-cert.png',
		'python-cert': '/images/certs/python-cert.png'
	}

	const cert = ref(null)
	const imageModal = ref(null)


	const emit = defineEmits(['close'])

	const open = (name) => {
		cert.value = certs[name]
		imageModal.value.showModal()
	}

	const handleClose = () => {
		cert.value = null
	}

	defineExpose({
		open
	})
</script>

<style scoped>
	* {
		z-index: 30;
	}

	#viewer {
		background-color: rgba(0, 0, 0, 0.7);
	}
</style>