<template>
	<div class="w-full">
		<h2 class="text-center py-5 text-4xl mb-20 w-3/4 md:w-1/2 m-auto text-base-300">{{ title }}</h2>
	</div>
</template>

<script setup>
	const props = defineProps({
		title: String
	})
</script>

<style scoped>
	h2 {
		/*background-color: rgba(0, 177, 166, 1.0);*/
		background: linear-gradient(to right, rgba(175, 197, 236, 0.0), rgba(175, 197, 236, 1.0), rgba(175, 197, 236, 0.0));
	}
</style>