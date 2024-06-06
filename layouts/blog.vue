<template>
    <div :data-theme="theme" id="main">
        <BlogNav @themeSelected="changeTheme" />
        <slot />
    </div>
</template>

<script setup>
	const theme = ref('night')
	const home = ref(false)

	const changeTheme = (newTheme) => {
		theme.value = newTheme
		// console.log('chosen theme: ' + newTheme)
		} 

	const markHome = (bool) => home.value = bool

</script>