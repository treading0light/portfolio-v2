<template>

	<dialog @close="emit('close')" id="image-modal" ref="imageModal" class="w-1/2">
		<div class="">
			<!-- <form method="dialog">
				<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
			</form> -->
			<button @click="imageModal.close()" class="btn btn-sm btn-circle btn-ghost bg-black hover:bg-gray-500 absolute right-2 top-2">✕</button>
			<NuxtImg class="" :src="cert" />
		</div>
	</dialog>
</template>

<script setup>
	const imageModal = ref(null)

	// img url given by parent component
	const props = defineProps({
		cert: String,
	})
	const emit = defineEmits(['close'])

	onMounted(() => {
		imageModal.value.showModal()
	})

	const open = () => {
		imageModal.value.showModal()
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