<template>
	<div class="w-4/5 m-auto flex flex-col items-start lg:items-center">

		<BlogHeader :path="slug" />

		<article class="prose w-full 
		lg:prose-lg 
		">

			<ContentDoc :path="slug" />

		</article>

	</div>
	
	

	
</template>

<script setup>
	defineOgImage()
	definePageMeta({
		layout: 'blog',

	})
	const route = useRoute()
	const slug = route.params.slug.toString()

	// console.log(slug)

	// ContentDoc :path=path

	// const { article } = await useAsyncData(() => 
	// 	queryContent().where({slug: slug}).findOne()
	// 	)
</script>

<style scoped>
code {
    font-family: 'Courier New', Courier, monospace;
    background-color: #f4f4f4;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 2px 4px;
    color: #d6336c;
    font-size: 1em;
}

pre code {
    display: block;
    padding: 10px;
    overflow-x: auto;
    background-color: #2d2d2d;
    color: #f8f8f2;
    border: none;
    border-radius: 5px;
}

code .keyword {
    color: #c678dd;
    font-weight: bold;
}

code .string {
    color: #98c379;
}

code .number {
    color: #d19a66;
}

code .function {
    color: #61afef;
}

code .variable {
    color: #e06c75;
}

code .comment {
    color: #7d8799; 
    font-style: italic;
}

code .operator {
    color: #56b6c2;
}

pre code:before {
    content: attr(data-code);
    white-space: pre;
}

pre code[data-code*="function"]::before,
pre code[data-code*="var"]::before,
pre code[data-code*="let"]::before,
pre code[data-code*="const"]::before,
pre code[data-code*="return"]::before,
pre code[data-code*="if"]::before,
pre code[data-code*="else"]::before {
    color: #c678dd; /* Keyword color */
    font-weight: bold;
}

pre code[data-code*='"']::before,
pre code[data-code*="'"]::before {
    color: #98c379; /* String color */
}

pre code[data-code*="//"]::before {
    color: #7d8799; /* Comment color */
    font-style: italic;
}
</style>